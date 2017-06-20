// NOTE turns back the string for number of tweets to an integer
function stringToNb (data) {

  data.forEach(function(dot){
    dot.count = +dot.count
  })
  return data
};

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