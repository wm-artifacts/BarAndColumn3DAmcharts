# 3D Bar and Column Chart using amCharts4

This Prefab showcases Wavemaker capabilities to integrate an external library like **amCharts** to create 3D Bar and Column charts in your application.

# amCharts

**amCharts** is a comprehensive chart library that allows you to create interactive and versatile charts within your web projects using Javascript.

# Dependencies

The below provided cdn urls are the primary dependencies required to generate a chart using amCharts.

1. [Core.js](https://cdn.amcharts.com/lib/4/core.js)
2. [Charts.js](https://cdn.amcharts.com/lib/4/charts.js)

We can include those files in our prefab in multiple ways.

1. Adding them as script tags in the index.html file like below. <br>
    `<script src="https://cdn.amcharts.com/lib/4/core.js"></script>`<br>
    `<script src="https://cdn.amcharts.com/lib/4/charts.js"></script>`

2. Download the files and Add in the resources folder of the prefab.<br>
   Once added, Please navigate to Settings -> Prefab Configuration -> Resources and select those files.

**Additional Dependencies:** <br>

**amCharts** also provides different themes to change the way out charts acts,looks and even modify.<br>
For that, we will need to included additional files depending upon the theme you want to use.<br>
For more information, Please refer to [amCharts Documentation.](https://www.amcharts.com/docs/v4/concepts/themes/)

# Prefab Properties

1. **Dataset**: This is refers to the dataset using which the chart has to be rendered.
2. **X-Axis**: The key from the dataset which will acts as a X-Axis of the chart.
3. **Y-Axis**: The key from the dataset which will acts as a Y-Axis of the chart.
4. **Type**: Type of the chart to be built and rendered.(In this case, Bar or Column Chart(*Default*)).
5. **Chart Width**: Sets the width of the chart(*optional*).
6. **Chart Height**: Sets the height of the chart (*optional*).

# Using the Prefab
1. Download and import the prefab.
2. Publish the prefab to your project.
3. Drag and drop the prefab on the required page.
4. Bind the input properties of the prefab.
5. Preview the app.

# Behind the scenes

1. Drag and drop a container, which will be used to render the chart.
2. We use the amCharts provided function(**am4core.ready()**) to make sure that our chart is constructed only after the dependencies have been loaded.
3. Next step is to use amCharts constructor(**am4core.create()**), in which we provide the container selector and the type of chart.
       For eg : `var chart = am4core.create("container1", am4charts.XYChart3D);`
4. The above step will create a chart javascript object, which can be used to configure various properties of the chart.


# Sample Images

1. ![Column Chart](/assets/column_chart.png)
2. ![Bar Chart](/assets/bar_chart.png)
