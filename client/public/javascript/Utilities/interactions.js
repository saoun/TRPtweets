var onClick = function(buttonId){

  hideCategoryTitles()
  if(buttonId == 'category') { 
  	hideGenderTitles()
  	placeCategoryTitles(); 
  }
  else if (buttonId == 'gender') { 
  	hideCategoryTitles()
  	placeGenderTitles(); 
  }

  ttForces.simulation 
	  .nodes(data)
	  .alpha(0)
	  .force('x', chooseXForce(buttonId))
	  .force('y', chooseYForce(buttonId))
	  .force('collide', ttForces.forceCollide)
	  .alpha(1)
	  .alphaDecay(0.01)
	  .alphaTarget(0.01)
	  .velocityDecay(0.6)
	  .restart()
	  .on('end', function() { console.log(' hi')})

  singleBubble.simulation
  .force('x', null)
  .force('y', null)
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
	Data.sliceData.splice(Data.sliceData.indexOf(e), 1);
	ttForces.simulation 
		.nodes(Data.sliceData)
	  .force('x', ttForces.forceDropX)
	  .force('y', ttForces.forceDropY)
	  .force('collide', ttForces.forceDropCollide)
	  .alpha(1)
	  .alphaDecay(0.1)
	  .alphaTarget(0.01)
	  .alphaMin(0.01)
	  .velocityDecay(0.3)
		.restart()
		.on('end', function() { console.log(' hi')})


  var bubble = [e]
	singleBubble.simulation
	.nodes(bubble)
	.force('x', ttForces.forceXHighlight)
	.force('y', ttForces.forceYHighlight)
	.alpha(1)
	.alphaDecay(0.02)
	.alphaTarget(0.05)
  .restart()  
}

var circleClickDrop = function(e) {
	startDrop(e)
	

	// make new simulation forces to drop the circles
}

