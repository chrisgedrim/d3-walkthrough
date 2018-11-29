document.addEventListener('DOMContentLoaded', () => {
    const httpRequest = new XMLHttpRequest();
    let points = 120;
    const maxVal = 10
    let lastIndex = 0;
    const width = 1024;
    const height = 300;
    const margin = 40;

    const dataSet = Array.from(new Array(points), (d, i) => {
        return {
            timestamp: Date.now() - (1000 * i),
            value: Math.floor(Math.random() * (maxVal + 1))
        }
    }).reverse();

    httpRequest.open('GET', `stream?maxVal=${maxVal}&interval=3000`);
    httpRequest.onprogress = () => {
        const currIndex = httpRequest.responseText.length;
        if (lastIndex == currIndex) return;
        const json = JSON.parse(httpRequest.responseText.substring(lastIndex, currIndex));
        lastIndex = currIndex;
        dataSet.push(json);
        updatePlot();
    }
    httpRequest.send();

    const xScale = d3.scaleLinear()
        .domain([0, points]) // input
        .range([margin, width - (2 * margin)]); // output

    var yScale = d3.scaleLinear()
        .domain([-1, maxVal]) // input
        .range([height - margin, margin]); // ouput (y is 0 at top)

    const svg = d3.select('#graph')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const xAxis = svg.append('g')
        .attr('transform', `translate(0, ${height - margin})`)
        .call(d3.axisBottom().scale(xScale));

    svg.append('g')
        .attr('transform', `translate(${margin}, 0)`)
        .call(d3.axisLeft(yScale));

    const updatePlot = () => {
        points = Math.floor(Math.random() * ((120 - 60) + 1));

        const data = dataSet.slice(-points);

        xScale.domain([0, points]);

        xAxis.call(d3.axisBottom().scale(xScale));

        const barWidth = xScale(1) - xScale(0);

        const bars = svg.selectAll('rect').data(data);

        bars.attr('class', 'update')
            .attr('x', (_d, i) => xScale(i))
            .attr('y', (d) => yScale(d.value))
            .attr('width', barWidth)
            .attr('height', (d) => yScale(-1) - yScale(d.value));

        bars.enter()
            .append('rect')
                .attr('x', (_d, i) => xScale(i))
                .attr('y', (d) => yScale(d.value))
                .attr('width', barWidth)
                .attr('height', (d) => yScale(-1) - yScale(d.value))
                .attr('class', 'enter');

        bars.exit()
            .remove();
    }

    updatePlot();
}, false);
