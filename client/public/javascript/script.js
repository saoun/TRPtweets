"use strict";
(function(){

//declaring variables
var width = window.innerWidth;
var height = window.innerHeight;
var data;
//READ DOCS
//separating the circles along x axis
var pageSpread = function(d){
    switch (d.gender){
      case 'm': return 0.3
      case 'f': return 0.5
      case 'n': return 0.7
    }
}

var forceXSplit = d3.forceX(function(d){
  return width * pageSpread(d)
  }).strength(0.2);

//combining the circles along x axis at half the width of svg box.
//strength is defined between 0 and 1, and is the speed of circles
//moving onto the screen
var forceXCombine = d3.forceX(width/2).strength(0.2)

var forceYCombine = d3.forceY(height/2).strength(0.15)

//prevents the circles from overlapping. Radius of force is scaled based on circle
//size, so larger circles push others further from their center than smaller ones
var forceCollide = d3.forceCollide(function(d){
  return radiusScale(d.tweets) + 1 // +1 for distance between circles
}).iterations(10); //the higher the iteration is, the more rigid the circle bounce is

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
            //TODO find a responsive solution

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

var mouseover = function(d){
  tooltip.style('visibility','visible');
  tooltip.html(d.person + "<br> Trump tweets: " + d.tweets)
};

var mouseout = function() {
  tooltip.style('visibility', 'hidden')
};

var mousemove = function(){
  tooltip.style('top', (event.pageY-10)+'px').style('left',(d3.event.pageX+10)+'px')
};

//starting forces simulation
var startForces = function(data, circles) {
  var ticked = function() {
    circles.attr('cx', function(d) { return d.x })
         .attr('cy', function(d) { return d.y })
  }
  simulation.nodes(data)
            .on('tick', ticked)
}

var colorSplit = function(d){
    switch (d.gender){
      case 'm': return 'dodgerblue'
      case 'f': return 'salmon'
      case 'n': return 'lightgreen'
    }
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
                   .on('mousemove', mousemove)
                   .style('fill', colorSplit);
  return circles
}

//toggles
  var pushRight = function(x) {
  atRight = x;
  toggleSwitch.transition().duration(250)
        .attr('cx', (atRight ? 27 : 51))
        .style('fill', 'white');
        rect.transition().duration(250)
        .style('fill', atRight ? 'lightgray' : 'blue');
}

var atRight = true

var onClick = function(){
  simulation
  .force('x', atRight ? forceXSplit : forceXCombine)
  .alpha(0.7)
  .restart()
  pushRight(!atRight);
}

var rect = svg.append('rect')
              .attr('x', 7)
              .attr('y', 7)
              .attr('rx', 22) //border radius
              .attr('ry', 22)
              .style('fill', 'lightgray')
              .attr('width', 64)
              .attr('height', 40)
              .on('click', onClick)

var toggleSwitch = svg.append('circle')
                .attr('cx', 27)
                .attr('cy', 27)
                .attr('r', 16)
                .style('fill', 'white')
                .on('click', onClick)

var res = {
    'getValue': function() { return atRight; },
    'setValue': pushRight,
    'remove': function() { toggleSwitch.remove(); }
};

//readyyyyy
function makeMagic(data){
  var parsedData = stringToNb(data)
  var circles = makeCircles(parsedData)
  startForces(parsedData, circles)
}


})();














