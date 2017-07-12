var circles;

var radiusScale = d3.scaleSqrt().domain([0, 445]).range([0,40])

var svg = d3.select('.chart')
            .append('svg')
            .attr('class', 'canvas')
            .attr('height', Data.page.height - (document.querySelector('#menu').offsetHeight + document.querySelector('.display-buttons-1').offsetHeight) )
            .attr('width', Data.page.width)
            .append('g')
            .attr('transform', 'translate(0,0)');
            //TODO find a responsive solution

var tooltip = d3.select('body')
                .append('div')
                .attr('class', 'tooltip')
                .text('')


function ticked() {
  circles.attr('cx', function(dot) { return dot.x })
         .attr('cy', function(dot) { return dot.y })
}
