import React from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

import { Bar } from "react-chartjs-2";
import { getFlagLabel } from "../../utils/utils";

const FootprintDataChart = ({
  historicalValues,
  latestValue,
  unit,
  flag,
  year,
  divisionFootprint,
}) => {
  let bgColor;

  if (flag == "p") {
    bgColor = "RGBA(250, 89, 95,1)";
  } else if (flag == "e") {
    bgColor = "rgb(251, 129, 133)";
  } else {
    bgColor = "RGBA(25, 21, 88,1)";
  }

  const sortedHistorical = historicalValues.sort((a, b) => a.year - b.year);
  const labels = sortedHistorical.map((data) => data.year);

  const legalUnitFootprints = sortedHistorical.map((data) => data.value);

  labels.push(year != "NA" ? year : divisionFootprint.info);
  legalUnitFootprints.push(latestValue);

  if (!labels.includes(divisionFootprint.info)) {
    labels.push(divisionFootprint.info);
  }

  const divisionFootprints = labels.map((label) =>
    label == divisionFootprint.info ? divisionFootprint.value : null
  );

  const legalUnitDataset = {
    label: getFlagLabel(flag),
    data: legalUnitFootprints,
    backgroundColor: bgColor,
    categoryPercentage: 0.6,
    barPercentage: 0.6,
    skipNull: true,
  };

  const divisionDataset = {
    label: "Valeur de la branche",
    data: divisionFootprints,
    backgroundColor: "#ffb642",
    skipNull: true,
    categoryPercentage: 0.6,
    barPercentage: 0.6,
  };

  const datasets = [legalUnitDataset, divisionDataset];

  const data = {
    labels: labels,
    datasets: datasets,
  };

  let suggestedMax =
    unit === "%"
      ? latestValue < 10
        ? 10
        : latestValue < 25
        ? 25
        : latestValue < 50
        ? 50
        : 100
      : null;

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    devicePixelRatio: 2,
    layout: {
      padding: {
        top: 0,
        bottom: 10,
        left: 0,
        right: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "RGBA(25, 21, 88,0.7)",
        callbacks: {
          label: function (context) {
            let label = " " + context.parsed.y + " " + unit;
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: suggestedMax,
        color: "#191558",
        grid: {
          color: "#ececff",
        },
        ticks: {
          color: "#191558",
          font: {
            size: 9,
          },
        },
      },
      x: {
        ticks: {
          color: "#191558",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "#ececff",
        },
      },
    },
  };

  return (
    <div className="mb-3">
      <Bar data={data} options={options} />
    </div>
  );
};

export default FootprintDataChart;
