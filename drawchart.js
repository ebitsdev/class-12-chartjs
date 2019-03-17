let ctx = document.getElementById('myChart').getContext('2d')
let myArr = [0, 10, 5, 2, 20, 30, 45]
function passData(arr){
    return arr
}
let chart = new Chart(ctx, {
    // Type of chart
    type: 'bar',
    data : {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(255, 99, 132)', 'blue', 'grey', 'purple', 'olive', 'orange', 'rgb(200, 100, 10)'],
            // borderColor: 'rgb(255, 99, 132)',
            data: passData(myArr)
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(100, 150, 95)'
            }
        },
        scales: {
            yAxes: [{
                ticks:{
                    beginAtZero: false
                }
            }]
        }
    }
})