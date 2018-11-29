document.addEventListener('DOMContentLoaded', () => {
    const httpRequest = new XMLHttpRequest();
    const points = 120;
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

    httpRequest.open('GET', `stream?maxVal=${maxVal}`);
    httpRequest.onprogress = () => {
        const currIndex = httpRequest.responseText.length;
        if (lastIndex == currIndex) return;
        const json = JSON.parse(httpRequest.responseText.substring(lastIndex, currIndex));
        lastIndex = currIndex;
        dataSet.push(json);
        updatePlot();
    }
    httpRequest.send();

    const xScale = d3.scaleTime()
        .domain([
            new Date(dataSet[0].timestamp),
            new Date(dataSet[points - 1].timestamp)
        ]) // input
        .range([margin, width - (2 * margin)]); // output

    var yScale = d3.scaleLinear()
        .domain([0, maxVal]) // input
        .range([height - margin, margin]); // ouput (y is 0 at top)

    const plotLine = d3.line()
        .x((d) => xScale(d.timestamp))
        .y((d) => yScale(d.value));

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

    const plotPath = svg.append('path')
        .datum(dataSet)
        .attr('fill', 'none')
        .attr('stroke', 'red');

    const updatePlot = () => {
        const data = dataSet.slice(-points);
        xScale.domain([
            new Date(data[0].timestamp),
            new Date(data[points - 1].timestamp)
        ]);
        xAxis.call(d3.axisBottom(xScale).scale(xScale));
        plotPath.datum(data).attr('d', plotLine);
    }

    updatePlot();
}, false);
