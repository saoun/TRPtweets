function buttonClicked(buttonId){

	clearTweets()

  if (buttonId == 'category') {
    $('.canvas').attr('width', pageSizes.width)
    if (screen.width < 768) {
      $('.canvas').attr('height', pageSizes.height * 6)
      $('.canvas').attr('width', pageSizes.width)
    }
  	hideGenderTitles()
  	placeCategoryTitles();
  } else if (buttonId == 'gender') {
    $('.canvas').attr('width', pageSizes.width)
    if (screen.width < 768) {
      $('.canvas').attr('height', pageSizes.height * 1.5)
    }
  	hideCategoryTitles()
  	placeGenderTitles();
  } else {
  	hideBothTitles()
		if (screen.width < 768) {
			resetCanvasSize()
		}
  }

  positionCircles(buttonId)

  singleBubble.simulation
  .force('x', null)
  .force('y', null)
  .velocityDecay(0.001)
  .restart()

  resetScroll()
}

function resetScroll() {
   window.scrollTo(0,0)
}

function getActiveButton() {
  var buttons = document.getElementsByClassName('button')
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains('active')) {
      return buttons[i].getAttribute('id')
    }
  }
}

function resetCanvasSize() {
  $('.canvas').attr('height', pageSizes.height)
  $('.canvas').attr('width', pageSizes.width)
}

function positionCircles(buttonId) {
  allBubbles.simulation
  .nodes(Data.all)
  .alpha(0)
  .force('x', allBubbles.chooseXForce(buttonId))
  .force('y', allBubbles.chooseYForce(buttonId))
  .force('collide', allBubbles.forceCollide)
  .alpha(1)
  .alphaDecay(0.03)
  .alphaTarget(0.05)
  .velocityDecay(0.05)
  .restart()
}

function circleClicked(e) {
	// e.preventDefault();
  // e.stopPropagation();

  $('.canvas').attr('height', pageSizes.height)
  $('.canvas').attr('width', pageSizes.width)
  makeButtonsInactive()
  hideBothTitles()
  startDrop(e)
  clearTweets()
  placeTweets(e)
  placeTweetTitle(e)
  resetScroll()
}

//tooltip function
function mouseover(dot) {
  tooltip.style('visibility','visible');
  tooltip.html(dot.name + "<br> Trump Tweets: " + dot.count)
};

function mouseout() {
  tooltip.style('visibility', 'hidden')
};

function mousemove(){
  tooltip.style('top', (event.pageY-10)+'px').style('left',(d3.event.pageX+10)+'px')
};

function startDrop(e) {
	Data.slicedData = Data.all.slice()

  var highlightedBubble = [Data.highlightedBubble]
  Data.slicedData.splice(Data.slicedData.indexOf(e), 1);
  if (highlightedBubble != "") {
    allBubbles.simulation
    .nodes(Data.slicedData)
    .force('x', allBubbles.forceDropX)
    .force('y', allBubbles.forceDropY)
    .force('collide', allBubbles.forceDropCollide)
    .alpha(1)
    .alphaDecay(0.16)
    .alphaTarget(0.12)
    .alphaMin(0.005)
    .velocityDecay(0.08)
    .restart()
  } else {
  // Apply the DROP forces only to the OTHER bubbles (the ones that weren't clicked)
  allBubbles.simulation
    .nodes(Data.slicedData)
    .force('x', allBubbles.forceDropX)
    .force('y', allBubbles.forceDropY)
    .force('collide', allBubbles.forceDropCollide)
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
	.force('x', allBubbles.forceXHighlight)
	.force('y', allBubbles.forceYHighlight)
	.alpha(1)
	.alphaDecay(0.02)
	.alphaTarget(0.05)
	.velocityDecay(0.4)
  .restart()
  Data.highlightedBubble = e
}
