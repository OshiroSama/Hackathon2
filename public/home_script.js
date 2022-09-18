google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  fetch(`http://localhost:3000/api/sleep/getSleep/${uid}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (Object.keys(data).includes("msg")) {
        console.log("Error");
      } else {
        render(data);
      }
    });

  const render = (data) => {
    const queryResponse = new google.visualization.DataTable();

    queryResponse.addColumn("date", "Date");
    queryResponse.addColumn("number", "Hours of Sleep");

    data.forEach((item) => {
      queryResponse.addRow([new Date(item.date), item.hours]);
    });

    // Set Options
    const options = {
      title: "Sleeping Hours by Date",
      width: 1300,
      height: 600,
      hAxis: {
        format: "dd/MM/yyyy",
      },
      vAxis: {
        gridlines: { color: "none" },
        minValue: 0,
        format: 0,
      },
    };

    const divChart = document.createElement("div");
    divChart.setAttribute("id", "sleepChart");
    divChart.classList.add("center");

    document.body.appendChild(divChart);

    // Draw
    let chart = new google.visualization.LineChart(
      document.getElementById("sleepChart")
    );
    chart.draw(queryResponse, options);
  };
}

const urlString = window.location.href;
const uid = urlString.split("/")[4];
let body = document.querySelector("body");
let button = document.querySelector("#postSleep");
let insertValues = {};
let statusMessage = document.querySelector("#status_message");

button.addEventListener("click", (e) => {
  e.preventDefault();
  currentUrl = window.location.href;
  date = document.querySelector("#date").value;
  hours = document.querySelector("#hours").value;

  insertValues = {
    user_id: uid,
    date: date,
    hours: hours,
    went_to_sleep: "2016-06-22 19:10:25-07",
    woke_up: "2016-06-22 19:10:25-07",
  };

  fetch("./insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(insertValues),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.msg) {
        statusMessage.innerHTML = "Action failed...";
      } else {
        statusMessage.innerHTML = "Updated successfully!";
      }
    })
    .catch((e) => console.log(e));
});
