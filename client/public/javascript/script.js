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

//d3 code starts here
//
var svg = d3.select('.chart')
            .append('svg')
            .attr('height', height)
            .attr('width', width)
            .append('g')
            .attr('transform', 'translate(0,0)');

//445 refers max tweets for one person
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


function applyForce(d){

  //READ DOCS
var forceXSplit = d3.forceX(function(d){
  width * (d.gender === "m" ? 0.3 : 0.7)
}).strength(0.2);

//READ DOCS
var forceXCombine = d3.forceX(width/2).strength(0.1)
var forceYCombine = d3.forceY((height/3) + 10).strength(0.15)

//READ DOCS
var forceCollide = d3.forceCollide(function(d){
  return radiusScale(d.tweets) + 1
}).iterations(10);

//READ DOCS
var simulation = d3.forceSimulation()
                   .force('x', forceXCombine)
                   .force('y', forceYCombine)
                   .force('collide', forceCollide)

}


























})();
