let d = new Date();
let day = d.getDay();
const completeBtn = document.querySelector('.completed-btn')

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('chart', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Weekly Productivity'
        },
        xAxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yAxis: {
            title: {
                text: 'Exercises Completed'
            },
            categories: ['0', '1', '2', '3', '4']
        },
        series: [{
            name: 'Sunday',
            data: []
        }, {
            name: 'Monday',
            data: []
        }, {
            name: 'Tuesday',
            data: []
        }, {
            name: 'Wednesday',
            data: []
        }, {
            name: 'Thursday',
            data: []
        }, {
            name: 'Friday',
            data: []
        }, {
            name: 'Saturday',
            data: []
        }
        ]
    })
});

// async function updateChart(chartId, userId, exerciseId, day) {
//     const response = await fetch(`/localhost:3001?userId=${encodeURIComponent(userId)}&exerciseId=${encodeIRIComponent(exerciseId)}`);
//     const data = await response.json();

//     const chart = Highcharts.chart.find((chart) => chart.renderTo.id ===chartId);
    
//     if (chart) {
//         chart.series[day].setData(data);
//     }
// }

// document.getElementById('userId').addEventListener('change', function() {
//     const exerciseId = document.getElementById('exerciseId').value;
//     updateChart('chart', userId, this.value, exerciseId);
// });

// document.getElementById('exerciseId').addEventListener('change', function() {
//     const userId = document.getElementById('userId').value;
//     updateChart('chart', userId, this.value);
// });

//I believe this replaces above code
completeBtn.addEventListener('click', async function() {
    const userId = document.getElementById('userId').value;
    const exerciseId = document.getElementById('exerciseId').value;

    const response = await fetch(`/localhost:3001?userId=${encodeURIComponent(userId)}&exerciseId=${encodeIRIComponent(exerciseId)}`);
    const data = await response.json();

    const chart = Highcharts.chart.find((chart) => chart.renderTo.id === 'chart');

    if (chart) {
        chart.series[day].setData(data)
    }
})
