google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // when everything is coming from one server, you don't need to define domain.  Just "/api/sleep..." is enough
    // This also allows to not have to change your code when you're about to deploy.
    fetch(`http://localhost:3000/api/sleep/getSleep/${uid}`, {
        method: 'GET', // fetch by default uses GET method if no method is provided
        headers: { 'Content-Type': 'application/json' }, // this header is unnecessary. Content-Type is only applicable when you're sending a body to the server. It's used to tell the server what kind of data it's receiving. Since you have no body in a get request, this header is extra/misleading.
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (Object.keys(data).includes('msg')) {
                console.log('Error');
            } else {
                render(data);
            }
        });

    // good job splitting everything into different functions
    const render = (data) => {
        const queryResponse = new google.visualization.DataTable();

        queryResponse.addColumn('date', 'Date');
        queryResponse.addColumn('number', 'Hours of Sleep');

        data.forEach((item) => {
            queryResponse.addRow([new Date(item.date), item.hours]);
        });

        // Set Options
        const options = {
            title: 'Sleeping Hours by Date',
            width: 1300,
            height: 600,
            hAxis: {
                format: 'dd/MM/yyyy',
            },
            vAxis: {
                gridlines: { color: 'none' },
                minValue: 0,
                format: 0,
            },
        };

        const divChart = document.createElement('div');
        divChart.setAttribute('id', 'sleepChart');
        divChart.classList.add('center', 'rounded');

        document.body.appendChild(divChart);

        // Draw
        let chart = new google.visualization.LineChart(document.getElementById('sleepChart'));
        chart.draw(queryResponse, options);
    };
}

const urlString = window.location.href;
const uid = urlString.split('/')[4]; // Ok, but need to be careful with this!  Anyone can put anything in a url...
let body = document.querySelector('body');
let button = document.querySelector('#postSleep');
let insertValues = {};
let statusMessage = document.querySelector('#status_message');

button.addEventListener('click', (e) => {
    e.preventDefault();
    currentUrl = window.location.href;
    date = document.querySelector('#date').value;
    hours = document.querySelector('#hours').value;

    insertValues = {
        user_id: uid,
        date: date,
        hours: hours,
        went_to_sleep: '2016-06-22 19:10:25-07',
        woke_up: '2016-06-22 19:10:25-07',
    };

    // Easy to make this kind of mistake, since it's easy to think of a url as a file path... and it kind of is. BUT it isn't. No need for the "." before the slash 😉
    fetch('./insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(insertValues),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.msg) {
                statusMessage.innerHTML = 'Action failed...';
            } else {
                statusMessage.innerHTML = 'Updated successfully!';

                // maybe add something like this:
                setTimeout(() => {
                    location.reload();
                }, 100);
                // that way the user doesn't have to manually refresh to see changed graph
            }
        })
        .catch((e) => console.log(e));
});
