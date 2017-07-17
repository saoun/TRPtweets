function setupPageListener() {
  window.addEventListener('resize', windowResize)
}

function setupButtons() {
  d3.select('.display-buttons-1')
    .selectAll('.button')
    .on('click', function() {
      var button = d3.select(this);
      var buttonId = button.attr('id');
      // Remove active class from all buttons
      makeButtonsInactive()
      // Set it as the active button
      button.classed('active', true);
      // call click switch function
      buttonClicked(buttonId)
    })

  document.querySelector('#nav-icon2').addEventListener('click', function(){
   
    if (document.querySelector('#nav-icon2').classList.contains('open')) {
      document.querySelector('#nav-icon2').classList.remove('open')
    } else { document.querySelector('#nav-icon2').classList.add('open') }
    
  });
}

function windowResize() {
  Data.page.width = window.innerWidth
  Data.page.height = window.innerHeight
  document.querySelector('svg').setAttribute('width', Data.page.width)
  allBubbles.centerCircles()
  positionCircles(getActiveButton())
}

function clearTweets() { svg.selectAll('text').remove() }

function placeTweets(dot) {
  var tweetArray = JSON.parse(dot.tweets)
  var countX = 0
  var countY = 0
  var cards = d3.selectAll('.card')
  var index = 0
  var currentcard = cards._groups[0][index]
  var spaceX = 180;
  var marginX = 500
  var marginTopY = 170
  var marginY = 20
  var tweetsPerColumn = 28
  var columns = Math.ceil(tweetArray.length / tweetsPerColumn)

  var tweets = svg.selectAll('.tweet')
                  .data(tweetArray)
                  .enter().append('text')
                  .attr('class', 'tweet')
                  .attr('x', function(d) {
                    countX++
                    if (countX % tweetsPerColumn == 0) {
                      spaceX += marginX
                    }
                    return spaceX
                  })
                  .attr('y', function(d) {
                    countY++
                    if (countY % tweetsPerColumn == 0) {
                      marginTopY = 170
                    }
                    marginTopY += marginY;

                    return marginTopY
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

  expandChart(columns)
}

function expandChart(columns) {
  var chart = d3.select('.chart')
                .attr('overflow-x', 'scroll')

  var svg = d3.select('.canvas').attr('width', Math.max(520 * (columns), Data.page.width))
}


//adding titles + info
function placeCategoryTitles() {
  var categoryTitlesData = [];

  Data.categories.forEach(function(object) {
    categoryTitlesData.push(object.category);
  });

  var titles = svg.selectAll('.title')
    .data(categoryTitlesData);

    titles.enter().append('text')
          .attr('class', 'title')
          .attr('x', function(d) {return Data.page.width * titleXSpread(d)})
          .attr('y', function(d) {return Data.page.height * titleYSpread(d)})
          .attr('text-anchor', 'middle')
          .text(function(title) { return capitalize(title) })
          .style('opacity', '0')
          .transition().duration(1000)
          .style('opacity', '1');
}

function makeButtonsInactive() { d3.selectAll('.button').classed('active', false); }

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
                return Data.page.width * 0.25
              break

              case 'Female':
                return Data.page.width * 0.5
              break

              case 'Media & Others':
                return Data.page.width * 0.75
              break
            }

          })
          .attr('y', Data.page.height * 0.3)
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
          .attr('x', 20)
          .attr('y', 150)
          .attr('text-anchor', 'left')
          .text(dot.name)
          .style('opacity', '0')
          .transition().duration(1000)
          .style('opacity', '1');
}
