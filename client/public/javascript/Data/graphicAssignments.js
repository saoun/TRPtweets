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
      m: 0.3,
      f: 0.8,
      n: 1.3
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
  if (dot.category == Data.categories[0].category) { return screen.width > 767 ? 0.2 : 0.5 }
  if (dot.category == Data.categories[1].category) { return screen.width > 767 ? 0.4 : 0.5 }
  if (dot.category == Data.categories[2].category) { return screen.width > 767 ? 0.6 : 0.5 }
  if (dot.category == Data.categories[3].category) { return screen.width > 767 ? 0.8 : 0.5 }
  if (dot.category == Data.categories[4].category) { return screen.width > 767 ? 0.2 : 0.5 }
  if (dot.category == Data.categories[5].category) { return screen.width > 767 ? 0.4 : 0.5 }
  if (dot.category == Data.categories[6].category) { return screen.width > 767 ? 0.6 : 0.5 }
  if (dot.category == Data.categories[7].category) { return screen.width > 767 ? 0.8 : 0.5 }
  if (dot.category == Data.categories[8].category) { return screen.width > 767 ? 0.2 : 0.5 }
  if (dot.category == Data.categories[9].category) { return screen.width > 767 ? 0.4 : 0.5 }
  if (dot.category == Data.categories[10].category) { return screen.width > 767 ? 0.6 : 0.5 }
  if (dot.category == Data.categories[11].category) { return screen.width > 767 ? 0.8 : 0.5 }
  }
var pageYCategorySpread = function(dot){
  if (dot.category == Data.categories[0].category) { return screen.width > 767 ? 0.3 : 5.8 }
  if (dot.category == Data.categories[1].category) { return screen.width > 767 ? 0.3 : 5.3 }
  if (dot.category == Data.categories[2].category) { return screen.width > 767 ? 0.3 : 4.8 }
  if (dot.category == Data.categories[3].category) { return screen.width > 767 ? 0.3 : 4.3 }
  if (dot.category == Data.categories[4].category) { return screen.width > 767 ? 0.55 : 3.8 }
  if (dot.category == Data.categories[5].category) { return screen.width > 767 ? 0.55 : 3.3 }
  if (dot.category == Data.categories[6].category) { return screen.width > 767 ? 0.55 : 2.8 }
  if (dot.category == Data.categories[7].category) { return screen.width > 767 ? 0.55 : 2.3 }
  if (dot.category == Data.categories[8].category) { return screen.width > 767 ? 0.8 : 1.8 }
  if (dot.category == Data.categories[9].category) { return screen.width > 767 ? 0.8 : 1.3 }
  if (dot.category == Data.categories[10].category) { return screen.width > 767 ? 0.8 : 0.8 }
  if (dot.category == Data.categories[11].category) { return screen.width > 767 ? 0.8 : 0.3 }
}

var titleXSpread = function(title) {
  if (title == Data.categories[0].category) { return screen.width > 767 ? 0.2 : 0.5 }
  if (title == Data.categories[1].category) { return screen.width > 767 ? 0.4 : 0.5 }
  if (title == Data.categories[2].category) { return screen.width > 767 ? 0.6 : 0.5 }
  if (title == Data.categories[3].category) { return screen.width > 767 ? 0.8 : 0.5 }
  if (title == Data.categories[4].category) { return screen.width > 767 ? 0.2 : 0.5 }
  if (title == Data.categories[5].category) { return screen.width > 767 ? 0.4 : 0.5 }
  if (title == Data.categories[6].category) { return screen.width > 767 ? 0.6 : 0.5 }
  if (title == Data.categories[7].category) { return screen.width > 767 ? 0.8 : 0.5 }
  if (title == Data.categories[8].category) { return screen.width > 767 ? 0.2 : 0.5 }
  if (title == Data.categories[9].category) { return screen.width > 767 ? 0.4 : 0.5 }
  if (title == Data.categories[10].category) { return screen.width > 767 ? 0.6 : 0.5 }
  if (title == Data.categories[11].category) { return screen.width > 767 ? 0.8 : 0.5 }
}

var titleYSpread = function(title) {
  if (title == Data.categories[0].category) { return screen.width > 767 ? 0.4 : 5.65 }
  if (title == Data.categories[1].category) { return screen.width > 767 ? 0.4 : 5.15 }
  if (title == Data.categories[2].category) { return screen.width > 767 ? 0.4 : 4.65 }
  if (title == Data.categories[3].category) { return screen.width > 767 ? 0.4 : 4.15 }
  if (title == Data.categories[4].category) { return screen.width > 767 ? 0.65 : 3.65 }
  if (title == Data.categories[5].category) { return screen.width > 767 ? 0.65 : 3.15 }
  if (title == Data.categories[6].category) { return screen.width > 767 ? 0.65 : 2.65 }
  if (title == Data.categories[7].category) { return screen.width > 767 ? 0.65 : 2.15 }
  if (title == Data.categories[8].category) { return screen.width > 767 ? 0.9 : 1.65 }
  if (title == Data.categories[9].category) { return screen.width > 767 ? 0.9 : 1.15 }
  if (title == Data.categories[10].category) { return screen.width > 767 ? 0.9 : 0.65 }
  if (title == Data.categories[11].category) { return screen.width > 767 ? 0.9 : 0.15 }
}

var colorSplit = function(dot){
    switch (dot.gender){
      case 'm': return 'dodgerblue'
      case 'f': return 'salmon'
      case 'n': return 'lightgreen'
    }
}
