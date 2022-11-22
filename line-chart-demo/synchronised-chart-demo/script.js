const campaigns = [3, 5, 1, 5, 8, 4];
const reach = [5000, 1000, 2222, 3333, 4444, 5555];
const categories = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const campaignChartOptions = {
    chart: {
        type: "line",
        height: "100%",
        id: "campaign", // chart identifier, no relations to chart css
        group: "campaign-reach-conpare"
    },
    series: [
        {
            name: "Reach",
            data: reach
        },
    ],
    xaxis: {
        categories: categories,
    },
};

const campaignChartOptions2 = {
    chart: {
        type: "line",
        height: "100%",
        id: "campaign", // chart identifier, no relations to chart css
        group: "campaign-reach-conpare"
    },
    series: [
        {
            name: "Campaigns",
            data: campaigns
        },
    ],
    xaxis: {
        categories: categories,
    },
};

const divChart = document.querySelector("#chart");
const chart = new ApexCharts(divChart, campaignChartOptions);
chart.render();

const divChart2 = document.querySelector("#chart2");
const chart2 = new ApexCharts(divChart2, campaignChartOptions2);
chart2.render();