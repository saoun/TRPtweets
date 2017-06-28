var allBubbles = new Forces;
var singleBubble = new Forces;
var singleDrop = new Forces;


// NOTE applying for simulation at start
function startForces() {
  allBubbles.simulation.nodes(Data.all)
                       .on('tick', ticked)
}

function Forces() {
  // NOTE combining the circles along x axis at half the width of svg box.
  // NOTE strength is defined between 0 and 1, and is the speed of circles
  // NOTE moving onto the screen
  this.forceXCombine = d3.forceX(Data.page.width/2).strength(0.04),
  this.forceYCombine = d3.forceY(Data.page.height/2).strength(0.04),
  this.forceXHighlight = d3.forceX(80).strength(0.05)
  this.forceYHighlight = d3.forceY(160).strength(0.05)
  this.forceDropX = d3.forceX(Data.page.width / 2).strength(0),
  this.forceDropY = d3.forceY(function(dot) {
                        return (Data.page.height - 30) - radiusScale(dot.count)
                       }).strength(function(dot) {
                            return radiusScale(Math.max(dot.count * 0.00001, 0.00025))
                      }),
  // NOTE d3.forceCollide prevents the circles from overlapping. Radius of force is scaled based on circle
  // size, so larger circles push others further from their center than smaller ones
  this.forceDropCollide = d3.forceCollide(function(dot) {
                                return radiusScale(dot.count) + 1 // +1 for distance between circles
                              }).strength(1.1), //the higher the iteration is, the more rigid the circle bounce is
  this.forceCollide = d3.forceCollide(function(dot) {
                        return radiusScale(dot.count) + 1 // +1 for extra spacing between circles
                      }).strength(0.8),
  this.forceXGenderSplit = d3.forceX(function(dot) {
                       return Data.page.width * pageGenderSpread(dot)
                     }.bind(this)).strength(0.015),
  this.forceXCategorySplit = d3.forceX(function(dot) {
                        return Data.page.width * pageXCategorySpread(dot)
                       }).strength(0.005),
  this.forceYCategorySplit = d3.forceY(function(dot) {
                         return Data.page.height * pageYCategorySpread(dot)
                       }).strength(0.005),
  this.chooseXForce = function(buttonId) {
                        switch (buttonId) {
                          case "all":
                            return this.forceXCombine
                          case "gender":
                            return this.forceXGenderSplit
                          case "category":
                            return this.forceXCategorySplit
                        }
                      },
  this.chooseYForce = function(buttonId) {
    if (buttonId === "category") {
      return this.forceYCategorySplit
    } else {
      return this.forceYCombine
    }
  },
  this.simulation = d3.forceSimulation()
                      // .force('charge', d3.forceManyBody().strength(0.1))
                      .force('x', this.forceXCombine)
                      .force('y', this.forceYCombine)
                      .force('collide', this.forceCollide)
                      .alpha(1)
                      .alphaDecay(0.25)
                      .alphaTarget(0.01)
                      .velocityDecay(0.07)
                      .restart()

}
