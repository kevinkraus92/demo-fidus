function getEtary(endpoint) {

$.getJSON(endpoint, function (data) {
    Highcharts.chart('etary', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Edades'
        },
        exporting: { 
            enabled: false 
        },
        xAxis: {
            categories: ['0 - 18', '18 - 25', '25 - 35', '35 - 45', '45 - 55', '55 - 65', '65+'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Cantidad de visitantes',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Clientes',
            showInLegend: false,
            data: [ data["0 - 18"],
                    data["18 - 25"],  
                    data["25 - 35"],  
                    data["35 - 45"],  
                    data["45 - 55"], 
                    data["55 - 65"],  
                    data["65+"]]
        }]
    });
});
}