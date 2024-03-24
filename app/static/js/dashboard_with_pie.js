// Data for the pie chart
const detectionMethods = ['Astrometry', 'Direct Imaging', 'Disk Kinematics', 'Eclipse Timing Variations', 'Gravitational Microlensing', 'Orbital Brightness Modulation', 'Pulsar Timing', 'Pulsation Timing Variations', 'Radial Velocity', 'Transit', 'Transit Timing Variations'];
const methodCounts = [2, 62, 1, 17, 154, 9, 7, 2, 1027, 3945, 24];

// Creating the pie chart
const pieCtx = document.getElementById('detectionMethodPie').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: detectionMethods,
        datasets: [{
            data: methodCounts,
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#FF5733', '#33FF57',
                '#5733FF', '#FF33A6', '#33D6FF', '#D433FF', '#FF8E33', '#78FF33'
            ]
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Exoplanet Detection Methods'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
});