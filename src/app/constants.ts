export const CHART_OPTIONS = {
    chart: {
      style: {
        fontFamily: "Montserrat",
      },
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#9e9e9e',
      width: 400,
      height: 400,
      type: 'line'
    },
    title: {
      text: 'Market Qtr Report',
      align: 'left',
      x: 30,
      style: {
        fontWeight: 'bold'
      }
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'January',
        'February',
        'March'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Select monthly revenue',
        stype: {
          fontWeight: 'bold'
        }
      }
    },
    legend: {
      squareSymbol: false,
      symbolWidth: 0,
      symbolHeight: 0
    },
    series: [
      {
        name: 'Color',
        pointWidth: 40,
        data: []
      }
    ]
  }

export const COLORS = ['Red', 'Green', 'Purple', 'Yellow', 'Blue', 'Grey', 'Orange'];

export const DEFAULT_CATEGORIES = [  
    {   name: 'January',
        revenue: '3000',
        color: 'Green'  
    },  
    {   name: 'February',    
        revenue: '5000',    
        color: 'Blue',  
    },  
    {   name: 'March',    
        revenue: '2000',    
        color: 'Yellow' 
    }];

export const DEFAULT_GRAPH_TYPE = 'column';