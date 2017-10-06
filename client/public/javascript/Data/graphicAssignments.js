var genderSpacingX = screen.width > 767 ?
  {
    m: 0.1,
    f: 0.5,
    n: 0.9
  } :
  {
    m: 0.7,
    f: 0.7,
    n: 0.7
  }

var genderSpacingY = screen.width > 767 ?
    {
      m: 0.5,
      f: 0.5,
      n: 0.5
    } :
    {
      m: 0.25,
      f: 0.5,
      n: 0.75
    }

var pageGenderSpreadX = function(d) {
                            switch (d.gender) {
                              case 'm': return genderSpacingX.m
                              case 'f': return genderSpacingX.f
                              case 'n': return genderSpacingX.n
                          }
                        }

var pageGenderSpreadY = function(d) {
                            switch (d.gender) {
                              case 'm': return genderSpacingY.m
                              case 'f': return genderSpacingY.f
                              case 'n': return genderSpacingY.n
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
  if (dot.category == Data.categories[0].category) { return 0.3 }
  if (dot.category == Data.categories[1].category) { return 0.3 }
  if (dot.category == Data.categories[2].category) { return 0.3 }
  if (dot.category == Data.categories[3].category) { return 0.3 }
  if (dot.category == Data.categories[4].category) { return 0.55 }
  if (dot.category == Data.categories[5].category) { return 0.55 }
  if (dot.category == Data.categories[6].category) { return 0.55 }
  if (dot.category == Data.categories[7].category) { return 0.55 }
  if (dot.category == Data.categories[8].category) { return 0.8 }
  if (dot.category == Data.categories[9].category) { return 0.8 }
  if (dot.category == Data.categories[10].category) { return 0.8 }
  if (dot.category == Data.categories[11].category) { return 0.8 }
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
  if (title == Data.categories[0].category) { return 0.4 }
  if (title == Data.categories[1].category) { return 0.4 }
  if (title == Data.categories[2].category) { return 0.4 }
  if (title == Data.categories[3].category) { return 0.4 }
  if (title == Data.categories[4].category) { return 0.65 }
  if (title == Data.categories[5].category) { return 0.65 }
  if (title == Data.categories[6].category) { return 0.65 }
  if (title == Data.categories[7].category) { return 0.65 }
  if (title == Data.categories[8].category) { return 0.9 }
  if (title == Data.categories[9].category) { return 0.9 }
  if (title == Data.categories[10].category) { return 0.9 }
  if (title == Data.categories[11].category) { return 0.9 }
}

var colorSplit = function(dot){
    switch (dot.gender){
      case 'm': return 'dodgerblue'
      case 'f': return 'salmon'
      case 'n': return 'lightgreen'
    }
}
