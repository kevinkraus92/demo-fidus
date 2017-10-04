function getDailyVisits(endpoint) {
$.getJSON(endpoint, function (data) {

dailyvisits = data["dailyvisits"];
    // Build the chart
    Highcharts.chart('dailyvisits', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Porcentaje de visitas por dia'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting: { 
            enabled: false 
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
            name: 'Porcentaje',
            colorByPoint: true,
            data: [{
                name: 'Lunes',
                y: dailyvisits[0]['Lunes']
            }, {
                name: 'Martes',
                y: dailyvisits[1]['Martes'],
                sliced: true,
                selected: true
            }, {
                name: 'Miercoles',
                y: dailyvisits[2]['Miercoles']
            }, {
                name: 'Jueves',
                y: dailyvisits[3]['Jueves']
            }, {
                name: 'Viernes',
                y: dailyvisits[4]['Viernes']
            }, {
                name: 'Sabado',
                y: dailyvisits[5]['Sabado']
            },  {
                name: 'Domingo',
                y: dailyvisits[6]['Domingo']
            }]
        }]
    });
});
}
