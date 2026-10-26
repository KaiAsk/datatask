Papa.parse('valorant_country_summary.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        const labels = [];
        const values = [];
        results.data.forEach(row => {
            labels.push(row.Country);
            values.push(cleanNumber(row.TotalUSD));
        });
        new Chart(
            document.getElementById('countryChart'),
            {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Total earnings of top 100 players by country (USD)',
                        data: values,
                        backgroundColor: '#4e79a7'
                    }]
                },
                options: {
                    scales: {
                        y: {
                            type: 'linear',
                            title: {
                                display: true,
                                text: 'Total earnings (USD)'
                            }
                        }
                    }
                }
            }
        );
    }
});

function cleanNumber(value) {
    return Number(
        String(value).replace(/[^0-9.-]/g, '')
    );
}
