Highcharts.setOptions({
    //https://www.highcharts.com/docs/chart-design-and-style/themes
    chart: {
        backgroundColor: {
        },
        borderWidth: 2,
        plotBackgroundColor: '',
        plotBorderWidth: 1
    },
    xAxis: {
        gridLineWidth: 1,
        tickInterval: 1
    },
    yAxis: {
        gridLineWidth: 1
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('weekly-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Weekly Productivity'
        },
        xAxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yAxis: {
            title: {
                text: 'Productivity (%)'
            },
            categories: ['20', '40', '60', '80', '100']
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('monthly-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Productivity'
        },
        xAxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
        },
        yAxis: {
            title: {
                text: 'Average Weekly Productivity (%)'
            },
            categories: ['20', '40', '60', '80', '100']
        }
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('yearly-chart', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Yearly Productivity'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July',
                'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
            ]
        },
        yAxis: {
            title: {
                text: 'Average Monthly Productivity (%)'
            },
            categories: ['20', '40', '60', '80', '100']
        }
    })
})
