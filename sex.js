function getSexVisits(endpoint) {
$.getJSON(endpoint, function (data) {

    // Build the chart
    Highcharts.chart('sex', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Sexo'
        },
        credits: {
            enabled: false
        },
        exporting: { 
            enabled: false 
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [ {
                name: 'Hombres',
                y: data['man'],
                sliced: true,
                selected: true

            }, {
                name: 'Mujeres',
                color: 'pink',
                y: data['girl']
            }]
        }]
    });
});
}