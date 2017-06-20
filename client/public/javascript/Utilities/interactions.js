var onClick = function(buttonId){

  if(buttonId == 'category') {
    hideGenderTitles()
    placeCategoryTitles()
  }
  else if (buttonId == 'gender') {
    hideCategoryTitles()
    placeGenderTitles()
  }

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

var startDrop = function() {
  ttForceDrop.simulation.nodes(data)
                     	 .on('tick', ticked)
}

var circleClickDrop = function(e) {
	console.log('click!')
	startDrop()
	// make new simulation forces to drop the circles
}

