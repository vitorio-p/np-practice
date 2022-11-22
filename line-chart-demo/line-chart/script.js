const options = {
    chart: {
        type: "line",
        height: "100%",
    },

    // data is called series in apex charts
    // we are setting the y-axis / data involved

    series: [{
        name: "sightings",
        data: data, // from data.js
    },{
        name: "interest",
        data: data2,
    },],

    // set up x-axis
    xaxis: {
        categories: categories, // from data.js
    },
}; // end of options

const optionsPie = {
    chart: {
        type: "pie",
        height: "100%",
    },

    series: [{
        name: "sightings",
        data: data3, // from data.js
    },],

    // set up labels
    labels: categories, // from data.js
}; // end of options

const divChart = document.querySelector("#chart");
const divPieChart = document.querySelector("#pie");

const chart = new ApexCharts(divChart, options);
const pieChart = new ApexCharts(divPieChart, optionsPie);


chart.render();
pieChart.render();