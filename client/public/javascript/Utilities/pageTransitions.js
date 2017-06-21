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

function clearTweets() {
  svg.selectAll('text').remove()
}

function placeTweets(dot) {
  var tweetArray = JSON.parse(dot.tweets)
  var countX = 0
  var countY = 0
  var cards = d3.selectAll('.card')
  var index = 0
  var currentcard = cards._groups[0][index]
  var spaceX = 180;
  var marginX = 500
  var spaceY = 60
  var marginY = 14
  var columns = Math.ceil(tweetArray.length / 40)
  expandChart(columns)

  var tweets = svg.selectAll('.tweet')
                  .data(tweetArray)
                  .enter().append('text')
                  .attr('class', 'tweet')
                  .attr('x', function(d) {
                    countX++
                    if (countX % 40 == 0) {
                      spaceX += marginX
                    }
                    return spaceX
                  })
                  .attr('y', function(d) {
                    countY++
                    if (countY % 40 == 0) {
                      spaceY = 60
                    }
                    spaceY += marginY;

                    return spaceY
                  })
                  .text(function(t) {
                    if (t.tweet.length > 60 && t.tweet.slice(61) != '”') {
                      t.tweet = capitalize(t.tweet.substr(0, 60) + '...')
                    }
                    return capitalize(t.tweet)
                  })
                  .on('click', function(t){
                    window.open(t.link)
                  })


}

function expandChart(columns) {
  var chart = d3.select('.chart')
                .attr('overflow-x', 'scroll')

  var svg = d3.select('.canvas').attr('width', Math.max(520 * (columns), Page.width))
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
  //var firstX = 0.1;

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

function placeTweetTitle(dot){
    var title = [dot.name]
    var tweetTitle = svg.selectAll('.tweetTitle')
    .data(title)
    tweetTitle.enter().append('text')
          .attr('class', 'tweetTitle')
          .attr('x', 100)
          .attr('y', 50)
          .attr('text-anchor', 'middle')
          .text(dot.name)
          .style('opacity', '0')
          .transition().duration(1000)
          .style('opacity', '1');
}
