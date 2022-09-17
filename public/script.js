google.charts.load("current", { packages: ["corechart"] });
// google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let uid;
  fetch(`http://localhost:3000/api/sleep/getSleep/${uid}`)
    .then((res) => {
      if (res.status == 404) {
        console.log("error");
      }
      return res.json();
    })
    .then((data) => {
      render(data);
    });

  const render = (data) => {
    // Set Data
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
