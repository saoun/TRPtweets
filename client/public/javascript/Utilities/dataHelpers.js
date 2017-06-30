// NOTE turns back the string for number of tweets to an integer
function stringToNb (data) {

  data.forEach(function(dot){
    dot.count = +dot.count
  })
  return data
};

// NOTE Makes sure the categories are sorted from largest to smallest. First count the number of data by category
function countCategoryTweets(data) {
  data.forEach( function(item) {
    switch(item.category){
      case 'democratic presidential candidates': return Data.categories[0].count++
      case 'republican presidential candidates': return Data.categories[1].count++
      case 'journalists and other media figures': return Data.categories[2].count++
      case 'television shows': return Data.categories[3].count++
      case 'republican politicians': return Data.categories[4].count++
      case 'places': return Data.categories[5].count++
      case 'other people': return Data.categories[6].count++
      case 'other': return Data.categories[7].count++
      case 'media organizations': return Data.categories[8].count++
      case 'groups and political organizations': return Data.categories[9].count++
      case 'democratic politicians': return Data.categories[10].count++
      case 'celebrities': return Data.categories[11].count++
    }
  })
  sortingFunction()
}

// NOTE Sort the array in order from largest to smallest
function sortingFunction() {
  Data.categories = Data.categories.sort(function(a,b) {
    return (b.count - a.count)
  })
}

// NOTE capitalizing category titles
function capitalize(string) {
   var splitStr = string.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
       }
   return splitStr.join(' ');
}


// NOTE toggles visibility of an element
function toggleDisplay(element) {
  var style = getComputedStyle(element)
  if (style.display != "none") {
    element.style.display = "none"
  } else {
    element.style.display = "block"
  }
}
