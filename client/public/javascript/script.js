"use strict";
(function(){

//rendering data from server
$.ajax({
  url: '/get-data',
  type: 'GET',
})
.done(function(response) {
  data = JSON.parse(response);
  // console.log(response)
  console.log(data)
  makeMagic();
})
.fail(function() {
  console.log("error");
});


//declaring variables
var width = window.innerWidth;
var height = window.innerHeight;
var data;
var circles;

//separating the circles along x axis for gender

var ttForces = new TTForces;

var svg = d3.select('.chart')
            .append('svg')
            .attr('height', height)
            .attr('width', width)
            .append('g')
            .attr('transform', 'translate(0,0)');
            //TODO find a responsive solution

//445 refers max tweets for one person
var tooltip = d3.select('body')
                .append('div')
                .attr('class', 'tooltip')
                .text('')

//turns back the string for number of tweets to an integer
function stringToNb (data) {

  data.forEach(function(dot){
    dot.count = +dot.count
  })
  return data
};

//tooltip function
var mouseover = function(dot){
  tooltip.style('visibility','visible');
  tooltip.html(dot.name + "<br> Trump tweets: " + dot.count)
};

var mouseout = function() {
  tooltip.style('visibility', 'hidden')
};

var mousemove = function(){
  tooltip.style('top', (event.pageY-10)+'px').style('left',(d3.event.pageX+10)+'px')
};

var circleClick = function(e) {
  var tweets = JSON.parse(e.tweets)
  console.log(tweets)
}


var ticked = function() {
  circles.attr('cx', function(dot) { return dot.x })
         .attr('cy', function(dot) { return dot.y })
}

//starting forces simulation
var startForces = function() {
  ttForces.simulation.nodes(data)
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
                   .enter()
                   .append('circle')
                   .attr('class', 'target')
                   .attr('r', function(dot){
                    //  console.log(dot.name, dot.count)
                      return radiusScale(dot.count)
                   })
                   .on('mouseout', mouseout)
                   .on('mouseover', mouseover)
                   .on('mousemove', mousemove)
                   .on('click', circleClick)
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
      return ttForces.forceXCombine
    case "gender":
      return ttForces.forceXGenderSplit
    case "category":
      return ttForces.forceXCategorySplit
  }
}

var chooseYForce = function(buttonId){
  if (buttonId === "category") {
    return ttForces.forceYCategorySplit
  } else {
    return ttForces.forceYCombine
  }
}

var onClick = function(buttonId){

  hideCategoryTitles()
  if(buttonId == 'category') { placeCategoryTitles(); }
  else if (buttonId == 'gender') { placeGenderTitles(); }

  ttForces.simulation
  .force('x', chooseXForce(buttonId))
  .force('y', chooseYForce(buttonId))
  .force('collide', ttForces.forceCollide)
  .alpha(0.7)
  .restart()


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
          .attr('x', function(d) {return width * titleXSpread(d)})
          .attr('y', function(d) {return height * titleYSpread(d)})
          .attr('text-anchor', 'middle')
          .text(function(title) { return capitalize(title) })
          .style('opacity', '0')
          .transition().duration(1000)
          .style('opacity', '1');
}


function hideCategoryTitles() {
   svg.selectAll('.titleGender').transition()
   .style('opacity', '0')
   .remove();

   svg.selectAll('.title').transition()
   .style('opacity', '0')
   .remove();
}

function placeGenderTitles(){
  var genderTitlesData = ['Male', 'Female', 'Media & Others'];
  var firstX = 0.1;

  var titles = svg.selectAll('.titleGender')
    .data(genderTitlesData);
    titles.enter().append('text')
          .attr('class', 'titleGender')
          .attr('x', function(d) {
            firstX+=0.2
            return width * firstX
          })
          .attr('y', height * 0.3)
          .attr('text-anchor', 'middle')
          .text(function(title) { return title })
          .style('opacity', '0')
          .transition().duration(1000)
          .style('opacity', '1');
}

// function hideGenderTitles(){
//   svg.selectAll('.title').remove();
// }



//capitalizing category titles
function capitalize(string){
   var splitStr = string.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
       }
   return splitStr.join(' ');
}

//readyyyyy
function makeMagic(){
  // data = stringToNb(data)
  circles = makeCircles(data)
  startForces()
  setupButtons()
  countCategoryTweets(data);
}


})();
