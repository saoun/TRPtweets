function makeCircles(data) {
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
                   .on('click', circleClicked)
                   .style('fill', colorSplit);
  return circles
}