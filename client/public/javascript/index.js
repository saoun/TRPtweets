function makeMagic(){
  circles = makeCircles(Data.all)
  startForces()
  setupButtons()
  setupPageListener()
  countCategoryTweets(Data.all);
}