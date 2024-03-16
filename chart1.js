const ctx = document.getElementById('barchart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Organik', 'Plastik', 'Kertas', 'Karet', 'Logam', 'Kain', 'Kaca', 'Campuran'],
        datasets: [{
            label: 'Komposisi sampah di indonesia (%)',
            data: [60, 14, 9, 5.5, 4.3, 3.5, 1.7, 2.4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor:[
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 13,
                        weight: 'bold'
                    }
                }
            }
        },
        scales: {
            y: {
                max: 70,
                ticks: {
                    color: 'white'
                }
            },
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            }
        }
    }
});