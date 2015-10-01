var currentCash = 4000;
var currentWorth = 0; 
var stockPrice1 = 50.41;
var oldStockPrice1 = 49.46; 
var olderStockPrice1 = 47.20; 
var stockPrice2 = 30.63; 
var oldStockPrice2 = 34.96;
var olderStockPrice2 = 40.15;
var stockPrice3 = 18.57;
var oldStockPrice3 = 14.92;
var olderStockPrice3 = 14.94;  
var borrowSource1 = 50000;
var borrowSource2 = 25000;
var borrowSource3 = 150000;  

// start graph

var stockStatsFile = 'wootData.csv';

var w = 1050;
var h = 270;

var lineScale = 25;


d3.csv(stockStatsFile, function(error, data) {
   console.log(data['Date']);
   visualizeData(data);
});

function visualizeData(data) {

  var svg = d3.select("#graph")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("class", "svg");

    //vertical measures
    for (var i = 0; i < data.length; i++) {
        svg.append("rect")
        .attr("x", (i * w)/data.length)
        .attr("y", 8)
        .attr("height", 390)
        .attr("width", 1)
        .attr("fill", "#4c4c4c");
    }

    // horizontal measures
    for (i = 0; i < 20; i++) {
        svg.append("rect")
        .attr("x", 0)
        .attr("y", h - (lineScale * (i -2))) 
        .attr("height", 1)
        .attr("width", 973)
        .attr("fill", "#3a3a3a");
    }
//DIADEM LINE
    var diademLine = d3.svg.line()
      .x(function(d,i) {
        // console.log(i);
        return i * (w/data.length);
      })
      .y(function(d) {
        // console.log(d);
        return h - ((lineScale/5) * (d['Diadem Capital']));
      });
  //draw united states line    
  svg.append("svg:path").attr("d", diademLine(data)).attr("class", "line diademLine").attr("fill","#2B803E");

//STONE LINE
    var stoneLine = d3.svg.line()
      .x(function(d,i) {
        return i * (w/data.length);
      })
      .y(function(d) {
        return h - ((lineScale/5) * (d['Stone Invest.']));
      });
    //draw canada line    
    svg.append("svg:path").attr("d", stoneLine(data)).attr("class", "line stoneLine").attr("fill","#051738");

//DELROY LINE
    var delroyLine = d3.svg.line()
      .x(function(d,i) {
        return i * (w/data.length);
      })
      .y(function(d) {
        return h - (lineScale*200 * (d['Delroy Partners']));
      });
    //draw canada line    
    svg.append("svg:path").attr("d", stoneLine(data)).attr("class", "line delroyLine").attr("fill","#590001");

}

//end graph

$('.woot').html('Woot Capital!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Worth: $' + currentWorth + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Cash: $' + currentCash);


$('.price1').html(stockPrice1); 
$('.price2').html(stockPrice2); 
$('.price3').html(stockPrice3);
$('.oldPrice1').html(oldStockPrice1); 
$('.oldPrice2').html(oldStockPrice2);
$('.oldPrice3').html(oldStockPrice3);
$('.olderPrice1').html(olderStockPrice1); 
$('.olderPrice2').html(olderStockPrice2);
$('.olderPrice3').html(olderStockPrice3);
$('#borrow1').html(borrowSource1); 
$('#borrow2').html(borrowSource2); 
$('#borrow3').html(borrowSource3); 

$('#stockButton1').click(function(){

	if(currentCash> (100*stockPrice1)) {
		currentCash -= 100*stockPrice1;
		currentWorth += 150+stockPrice1; 
		$('.woot').html('Woot Capital!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Worth: $' + currentWorth + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Cash: $' + currentCash);
	} else {
		dialog("Not Enough Cash");
	};

})

$('#stockButton2').click(function(){

	if(currentCash> (100*stockPrice2)) {
		currentCash -= 100*stockPrice2;
		currentWorth += 150+stockPrice2;
		$('.woot').html('Woot Capital!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Worth: $' + currentWorth + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Cash: $' + currentCash);		
	} else {
		alert("Not Enough Cash");
	};

})

$('#stockButton1').click(function(){

	if(currentCash> (100*stockPrice3)) {
		currentCash -= 100*stockPrice3;
		currentWorth += 150+stockPrice3; 
		$('.woot').html('Woot Capital!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Worth: $' + currentWorth + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Cash: $' + currentCash);
	} else {
		dialog("Not Enough Cash");
	};

})

$('#CPSource1').click(function() {

	currentCash += borrowSource1; 
	$('.woot').html('Woot Capital!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Worth: $' + currentWorth + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Cash: $' + currentCash);
})


$('#CPSource2').click(function() {

	currentCash += borrowSource2; 
	$('.woot').html('Woot Capital!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Worth: $' + currentWorth + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Cash: $' + currentCash);
})


$('#CPSource3').click(function() {

	currentCash += borrowSource3; 
	$('.woot').html('Woot Capital!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Worth: $' + currentWorth + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Current Cash: $' + currentCash);
})



