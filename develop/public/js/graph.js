const express = require('express');
const Exercise = require('../models/Exercise');

let d = new Date();
let day = d.getDay();
console.log(day);

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('chart', {
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
                text: 'Exercises Completed'
            },
            categories: ['0', '1', '2', '3', '4']
        },
        series: [{
            name: 'sample',
            data: [0,2,4,6,1,9,9]
        }, {
            name: 'data',
            data: [6,3,1,6,4,3,2]
        }]
    })
});

async function generateData(userId, exerciseId, day) {
    
}
