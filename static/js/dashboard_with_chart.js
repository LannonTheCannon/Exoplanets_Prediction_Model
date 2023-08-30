document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Dashboard JS Loaded");

    // Data for the histogram
    const discoveryYears = [1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
    const discoveryCounts = [2, 1, 1, 6, 1, 6, 13, 16, 12, 29, 22, 27, 36, 31, 52, 65, 94, 97, 138, 138, 126, 875, 157, 1517, 153, 326, 203, 234, 525, 338, 9];

    // Creating the histogram
    const ctx = document.getElementById('discoveryYearHistogram').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: discoveryYears,
            datasets: [{
                label: 'Number of Exoplanets Discovered',
                data: discoveryCounts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Data for the habitable zone pie chart
    const habitabilityLabels = ['In Habitable Zone', 'Outside Habitable Zone'];
    const habitabilityCounts = [265, 4985];

    // Creating the habitable zone pie chart
    const pieCtx = document.getElementById('detectionMethodPie').getContext('2d');
    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: habitabilityLabels,
            datasets: [{
                data: habitabilityCounts,
                backgroundColor: ['#4CAF50', '#FFC107'],
                borderColor: ['#FFFFFF', '#FFFFFF'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Exoplanets in Habitable Zone'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    let compositionCanvas = document.getElementById('compositionBarChart').getContext('2d');
    let compositionData = {
        labels: ['Rocky', 'Lava World', 'Iron World', 'Shadow World', 'Mirror World', 'Jungle World', 'Radiation World', 'Methane World', 'Titanium World', 'Volcanic World', 'Canyon World', 'Magnetic World', 'Storm World', 'Plateau World', 'Tidally Locked World', 'Nomad Planet', 'Maelstrom World'],
        datasets: [{
            label: 'Number of Exoplanets',
            data: [1253, 481, 421, 355, 269, 251, 233, 219, 219, 217, 216, 212, 202, 196, 189, 164, 153],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(201, 203, 207, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(201, 203, 207, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 205, 86, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 205, 86, 1)'
            ],
            borderWidth: 1
        }]
    };
    let compositionOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(compositionCanvas, {
        type: 'bar',
        data: compositionData,
        options: compositionOptions
    });
});