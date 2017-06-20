var ttForces = new TTForces;
var ttForceDrop = new DropForces;

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

  this.forceXCombine = d3.forceX(Page.width/2).strength(0.2),
  this.forceYCombine = d3.forceY(Page.height/2).strength(0.15),
  //prevents the circles from overlapping. Radius of force is scaled based on circle
  //size, so larger circles push others further from their center than smaller ones
  this.forceCollide = d3.forceCollide(function(dot) {
                                        return radiusScale(dot.count) + 1 // +1 for distance between circles
                                      }).iterations(20), //the higher the iteration is, the more rigid the circle bounce is
  this.forceXGenderSplit = d3.forceX(function(dot){
                       return Page.width * pageGenderSpread(dot)
                     }.bind(this)).strength(0.2),
  this.forceXCategorySplit = d3.forceX(function(dot){
                        return Page.width * pageXCategorySpread(dot)
                       }).strength(0.2),
  this.forceYCategorySplit = d3.forceY(function(dot){
                         return Page.height * pageYCategorySpread(dot)
                       }).strength(0.2),
  this.simulation = d3.forceSimulation()
                      .force('x', this.forceXCombine)
                      .force('y', this.forceYCombine)
                      .force('collide', this.forceCollide)
                      .alpha(0.7)
                      .restart()
}

function DropForces() {

  //combining the circles along x axis at half the width of svg box.
  //strength is defined between 0 and 1, and is the speed of circles
  //moving onto the screen

  this.forceDropX = d3.forceX(Page.width/2).strength(-0.03),
  this.forceDropY = d3.forceY(function(dot){
                         return Page.height - dot.vy
                       }).strength(function(dot) {
    return radiusScale(dot.count * 0.01)
  }),
  //prevents the circles from overlapping. Radius of force is scaled based on circle
  //size, so larger circles push others further from their center than smaller ones
  this.forceDropCollide = d3.forceCollide(function(dot) {
                                        return radiusScale(dot.count) + 1 // +1 for distance between circles
                                      }).strength(0.8).iterations(20), //the higher the iteration is, the more rigid the circle bounce is
  this.simulation = d3.forceSimulation()
                      .force('x', this.forceDropX)
                      .force('y', this.forceDropY)
                      .force('collide', this.forceCollide)
                      .alpha(0.7)
                      .restart()
}

