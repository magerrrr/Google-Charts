google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartSpending);
google.charts.setOnLoadCallback(drawChartCongregations);
google.charts.setOnLoadCallback(drawChartMargin);

function drawChartMargin() {
  var wrapper = new google.visualization.ChartWrapper({
    
    chartType: 'AreaChart',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1zrE-ViuB_cfzMpGhlNpBEQNlodILOkVMo_wkYM65AkM/gviz/tq?sheet=Sheet1&headers=1&tq=Select A, D',
    options: {
    title: 'MARGIN (MONTH)', 
    titleTextStyle: { color: '#666666' },
    titlePosition: 'out', 
    colors: ['#30e059', '#ff7120'],
    backgroundColor: '#333333',
    vAxis: {gridlines: {count: '6', color: '#404040'}, textPosition: 'in'},
    hAxis: {gridlines: {count: '0'}},
    hAxis: {showTextEvery: '8', textColor: '#666666', textPosition: 'out'},
    legend: { position: 'bottom' },
    legendTextStyle: { color: '#666666' }, // Legend text color
    areaOpacity: '0.6',
    tooltip: {showColorCode: 'true'},
    },
    
    containerId: 'chartMargin'
  });
  wrapper.draw()
}

function drawChartCongregations() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'BarChart',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1zrE-ViuB_cfzMpGhlNpBEQNlodILOkVMo_wkYM65AkM/gviz/tq?sheet=Sheet1&headers=1&tq=Select A, E, F',
    options: { 
    title: 'CONGREGATIONS, SPENDING ON HUMAN', 
    titleTextStyle: { color: '#666666' },
    colors: ['#30e059', '#ff7120'], 
    backgroundColor: '#333333',
    bar: {groupWidth: '8'},
    hAxis: {textColor: '#666666', textPosition: 'out'}, // X-line text
    vAxis: {textColor: '#666666', textPosition: 'out'}, // Y-line text
    legendTextStyle: { color: '#666666' }, // Legend text color
    hAxis: {gridlines: {color: '#404040', count: '10'}}, // Vertical gridlines color
    legend: { position: 'bottom' },
    areaOpacity: '0.9',
    tooltip: {showColorCode: 'true'},
    },
    
    containerId: 'chartCongregations'
  });
  wrapper.draw()
}

function drawChartSpending() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'AreaChart',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1zrE-ViuB_cfzMpGhlNpBEQNlodILOkVMo_wkYM65AkM/gviz/tq?sheet=Sheet1&headers=1&tq=Select A, B, C',
    options: {
      title: 'CONGREGATIONS/SPENDING (MONTH)', 
      titleTextStyle: { color: '#666666' },
      titlePosition: 'out', 
      colors: ['#30e059', '#ff7120'],
      backgroundColor: '#333333',
      vAxis: {gridlines: {count: '6', color: '#404040'}, textPosition: 'in'},
      hAxis: {gridlines: {count: '0'}},
      hAxis: {showTextEvery: '8', textColor: '#666666', textPosition: 'out'},
      legend: { position: 'bottom' },
      legendTextStyle: { color: '#666666' }, // Legend text color
      areaOpacity: '0.6',
      tooltip: {showColorCode: 'true'},
    },
    
    containerId: 'chartSpending'
  });
  wrapper.draw()
}