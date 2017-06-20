// NOTE How big the circles in relation to how many tweets there are -- domain = # of tweets, range = size in pixels
var radiusScale = d3.scaleSqrt().domain([0, 445]).range([0,40])

var data;
var circles;

var ticked = function() {
  circles.attr('cx', function(dot) { return dot.x })
         .attr('cy', function(dot) { return dot.y })
}