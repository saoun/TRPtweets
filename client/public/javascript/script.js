"use strict";
(function(){

//declaring variables
var width = 500;
var height = 500;
var data
//READ DOCS
//separating the circles along x axis
var forceXSplit = d3.forceX(function(d){
  width * (d.gender === "m" ? 0.3 : 0.7)
}).strength(0.2);

//combining the circles along x axis at half the width of svg box
var forceXCombine = d3.forceX(width/2).strength(0.1)

var forceYCombine = d3.forceY((height/3) + 10).strength(0.15)

//prevents the circles from overlapping. Radius of force is scaled based on circle
//size, so larger circles push others further from their center than smaller ones
var forceCollide = d3.forceCollide(function(d){
  return radiusScale(d.tweets) + 1
}).iterations(10);

//simulation to determine proper location of each circle in group
var simulation = d3.forceSimulation()
                   .force('x', forceXCombine)
                   .force('y', forceYCombine)
                   .force('collide', forceCollide);

var svg = d3.select('.chart')
            .append('svg')
            .attr('height', height)
            .attr('width', width)
            .append('g')
            .attr('transform', 'translate(0,0)');

//445 refers max tweets for one person
var radiusScale = d3.scaleSqrt().domain([0, 445]).range([0,40])
var tooltip = d3.select('body')
                .append('div')
                .attr('class', 'tooltip')
                .text('')



//rendering data from server
$.ajax({
  url: '/get-data',
  type: 'GET',
})
.done(function(response) {
  console.log(response);
  makeMagic(response);
})
.fail(function() {
  console.log("error");
});

//
//
//turns back the string for number of tweets to an integer
function stringToNb (data) {

  data.forEach(function(d){
    d.tweets = +d.tweets
  })
  return data
};

//tooltip function

  var mouseover = function(){
    return tooltip.style('visibility','visible');
  };

  var mouseout = function() {
    return tooltip.style('visibility', 'hidden')
  };

  var mousemove = function(){
    return tooltip.style('top', (event.pageY-10)+'px').style('left',(d3.event.pageX+10)+'px')
  };


//
var ticked = function(circles){
  circles.attr('cx', function(d){
    return d.x
  })
          .attr('cy', function(d){
    return d.y
          })
}

//starting forces simulation
var startForces = function(data){
  simulation.nodes(data)
            .on('tick', ticked)
}


function makeCircles(data){
  var circles = svg.selectAll('.target')
                   .data(data)
                   .enter().append('circle')
                   .attr('class', 'target')
                   .attr('r', function(d){
                      return radiusScale(d.tweets)
                   })
                   .on('mouseout', mouseout)
                   .on('mouseover', mouseover)
                   .on('mousemove', mousemove);
  return circles
}
//missing the style fill element. see line 69


function makeMagic(data){
  var parsedData = stringToNb(data)
  var circles = makeCircles(parsedData)
  startForces(parsedData)
  ticked(circles)
}












})();














