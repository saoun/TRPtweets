var ttForces = new TTForces;
var singleBubble = new TTForces;
var singleDrop = new TTForces;

var chooseXForce = function(buttonId) {
  switch (buttonId){
    case "all":
      return ttForces.forceXCombine
    case "gender":
      return ttForces.forceXGenderSplit
    case "category":
      return ttForces.forceXCategorySplit
  }
}

var chooseYForce = function(buttonId){
  if (buttonId === "category") {
    return ttForces.forceYCategorySplit
  } else {
    return ttForces.forceYCombine
  }
}

function TTForces() {

  //combining the circles along x axis at half the width of svg box.
  //strength is defined between 0 and 1, and is the speed of circles
  //moving onto the screen

  this.forceXCombine = d3.forceX(Page.width/2).strength(0.03),
  this.forceYCombine = d3.forceY(Page.height/2).strength(0.03),
  this.forceXHighlight = d3.forceX(100).strength(0.05)
  this.forceYHighlight = d3.forceY(100).strength(0.05)
  this.forceDropX = d3.forceX(Page.width / 2).strength(0),
  this.forceDropY = d3.forceY(function(dot) {
                        return (Page.height - 30) - radiusScale(dot.count)
                       }).strength(function(dot) {
                            return radiusScale(Math.max(dot.count * 0.00001, 0.00025))
                      }),
  //prevents the circles from overlapping. Radius of force is scaled based on circle
  //size, so larger circles push others further from their center than smaller ones
  this.forceDropCollide = d3.forceCollide(function(dot) {
                                return radiusScale(dot.count) + 1 // +1 for distance between circles
                              }).strength(1.1), //the higher the iteration is, the more rigid the circle bounce is
  //prevents the circles from overlapping. Radius of force is scaled based on circle
  //size, so larger circles push others further from their center than smaller ones
  this.forceCollide = d3.forceCollide(function(dot) {
                        return radiusScale(dot.count) + 1 // +1 for distance between circles
                      }).strength(0.8), //the higher the iteration is, the more rigid the circle bounce is
  this.forceXGenderSplit = d3.forceX(function(dot) {
                       return Page.width * pageGenderSpread(dot)
                     }.bind(this)).strength(0.015),
  this.forceXCategorySplit = d3.forceX(function(dot) {
                        return Page.width * pageXCategorySpread(dot)
                       }).strength(0.005),
  this.forceYCategorySplit = d3.forceY(function(dot) {
                         return Page.height * pageYCategorySpread(dot)
                       }).strength(0.005),
  this.simulation = d3.forceSimulation()
                      // .force('charge', d3.forceManyBody().strength(0.1))
                      .force('x', this.forceXCombine)
                      .force('y', this.forceYCombine)
                      .force('collide', this.forceCollide)
                      .alpha(1)
                      .alphaDecay(0.2)
                      .alphaTarget(0.01)
                      .velocityDecay(0.09)
                      .restart()

}
