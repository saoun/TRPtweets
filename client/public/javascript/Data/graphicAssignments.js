var pageGenderSpread = function(d) {
                            switch (d.gender) {
                              case 'm': return 0.25
                              case 'f': return 0.5
                              case 'n': return 0.75
                          }
                        }

var pageXCategorySpread = function(dot) {
  if (dot.category == Data.categories[0].category) { return 0.2 }
  if (dot.category == Data.categories[1].category) { return 0.4 }
  if (dot.category == Data.categories[2].category) { return 0.6 }
  if (dot.category == Data.categories[3].category) { return 0.8 }
  if (dot.category == Data.categories[4].category) { return 0.2 }
  if (dot.category == Data.categories[5].category) { return 0.4 }
  if (dot.category == Data.categories[6].category) { return 0.6 }
  if (dot.category == Data.categories[7].category) { return 0.8 }
  if (dot.category == Data.categories[8].category) { return 0.2 }
  if (dot.category == Data.categories[9].category) { return 0.4 }
  if (dot.category == Data.categories[10].category) { return 0.6 }
  if (dot.category == Data.categories[11].category) { return 0.8 }
  }
var pageYCategorySpread = function(dot){
  if (dot.category == Data.categories[0].category) { return 0.25 }
  if (dot.category == Data.categories[1].category) { return 0.25 }
  if (dot.category == Data.categories[2].category) { return 0.25 }
  if (dot.category == Data.categories[3].category) { return 0.25 }
  if (dot.category == Data.categories[4].category) { return 0.5 }
  if (dot.category == Data.categories[5].category) { return 0.5 }
  if (dot.category == Data.categories[6].category) { return 0.5 }
  if (dot.category == Data.categories[7].category) { return 0.5 }
  if (dot.category == Data.categories[8].category) { return 0.75 }
  if (dot.category == Data.categories[9].category) { return 0.75 }
  if (dot.category == Data.categories[10].category) { return 0.75 }
  if (dot.category == Data.categories[11].category) { return 0.75 }
}

var titleXSpread = function(title) {
  if (title == Data.categories[0].category) { return 0.2 }
  if (title == Data.categories[1].category) { return 0.4 }
  if (title == Data.categories[2].category) { return 0.6 }
  if (title == Data.categories[3].category) { return 0.8 }
  if (title == Data.categories[4].category) { return 0.2 }
  if (title == Data.categories[5].category) { return 0.4 }
  if (title == Data.categories[6].category) { return 0.6 }
  if (title == Data.categories[7].category) { return 0.8 }
  if (title == Data.categories[8].category) { return 0.2 }
  if (title == Data.categories[9].category) { return 0.4 }
  if (title == Data.categories[10].category) { return 0.6 }
  if (title == Data.categories[11].category) { return 0.8 }
}

var titleYSpread = function(title) {
  if (title == Data.categories[0].category) { return 0.35 }
  if (title == Data.categories[1].category) { return 0.35 }
  if (title == Data.categories[2].category) { return 0.35 }
  if (title == Data.categories[3].category) { return 0.35 }
  if (title == Data.categories[4].category) { return 0.6 }
  if (title == Data.categories[5].category) { return 0.6 }
  if (title == Data.categories[6].category) { return 0.6 }
  if (title == Data.categories[7].category) { return 0.6 }
  if (title == Data.categories[8].category) { return 0.85 }
  if (title == Data.categories[9].category) { return 0.85 }
  if (title == Data.categories[10].category) { return 0.85 }
  if (title == Data.categories[11].category) { return 0.85 }
}

var colorSplit = function(dot){
    switch (dot.gender){
      case 'm': return 'dodgerblue'
      case 'f': return 'salmon'
      case 'n': return 'lightgreen'
    }
}
