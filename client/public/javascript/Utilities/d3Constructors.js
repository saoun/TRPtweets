var interactiveEvent = screen.width > 767 ? 'click' : 'touchend'

function chooseEvent() {
  screen.width > 767 ? 'click' : 'touchstart'
}

function makeCircles(data) {

  var circles = svg.selectAll('.target')
                   .data(data)
                   .enter()
                   .append('circle')
                   .attr('class', 'target')
                   .attr('r', function(dot){
                      return radiusScale(dot.count) // Sets size of circle depending on Tweet count
                   })
                   .on( screen.width > 767 ? 'mouseout' : 'touchend', mouseout)
                   .on( screen.width > 767 ? 'mouseover' : 'touchstart', mouseover)
                   .on( screen.width > 767 ? 'mousemove' : null, mousemove)
                   .on(interactiveEvent, circleClicked)
                   .style('fill', colorSplit);
  return circles
}
