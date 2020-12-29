import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

function Chart() {
  //TODO: clean up
  const HourlyData = useSelector((state) => state.weather.data.hourly);
  var Labels = [];
  Labels = HourlyData.map((data) => new Date(data.dt * 1000).getHours());
  var Temps = [];
  Temps = HourlyData.map((data) => data.temp);
  var IMG = HourlyData.map((data) => [
    data.weather[0].icon,
    data.weather[0].main,
  ]);
  console.log(IMG);
  return (
    <>
      <Line
        height={300}
        width={900}
        data={{
          labels: [...Labels],
          datasets: [
            {
              label: "",
              data: [...Temps],
              images: [...IMG],
              //backgroundColor: "rgba(253, 181, 86, 0.555)",
              backgroundColor: "rgba(255, 225, 55, 0.589)",
              borderColor: "orange",
              borderWidth: 2,
              pointBackgroundColor: "orange",
              hoverBackgroundColor: "red",
              hoverRadius: 7,
              hoverBorderColor: "red",
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Temperature",
                  fontSize: 22,
                  fontFamily: "Quicksand",
                  fontColor: "black",
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: "Time",
                  fontSize: 22,
                  fontFamily: "Quicksand",
                  fontColor: "black",
                },
              },
            ],
          },
          maintainAspectRatio: false,
          responsive: false,
          tooltips: {
            enabled: false,
            custom: function (tooltipModel) {
              var tooltipEl = document.getElementById("chartjs-tooltip");

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement("div");
                tooltipEl.id = "chartjs-tooltip";
                tooltipEl.innerHTML = "<div></div>";
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
              }

              // Set caret Position
              tooltipEl.classList.remove("above", "below", "no-transform");
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add("no-transform");
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              // Set Text
              console.log(tooltipModel);
              if (tooltipModel.body) {
                var bodyLines = tooltipModel.body.map(getBody);

                var innerHtml = "<div>";

                // titleLines.forEach(function (title) {
                //   innerHtml += "<div>" + title + "</div>";
                // });
                // innerHtml += "</div>";style='border-color: black; border-width: 3px; border-radius: 10%;'

                bodyLines.forEach(function () {
                  var img =
                    "<img src='http://openweathermap.org/img/wn/" +
                    IMG[tooltipModel.dataPoints[0].index][0] +
                    ".png' />";
                  var des =
                    "<center><div>" +
                    Math.round(tooltipModel.dataPoints[0].value) +
                    " <sup>o</sup>C</div>" +
                    "<b>" +
                    IMG[tooltipModel.dataPoints[0].index][1] +
                    "</b></center>";
                  console.log("toottip", tooltipModel.dataPoints);
                  innerHtml += img + des;
                });
                innerHtml += "</div>";
                //   <img
                //   src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                //   alt="Weather"
                // />

                var tableRoot = tooltipEl.querySelector("div");
                tableRoot.innerHTML = innerHtml;
                console.log(innerHtml);
              }

              // `this` will be the overall tooltip
              var position = this._chart.canvas.getBoundingClientRect();

              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1;
              tooltipEl.style.position = "absolute";
              tooltipEl.style.left =
                position.left + window.pageXOffset + tooltipModel.caretX + "px";
              tooltipEl.style.top =
                position.top + window.pageYOffset + tooltipModel.caretY + "px";
              tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
              tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
              tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
              tooltipEl.style.padding =
                tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
              tooltipEl.style.pointerEvents = "none";
              tooltipEl.style.background =
                "linear-gradient(to right, #4e54c8, #8f94fb)";
              tooltipEl.style.borderRadius = "10px";
              tooltipEl.style.boxShadow = "3px 3px 25px #4e54c88c";
              tooltipEl.style.color = "ivory";
              tooltipEl.style.transition = "all 0.15s ease-in-out";
            },
          },
        }}
      />
    </>
  );
}

export default Chart;
