"use strict";
(function(){

//global variables
var width = 500;
var height = 500;
var data


//rendering data from server
$.ajax({
  url: '/get-data',
  type: 'GET',
})
.done(function(response) {
  data = response
  console.log(response);
  stringToNb(response);
})
.fail(function() {
  console.log("error");
});

//d3 code
var svg = d3.select('.chart')
            .append('svg')
            .attr('height', height)
            .attr('width', width)
            .append('g')
            .attr('transform', 'translate(0,0)');

var radiusScale = d3.scaleSqrt().domain([0, 445]).range([0,40])

function makeCircles(d){
  var circles = svg.selectAll('.target')
                   .data(data)
                   .enter().append('circle')
                   .attr('class', 'target')
                   .attr('r', function(d){
                    return radiusScale(d.tweets)
                   })
}

//turns back the string for number of tweets to an integer
function stringToNb (data) {
  data.forEach(function(d){
    d.tweets = +d.tweets
    makeCircles(d)
  })
};































})();
