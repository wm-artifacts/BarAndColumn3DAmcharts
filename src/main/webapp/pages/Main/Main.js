Prefab.onPropertyChange = function(key, newVal, oldVal) {
    Prefab.charts();
};

Prefab.onReady = function() {
    Prefab.charts();
};

Prefab.charts = function() {
    am4core.ready(function() {
        var {
            xaxis,
            yaxis,
            dataset
        } = Prefab;
        let chartData = [];
        let categoryAxis;
        let valueAxis;
        am4core.useTheme(am4themes_animated);
        var chart = am4core.create("container1", am4charts.XYChart3D);
        var container = document.getElementById("container1");
        container.style.width = Prefab.chartwidth;
        container.style.height = Prefab.chartheight;
        chart.logo.disabled = true;

        // prepare chart data based on xaxis and yaxis values 
        dataset = typeof dataset === "string" ? (dataset.length ? JSON.parse(dataset) : []) : dataset;
        dataset && dataset.forEach((item) => {
            chartData.push({
                [xaxis]: item[xaxis],
                [yaxis]: item[yaxis]
            });
        });
        chart.data = chartData;

        if (Prefab.type == "Column Chart") {
            categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
            valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            categoryAxis.renderer.labels.template.rotation = 270;

        } else {
            categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
            valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
            categoryAxis.renderer.labels.template.rotation = 0;

        }

        categoryAxis.dataFields.category = Prefab.xaxis;
        categoryAxis.renderer.labels.template.hideOversized = false;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.tooltip.label.rotation = 270;
        categoryAxis.tooltip.label.horizontalCenter = "right";
        categoryAxis.tooltip.label.verticalCenter = "middle";

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries3D());
        if (Prefab.type == "Column Chart") {
            series.dataFields.valueY = Prefab.yaxis;
            series.dataFields.categoryX = Prefab.xaxis;
        } else {
            series.dataFields.valueX = Prefab.yaxis;
            series.dataFields.categoryY = Prefab.xaxis;
        }
        series.name = Prefab.yaxis; //Prefab.aggregationcloumn;
        series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;

        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        columnTemplate.stroke = am4core.color("#FFFFFF");

        columnTemplate.adapter.add("fill", function(fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })

        columnTemplate.adapter.add("stroke", function(stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineY.strokeOpacity = 0;

    });

}
