var onClick = function(buttonId){

	clearTweets()

  if (buttonId == 'category') {
  	hideGenderTitles()
  	placeCategoryTitles();
  } else if (buttonId == 'gender') {
  	hideCategoryTitles()
  	placeGenderTitles();
  } else {
  	hideBothTitles()
  }

  ttForces.simulation
	  .nodes(data)
	  .alpha(0)
	  .force('x', chooseXForce(buttonId))
	  .force('y', chooseYForce(buttonId))
	  .force('collide', ttForces.forceCollide)
	  .alpha(1)
	  .alphaDecay(0.03)
	  .alphaTarget(0.05)
	  .velocityDecay(0.05)
	  .restart()
	  .on('end', function() { console.log(' hi')})

  singleBubble.simulation
  .force('x', null)
  .force('y', null)
  .velocityDecay(0.001)
  .restart()

}

var circleClick = function(e) {
  // var tweets = JSON.parse(e.tweets)
  // var tweetList = document.querySelector('.tweet-list')
  // tweetList.innerHTML = '';
  // toggleDisplay(document.querySelector('.display-buttons-1'))
  // toggleDisplay(document.querySelector('.display-buttons-2'))
  // toggleDisplay(document.querySelector('.tweet-list'))
  // toggleDisplay(document.querySelector('svg'))

  // var title = document.createElement('h2');
  // title.className+='tweet-title'
  // title.innerHTML = e.name
  // tweetList.append(title)
  // for(var i = 0; i < tweets.length; i++) {
  //   var tweet = document.createElement('li')
  //   tweet.className += 'tweet'
  //   tweet.innerHTML = tweets[i]
  //   tweetList.append(tweet)
  // }
}

var startDrop = function(e) {
	Data.sliceData = data.slice()

  var highlightedBubble = [Data.highlightedBubble]
  Data.sliceData.splice(Data.sliceData.indexOf(e), 1);
  if (highlightedBubble != "") {
    ttForces.simulation
    .nodes(Data.sliceData)
    .force('x', ttForces.forceDropX)
    .force('y', ttForces.forceDropY)
    .force('collide', ttForces.forceDropCollide)
    .alpha(1)
    .alphaDecay(0.16)
    .alphaTarget(0.12)
    .alphaMin(0.005)
    .velocityDecay(0.08)
    .restart()
  } else {
  // Apply the DROP forces only to the OTHER bubbles (the ones that weren't clicked)
  ttForces.simulation
    .nodes(Data.sliceData)
    .force('x', ttForces.forceDropX)
    .force('y', ttForces.forceDropY)
    .force('collide', ttForces.forceDropCollide)
    .alpha(1)
    .alphaDecay(0.16)
    .alphaTarget(0.12)
    .alphaMin(0.005)
    .velocityDecay(0.03)
    .restart()
  }

	// Make the single bubble you click float
  var bubble = [e]
	singleBubble.simulation
	.nodes(bubble)
	.force('x', ttForces.forceXHighlight)
	.force('y', ttForces.forceYHighlight)
	.alpha(1)
	.alphaDecay(0.02)
	.alphaTarget(0.05)
	.velocityDecay(0.4)
  .restart()
  Data.highlightedBubble = e
}

var circleClickDrop = function(e) {
	hideBothTitles()
	startDrop(e)
	clearTweets()
	placeTweets(e)
  placeTweetTitle(e)


	// make new simulation forces to drop the circles
}

