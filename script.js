Papa.parse('valorant_top100.csv', {
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results) {
        console.log("running");
        console.log(results.data);
        const tbody = document.querySelector('#dataTable tbody');
        results.data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.Rank}</td>
                <td>${row.Player}</td>
                <td>${row.Country}</td>
                <td>${row.EarningsUSD}</td>
            `;
            tbody.appendChild(tr);
        });
    },
    error: function(err) {
        console.error("FAILED");
        console.error(err);
    }
});
