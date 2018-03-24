var margin = {top:40, right: 40, bottom: 40 , left:40},
	WIDTH=1200-margin.left-margin.right,
	HEIGHT=800 - margin.top - margin.bottom

var mydata = null
var baseTemperature =null

d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json",function(data){
	mydata=data

})

var myInterval = setInterval(function(){
	if(mydata!==null){
		clearInterval(myInterval)
		// console.log(mydata)
		var tooltip = d3.select('body')
					.append('div')
						.style('position','absolute')
						.style('background','#fff')
						.style('margin', '0 35px 100px')
						.style('opacity',0)

		var svg = d3.select('body').append('svg')
					.attr('width',WIDTH)
					.attr('height',HEIGHT)
					.append('g')

		var force = d3.layout.force()
					.size([WIDTH,HEIGHT])
					.nodes(mydata.nodes)
					.links(mydata.links)
					.on('tick',tick)
					.linkDistance(200)
					.start()


		var link = svg.selectAll('.link')
					.data(mydata.links)
					.enter()
					.append('line')
					.attr('class','link')

		var node = d3.select('#countries').selectAll('img')
					.data(mydata.nodes)
					.enter()
					.append('img')
					.attr('class',function (d) { return 'flag flag-' + d.code})
					.call(force.drag)
					.on('mouseover',function(d){
						// console.log(d[1])
						tooltip.transition().duration(200)
								.style('opacity',.9)
						tooltip.html(function(){
							return d.country
						}).style('left',(d3.event.pageX-35)+'px')
							.style('top',(d3.event.pageY-30)+'px')

						d3.select(this)
							.style('opacity',0.5)
					})
					.on('mouseout',function(d){
						d3.select(this)
							.style('opacity',1)
					});
		svg.append('g')
		.append('text')
		.classed('title',true)
		.text('Force Directed Graph of State Contiguity')
		.attr('transform','translate(225,40)')
		.style('font-size','40px')



	function tick(e){
		node.style('left',function(d){return d.x+'px'})
			.style('top',function(d){return d.y+'px'})
			

		link.attr('x1',function(d){return d.source.x})
			.attr('y1',function(d){return d.source.y})
			.attr('x2',function(d){return d.target.x})
			.attr('y2',function(d){return d.target.y})

	}

	}
},1000)















