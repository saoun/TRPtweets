function setupButtons() {
  d3.select('.display-buttons-1')
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

  d3.select('#back')
    .on('click', function() {
      toggleDisplay(document.querySelector('.display-buttons-1'))
      toggleDisplay(document.querySelector('.display-buttons-2'))
      toggleDisplay(document.querySelector('.tweet-list'))
      toggleDisplay(document.querySelector('svg'))
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
          .attr('x', function(d) {return Page.width * titleXSpread(d)})
          .attr('y', function(d) {return Page.height * titleYSpread(d)})
          .attr('text-anchor', 'middle')
          .text(function(title) { return capitalize(title) })
          .style('opacity', '0')
          .transition().duration(1000)
          .style('opacity', '1');
}


function hideCategoryTitles() {
   svg.selectAll('.title').transition()
   .style('opacity', '0')
   .remove();
}

function hideGenderTitles() {
    svg.selectAll('.titleGender').transition()
   .style('opacity', '0')
   .remove();
}

function hideBothTitles() {
  hideCategoryTitles()
  hideGenderTitles()
}

function placeGenderTitles(){
  var genderTitlesData = ['Male', 'Female', 'Media & Others'];
  var firstX = 0.1;

  var titles = svg.selectAll('.titleGender')
    .data(genderTitlesData);
    titles.enter().append('text')
          .attr('class', 'titleGender')
          .attr('x', function(d) {
            switch (d) {
              case 'Male': 
                return Page.width * 0.25
              break

              case 'Female':
                return Page.width * 0.5
              break

              case 'Media & Others':
                return Page.width * 0.75
              break
            }
            
          })
          .attr('y', Page.height * 0.3)
          .attr('text-anchor', 'middle')
          .text(function(title) { return title })
          .style('opacity', '0')
          .transition().duration(1000)
          .style('opacity', '1');
}
