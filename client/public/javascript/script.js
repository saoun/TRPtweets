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
var sortedCategories;

//separating the circles along x axis for gender
var pageGenderSpread = function(d){
    switch (d.gender){
      case 'm': return 0.3
      case 'f': return 0.5
      case 'n': return 0.7
    }
}

//
var forceXGenderSplit = d3.forceX(function(dot){
  return width * pageGenderSpread(dot)
  }).strength(0.2);

var forceXCategorySplit = d3.forceX(function(dot){
  return width * pageXCategorySpread(dot)
  }).strength(0.2);

var forceYCategorySplit = d3.forceY(function(dot){
  return height * pageYCategorySpread(dot)
}).strength(0.2)

//combining the circles along x axis at half the width of svg box.
//strength is defined between 0 and 1, and is the speed of circles
//moving onto the screen
var forceXCombine = d3.forceX(width/2).strength(0.2)

var forceYCombine = d3.forceY(height/2).strength(0.15)

//prevents the circles from overlapping. Radius of force is scaled based on circle
//size, so larger circles push others further from their center than smaller ones
var forceCollide = d3.forceCollide(function(dot){
  return radiusScale(dot.tweets) + 1 // +1 for distance between circles
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

//turns back the string for number of tweets to an integer
function stringToNb (data) {

  data.forEach(function(dot){
    dot.tweets = +dot.tweets
  })
  return data
};

//tooltip function
var mouseover = function(dot){
  tooltip.style('visibility','visible');
  tooltip.html(dot.person + "<br> Trump tweets: " + dot.tweets)
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
    circles.attr('cx', function(dot) { return dot.x })
         .attr('cy', function(dot) { return dot.y })
  }
  simulation.nodes(data)
            .on('tick', ticked)
}

var colorSplit = function(dot){
    switch (dot.gender){
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
                   .attr('r', function(dot){
                      return radiusScale(dot.tweets)
                   })
                   .on('mouseout', mouseout)
                   .on('mouseover', mouseover)
                   .on('mousemove', mousemove)
                   .style('fill', colorSplit);
  return circles
}

//
//sorting categories by number of people
function countCategoryTweets(data){
  var unsortedArray = [
    {category: 'democratic presidential candidates', count: 0},
    {category: 'republican presidential candidates', count: 0},
    {category: 'journalists and other media figures', count: 0},
    {category: 'television shows', count: 0},
    {category: 'republican politicians', count: 0},
    {category: 'places', count: 0},
    {category: 'other people', count: 0},
    {category: 'other', count: 0},
    {category: 'media organizations', count: 0},
    {category: 'groups and political organizations', count: 0},
    {category: 'democratic politicians', count: 0},
    {category: 'celebrities', count: 0}
    ]

  data.forEach( function(item) {
    switch(item.category){
      case 'democratic presidential candidates': return unsortedArray[0].count++
      case 'republican presidential candidates': return unsortedArray[1].count++
      case 'journalists and other media figures': return unsortedArray[2].count++
      case 'television shows': return unsortedArray[3].count++
      case 'republican politicians': return unsortedArray[4].count++
      case 'places': return unsortedArray[5].count++
      case 'other people': return unsortedArray[6].count++
      case 'other': return unsortedArray[7].count++
      case 'media organizations': return unsortedArray[8].count++
      case 'groups and political organizations': return unsortedArray[9].count++
      case 'democratic politicians': return unsortedArray[10].count++
      case 'celebrities': return unsortedArray[11].count++
    }
  })
  sortingFunction(unsortedArray)
}

//sorting them in order
function sortingFunction(unsortedArray){
  sortedCategories = unsortedArray.sort(function(a,b){
    return (b.count - a.count)
  })
}

//separating the circles along x and y axis for category
var pageXCategorySpread = function(dot){
  if (dot.category == sortedCategories[0].category) { return 0.2 }
  if (dot.category == sortedCategories[1].category) { return 0.4 }
  if (dot.category == sortedCategories[2].category) { return 0.6 }
  if (dot.category == sortedCategories[3].category) { return 0.8 }
  if (dot.category == sortedCategories[4].category) { return 0.2 }
  if (dot.category == sortedCategories[5].category) { return 0.4 }
  if (dot.category == sortedCategories[6].category) { return 0.6 }
  if (dot.category == sortedCategories[7].category) { return 0.8 }
  if (dot.category == sortedCategories[8].category) { return 0.2 }
  if (dot.category == sortedCategories[9].category) { return 0.4 }
  if (dot.category == sortedCategories[10].category) { return 0.6 }
  if (dot.category == sortedCategories[11].category) { return 0.8 }
}

var pageYCategorySpread = function(dot){
  if (dot.category == sortedCategories[0].category) { return 0.25 }
  if (dot.category == sortedCategories[1].category) { return 0.25 }
  if (dot.category == sortedCategories[2].category) { return 0.25 }
  if (dot.category == sortedCategories[3].category) { return 0.25 }
  if (dot.category == sortedCategories[4].category) { return 0.5 }
  if (dot.category == sortedCategories[5].category) { return 0.5 }
  if (dot.category == sortedCategories[6].category) { return 0.5 }
  if (dot.category == sortedCategories[7].category) { return 0.5 }
  if (dot.category == sortedCategories[8].category) { return 0.75 }
  if (dot.category == sortedCategories[9].category) { return 0.75 }
  if (dot.category == sortedCategories[10].category) { return 0.75 }
  if (dot.category == sortedCategories[11].category) { return 0.75 }
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
  } else {
    return forceYCombine
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


//adding titles + info

function placeCategoryTitles() {
  var categoryTitlesData = [];

  sortedCategories.forEach(function(object) {
    categoryTitlesData.push(object.category);
  });

  var titles = svg.selectAll('.title')
    .data(categoryTitlesData);

    titles.enter().append('text')
          .attr('class', 'title')
          .attr('text-anchor', 'middle')
          .text(function(title) { return title });

    console.log(categoryTitlesData)
}




//readyyyyy
function makeMagic(data){
  var parsedData = stringToNb(data)
  var circles = makeCircles(parsedData)
  startForces(parsedData, circles)
  setupButtons()
  countCategoryTweets(data);
  placeCategoryTitles();
}


})();














