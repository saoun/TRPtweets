var svg = d3.select('.chart')
            .append('svg')
            .attr('class', 'canvas')
            .attr('height', Page.height - 26)
            .attr('width', Page.width)
            .append('g')
            .attr('transform', 'translate(0,0)');
            //TODO find a responsive solution