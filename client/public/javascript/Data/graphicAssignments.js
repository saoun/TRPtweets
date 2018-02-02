var genderSpacingX = screen.width > 767 ?
  {
    m: 0.2,
    f: 0.5,
    n: 0.8
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
      m: 0.2,
      f: 0.5,
      n: 0.8
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
  if (dot.category == Data.categories[0].category) { return screen.width > 767 ? 0.2 : 0.93 }
  if (dot.category == Data.categories[1].category) { return screen.width > 767 ? 0.2 : 0.85 }
  if (dot.category == Data.categories[2].category) { return screen.width > 767 ? 0.2 : 0.77 }
  if (dot.category == Data.categories[3].category) { return screen.width > 767 ? 0.2 : 0.69 }
  if (dot.category == Data.categories[4].category) { return screen.width > 767 ? 0.45 : 0.61 }
  if (dot.category == Data.categories[5].category) { return screen.width > 767 ? 0.45 : 0.53 }
  if (dot.category == Data.categories[6].category) { return screen.width > 767 ? 0.45 : 0.45 }
  if (dot.category == Data.categories[7].category) { return screen.width > 767 ? 0.45 : 0.37 }
  if (dot.category == Data.categories[8].category) { return screen.width > 767 ? 0.7 : 0.29 }
  if (dot.category == Data.categories[9].category) { return screen.width > 767 ? 0.7 : 0.21 }
  if (dot.category == Data.categories[10].category) { return screen.width > 767 ? 0.7 : 0.13 }
  if (dot.category == Data.categories[11].category) { return screen.width > 767 ? 0.7 : 0.05 }
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
  if (title == Data.categories[0].category) { return screen.width > 767 ? 0.3 : 0.91 }
  if (title == Data.categories[1].category) { return screen.width > 767 ? 0.3 : 0.83 }
  if (title == Data.categories[2].category) { return screen.width > 767 ? 0.3 : 0.75 }
  if (title == Data.categories[3].category) { return screen.width > 767 ? 0.3 : 0.67 }
  if (title == Data.categories[4].category) { return screen.width > 767 ? 0.55 : 0.59 }
  if (title == Data.categories[5].category) { return screen.width > 767 ? 0.55 : 0.51 }
  if (title == Data.categories[6].category) { return screen.width > 767 ? 0.55 : 0.43 }
  if (title == Data.categories[7].category) { return screen.width > 767 ? 0.55 : 0.35 }
  if (title == Data.categories[8].category) { return screen.width > 767 ? 0.8 : 0.27 }
  if (title == Data.categories[9].category) { return screen.width > 767 ? 0.8 : 0.19 }
  if (title == Data.categories[10].category) { return screen.width > 767 ? 0.8 : 0.11 }
  if (title == Data.categories[11].category) { return screen.width > 767 ? 0.8 : 0.03 }
}

var colorSplit = function(dot){
    switch (dot.gender){
      case 'm': return '#eb5c33de'
      case 'f': return '#0f51a7de'
      case 'n': return '#62bf3dd1'
    }
}
