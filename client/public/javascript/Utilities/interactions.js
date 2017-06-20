var onClick = function(buttonId){

  hideCategoryTitles()
  if(buttonId == 'category') { placeCategoryTitles(); }
  else if (buttonId == 'gender') { placeGenderTitles(); }

  ttForces.simulation
  .force('x', chooseXForce(buttonId))
  .force('y', chooseYForce(buttonId))
  .force('collide', ttForces.forceCollide)
  .alpha(0.7)
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
	var dataMinusSingle = data.slice()
	dataMinusSingle.splice(dataMinusSingle.indexOf(e), 1);
	ttForces.simulation
	.nodes(dataMinusSingle)
  .force('x', ttForceDrop.forceDropX)
  .force('y', ttForceDrop.forceDropY)
  .force('collide', ttForceDrop.forceDropCollide)
  .alpha(0.7)
  .restart()

  var bubble = [e]
	singleBubble.simulation
	.nodes(bubble)
	.restart()
	.force('x', ttForces.forceXHighlight)
	.force('y', ttForces.forceYHighlight)
	.alpha(0.7)
  .restart()  

  
}

var circleClickDrop = function(e) {
	startDrop(e)
	

	// make new simulation forces to drop the circles
}

