"use strict";
(function(){

//rendering data from server
$.ajax({
  url: '/get-data',
  type: 'GET',
})
.done(function(response) {
  Data.responseData = JSON.parse(response)
  data = JSON.parse(response);
  // console.log(response)
  console.log(data)
  makeMagic();
})
.fail(function() {
  console.log("error");
});

var tooltip = d3.select('body')
                .append('div')
                .attr('class', 'tooltip')
                .text('')

//tooltip function
var mouseover = function(dot) {
  tooltip.style('visibility','visible');
  tooltip.html(dot.name + "<br> Trump tweets: " + dot.count)
};

var mouseout = function() {
  tooltip.style('visibility', 'hidden')
};

var mousemove = function(){
  tooltip.style('top', (event.pageY-10)+'px').style('left',(d3.event.pageX+10)+'px')
};


//starting forces simulation
var startForces = function() {
  ttForces.simulation.nodes(data)
                     .on('tick', ticked)
}

function makeCircles(data){
  var circles = svg.selectAll('.target')
                   .data(data)
                   .enter()
                   .append('circle')
                   .attr('class', 'target')
                   .attr('r', function(dot){
                      return radiusScale(dot.count) // Sets size of circle depending on Tweet count
                   })
                   .on('mouseout', mouseout)
                   .on('mouseover', mouseover)
                   .on('mousemove', mousemove)
                   .on('click', circleClickDrop) // circleClick
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


//readyyyyy
function makeMagic(){
  // data = stringToNb(data)
  circles = makeCircles(data)
  startForces()
  setupButtons()
  countCategoryTweets(data);
}


})();
