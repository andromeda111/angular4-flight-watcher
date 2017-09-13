var oReq = new XMLHttpRequest()
var incomingData

oReq.onload = function(e) {
  incomingData = JSON.parse(oReq.responseText)
  drawMap(incomingData)
  appendData(incomingData)
}
oReq.open('GET', 'https://opensky-network.org/api/states/all', true)
oReq.send()

// Append Flight Data to DOM
function appendData(data) {
  var mapTimeEl = document.getElementById('flight-time');
  var mapTimeText = document.createTextNode(`${Date(data.time)}`);
  mapTimeEl.append(mapTimeText);
  var mapNumEl = document.getElementById('flight-num');
  var mapNumText = document.createTextNode(`Rendering ${data.states.length} Flights | via OpenSky-Network API`);
  mapNumEl.append(mapNumText);
}

// Draw Map with Flight Data with D3
function drawMap(flightData) {
  var width = 1020
  var height = 600
  var projection = d3.geo.mercator()
    .center([0, 20])
    .scale(180)
  var svg = d3.select('.graph').append('svg')
    .attr('width', width)
    .attr('height', height)
  var path = d3.geo.path()
    .projection(projection)
  var g = svg.append('g')

  d3.json('https://unpkg.com/world-atlas@1/world/110m.json', function(error, topology) {

    g.selectAll('path')
      .data(topojson.object(topology, topology.objects.countries).geometries)
      .enter()
      .append('path')
      .attr('d', path)

    g.selectAll('circle')
      .data(flightData.states)
      .enter()
      .append('circle')
      .attr('cx', function(d) {
        return projection([d.map((num, a, b) => {
          return num
        })[5], d.map((num, a, b) => {
          return num
        })[6]])[0]
      })
      .attr('cy', function(d) {
        return projection([d.map((num, a, b) => {
          return num
        })[5], d.map((num, a, b) => {
          return num
        })[6]])[1]
      })
      .attr('r', 1)
      .style('fill', '#44CCFF')
      .style('opacity', '0.3')
  })
}
