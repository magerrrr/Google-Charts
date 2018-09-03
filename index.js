google.charts.load('current');
google.charts.setOnLoadCallback(drawChartSpending);

function drawChartSpending() {
  var wrapper = new google.visualization.ChartWrapper({
    chartType: 'AreaChart',
    dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1zrE-ViuB_cfzMpGhlNpBEQNlodILOkVMo_wkYM65AkM/edit#gid=0',
    options: {
    	title: 'Congregations/Spending (MONTH)', 
    	titleTextStyle: { color: '#666666' },
    	titlePosition: 'in', 

    	
    	colors: ['#30e059', '#ff7120'],
    	backgroundColor: '#333333',
    	
    	vAxis: {gridlines: {count: '6', color: '#404040'}, textPosition: 'in'},
    	
    	hAxis: {gridlines: {count: '0'}},
    	hAxis: {showTextEvery: '8', textColor: '#666666', textPosition: 'out'},

    	legend: { position: 'bottom' },
    	legendTextStyle: { color: '#666666' }, 
    	areaOpacity: '0.6',
    	tooltip: {showColorCode: 'true'},
    },
    
    containerId: 'chartSpending'
  });
  wrapper.draw()
}
