var pageSizes = screen.width > 767 ?
	{
		width: window.innerWidth,
		height: window.innerHeight - $('#menu').height() - $('#toolbar').height()
	} :
	{
		width: screen.width,
		height: screen.height - $('#menu').height() - $('#toolbar').height()
	}

var Data = {
	all: {},
	slicedData: {}, // All data minus the clicked bubble
	highlightedBubble: '', // the clicked bubble
	categories: [
    {category: 'democratic presidential candidates', count: 0},
    {category: 'republican presidential candidates', count: 0},
    {category: 'journalists and other media figures', count: 0},
    {category: 'television shows', count: 0},
    {category: 'republican politicians', count: 0},
    {category: 'places', count: 0},
    {category: 'other people', count: 0},
    {category: 'other', count: 0},
    {category: 'media organizations', count: 0},
    {category: 'groups and political organizations', count: 0},
    {category: 'democratic politicians', count: 0},
    {category: 'celebrities', count: 0}
  ],
  page: {
		// subtract #menu and #toolbar height
  	width: pageSizes.width,
  	height: pageSizes.height
  }
}
