var fullSeries = [
   {
      name: 'fulltime_men_applied',
      data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]
   }, 
   {
      name: 'fulltime_women_applied',
      data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41047, 44430, 46845, 52265]
   },
   {
      name: 'fulltime_men_admitted',
      data: [7580, 9210, 8419, 8517, 7816, 8365, 8707, 10917, 11866, 11758, 12748, 14103, 13981, 13781]
   }, 
   {
      name: 'fulltime_women_admitted',
      data: [10311, 12135, 10759, 11200, 9863, 9991, 10269, 12046, 12966, 12837, 13761, 16170, 16231, 15821]
   },
   {
      name: 'fulltime_men_enrolled',
      data: [1607, 2031, 1838, 1893, 1695, 1858, 1583, 2328, 2616, 2538, 2711, 2669, 2725, 3220]
   }, 
   {
      name: 'fulltime_women_enrolled',
      data: [2113, 2558, 2303, 2399, 2054, 2089, 1861, 2245, 2612, 2383, 2581, 3077, 2974, 3484]
   }
]

Highcharts.chart('barChart', {
   chart: {
       type: 'bar'
   },
   title: {
       text: 'Women Application Data (2005-2018)'
   },
   subtitle: {
       text: 'Source: DSC 106'
   },
   xAxis: {
       categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
       title: {
           text: 'Year'
       }
   },
   yAxis: {
       min: 0,
       title: {
           text: 'Number of People'
       },
       labels: {
           overflow: 'justify'
       }
   },
   tooltip: {
       valueSuffix: ' people'
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
       backgroundColor:
           Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
       shadow: true
   },
   credits: {
       enabled: false
   },
   series: [
    {
        name: 'fulltime_women_applied',
        data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 35408, 38822, 41047, 44430, 46845, 52265]
    }
   ]
});

Highcharts.chart('lineChart', {
   title: {
      text: 'Admission Data (2005-2018)'   
   },
   subtitle: {
      text: 'Source: DSC 106'
   },
   xAxis: {
      categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
      title: {
          text: 'Year'
      }
   },
   yAxis: {
      title: {
         text: 'Number of People'
      },
      plotLines: [{
         value: 0,
         width: 1,
         color: '#808080'
      }]
   },  
   tooltip: {
      valueSuffix: ' People'
   },
   legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
   },
   series: [
      {
          name: 'fulltime_men_admitted',
          data: [7580, 9210, 8419, 8517, 7816, 8365, 8707, 10917, 11866, 11758, 12748, 14103, 13981, 13781]
      }, 
      {
          name: 'fulltime_women_admitted',
          data: [10311, 12135, 10759, 11200, 9863, 9991, 10269, 12046, 12966, 12837, 13761, 16170, 16231, 15821]
      }
   ] 
});

Highcharts.chart('pieChart', {
   chart: {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false,
       type: 'pie'
   },
   title: {
       text: 'Fulltime Enrollment (2005)'
   },
   subtitle: {
      text: 'Source: DSC 106'
   },
   tooltip: {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
   },
   plotOptions: {
       pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           dataLabels: {
               enabled: true,
               format: '<b>{point.name}</b>: {point.percentage:.1f} %'
           }
       }
   },
   series: [{
       name: 'Enrollment',
       colorByPoint: true,
       data: [{
           name: 'Men',
           y: 1607,
           sliced: true
       }, {
           name: 'Women',
           y: 2113
       }]
   }]
});