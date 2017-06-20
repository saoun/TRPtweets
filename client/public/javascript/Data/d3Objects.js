var svg = d3.select('.chart')
            .append('svg')
            .attr('height', Page.height)
            .attr('width', Page.width)
            .append('g')
            .attr('transform', 'translate(0,0)');
            //TODO find a responsive solution