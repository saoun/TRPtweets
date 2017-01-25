"use strict";
(function(){

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


//declaring variables
var width = window.innerWidth;
var height = window.innerHeight;
var data;

//separating the circles along x axis for gender
var pageGenderSpread = function(d){
    switch (d.gender){
      case 'm': return 0.3
      case 'f': return 0.5
      case 'n': return 0.7
    }
}

//separating the circles along x and y axis for category
var pageXCategorySpread = function(d){
    switch (d.category){
      case 'democratic presidential candidates': return 0.2
      case 'republican presidential candidates': return 0.4
      case 'journalists and other media figures': return 0.6
      case 'television shows': return 0.8
      case 'republican politicians': return 0.2
      case 'places': return 0.4
      case 'other people': return 0.6
      case 'other': return 0.8
      case 'media organizations': return 0.2
      case 'groups and political organizations': return 0.4
      case 'democratic politicians': return 0.6
      case 'celebrities': return 0.8
    }
}

var pageYCategorySpread = function(d){
    switch (d.category){
      case 'democratic presidential candidates': return 0.25
      case 'republican presidential candidates': return 0.5
      case 'journalists and other media figures': return 0.75
      case 'television shows': return 0.25
      case 'republican politicians': return 0.5
      case 'places': return 0.75
      case 'other people': return 0.25
      case 'other': return 0.5
      case 'media organizations': return 0.75
      case 'groups and political organizations': return 0.25
      case 'democratic politicians': return 0.5
      case 'celebrities': return 0.75
    }
}

var forceXGenderSplit = d3.forceX(function(d){
  return width * pageGenderSpread(d)
  }).strength(0.2);

var forceXCategorySplit = d3.forceX(function(d){
  return width * pageXCategorySpread(d)
  }).strength(0.2);

var forceYCategorySplit = d3.forceY(function(d){
  return height * pageYCategorySpread(d)
}).strength(0.2)

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
        .style('fill', atRight ? 'lightgray' : 'darkgrey');
}

var atRight = true

var chooseXForce = function(buttonId) {
  switch (buttonId){
    case "all":
      return forceXCombine
    case "gender":
      return forceXGenderSplit
    case "category":
      return forceXCategorySplit
  }
}

var chooseYForce = function(buttonId){
  if (buttonId === "category") {
    return forceYCategorySplit
  }
}

var onClick = function(buttonId){
  simulation
  .force('x', chooseXForce(buttonId))
  .force('y', chooseYForce(buttonId))
  .alpha(0.7)
}

function setupButtons(){
  d3.select('#toolbar')
    .selectAll('.button')
    .on('click', function(){
      // Remove active class from all buttons
      d3.selectAll('.button').classed('active', false);
      // Find the button just clicked
      var button = d3.select(this);
      // Set it as the active button
      button.classed('active', true);
      // Get the id of the button
      var buttonId = button.attr('id');
      // call click switch function
      onClick(buttonId)
    })
}

//readyyyyy
function makeMagic(data){
  var parsedData = stringToNb(data)
  var circles = makeCircles(parsedData)
  startForces(parsedData, circles)
  setupButtons()
}


})();














