

  //tabletop
  //window.onload = function() { init() };

  var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1AGw9ICpGoyBL0qz0zWhEAeR3MfXUEvX4MEEnH7HAzO8/edit#gid=0';

  function init() {
    Tabletop.init( { key: public_spreadsheet_url,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {

    var container = document.querySelector(".container");
    container.innerHTML = "";

    var doubles = data.map(function(data){

      var obj = {};
      obj = [data.Symbol, Number(data.Price)];
      console.log(data.Symbol);
      return obj;
    })


    drawChart(doubles);

              // var myOrder = new Array;
              // myOrder = [
              //       ['Ham', 12],
              //       ['Vegan Sausage', 11],
              //       ['Mushrooms', 12],
              //       ['Extra Cheese', 14]
              //       ];

  }


  //GOOGLE CHARTS
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(init);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart(dataStuff) {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Amount');

    data.addRows(dataStuff);

    // Set chart options
    var options = {'title':'Stock Prices',
                   'width':800,
                   'height':800,
                 colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
is3D: true};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
