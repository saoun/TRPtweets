var pageGenderSpread = function(d) {
                            switch (d.gender) {
                              case 'm': return 0.3
                              case 'f': return 0.5
                              case 'n': return 0.7
                          }
                        }

var pageXCategorySpread = function(dot) {
  if (dot.category == sortedCategories[0].category) { return 0.2 }
  if (dot.category == sortedCategories[1].category) { return 0.4 }
  if (dot.category == sortedCategories[2].category) { return 0.6 }
  if (dot.category == sortedCategories[3].category) { return 0.8 }
  if (dot.category == sortedCategories[4].category) { return 0.2 }
  if (dot.category == sortedCategories[5].category) { return 0.4 }
  if (dot.category == sortedCategories[6].category) { return 0.6 }
  if (dot.category == sortedCategories[7].category) { return 0.8 }
  if (dot.category == sortedCategories[8].category) { return 0.2 }
  if (dot.category == sortedCategories[9].category) { return 0.4 }
  if (dot.category == sortedCategories[10].category) { return 0.6 }
  if (dot.category == sortedCategories[11].category) { return 0.8 }
  }
var pageYCategorySpread = function(dot){
  if (dot.category == sortedCategories[0].category) { return 0.25 }
  if (dot.category == sortedCategories[1].category) { return 0.25 }
  if (dot.category == sortedCategories[2].category) { return 0.25 }
  if (dot.category == sortedCategories[3].category) { return 0.25 }
  if (dot.category == sortedCategories[4].category) { return 0.5 }
  if (dot.category == sortedCategories[5].category) { return 0.5 }
  if (dot.category == sortedCategories[6].category) { return 0.5 }
  if (dot.category == sortedCategories[7].category) { return 0.5 }
  if (dot.category == sortedCategories[8].category) { return 0.75 }
  if (dot.category == sortedCategories[9].category) { return 0.75 }
  if (dot.category == sortedCategories[10].category) { return 0.75 }
  if (dot.category == sortedCategories[11].category) { return 0.75 }
}

var titleXSpread = function(title) {
  if (title == sortedCategories[0].category) { return 0.2 }
  if (title == sortedCategories[1].category) { return 0.4 }
  if (title == sortedCategories[2].category) { return 0.6 }
  if (title == sortedCategories[3].category) { return 0.8 }
  if (title == sortedCategories[4].category) { return 0.2 }
  if (title == sortedCategories[5].category) { return 0.4 }
  if (title == sortedCategories[6].category) { return 0.6 }
  if (title == sortedCategories[7].category) { return 0.8 }
  if (title == sortedCategories[8].category) { return 0.2 }
  if (title == sortedCategories[9].category) { return 0.4 }
  if (title == sortedCategories[10].category) { return 0.6 }
  if (title == sortedCategories[11].category) { return 0.8 }
}

var titleYSpread = function(title) {
  if (title == sortedCategories[0].category) { return 0.35 }
  if (title == sortedCategories[1].category) { return 0.35 }
  if (title == sortedCategories[2].category) { return 0.35 }
  if (title == sortedCategories[3].category) { return 0.35 }
  if (title == sortedCategories[4].category) { return 0.6 }
  if (title == sortedCategories[5].category) { return 0.6 }
  if (title == sortedCategories[6].category) { return 0.6 }
  if (title == sortedCategories[7].category) { return 0.6 }
  if (title == sortedCategories[8].category) { return 0.85 }
  if (title == sortedCategories[9].category) { return 0.85 }
  if (title == sortedCategories[10].category) { return 0.85 }
  if (title == sortedCategories[11].category) { return 0.85 }
}
