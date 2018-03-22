var margin = {top:40, right: 40, bottom: 40 , left:40},
	WIDTH=800-margin.left-margin.right,
	HEIGHT=600 - margin.top - margin.bottom

var mydata = null
var gdps = []
var dates = []
d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json",function(data){
	mydata=data.data
})

var myInterval = setInterval(function(){
	if(mydata!==null){

	clearInterval(myInterval)
	console.log(mydata)
	mydata.map(function(data){
		dates.push(new Date(data[0]))
		// console.log(dates)
		gdps.push(data[1])
	})
	


	var yScale = d3.scaleLinear()
					.domain([0,d3.max(gdps)])
					.range([0,HEIGHT])

	var yAxisValues = d3.scaleLinear()
						.domain([0,d3.max(gdps)])
						.range([HEIGHT,0])

	var yAxisTicks = d3.axisLeft(yAxisValues)
						.ticks(10)

	var xScale = d3.scaleBand()
					.domain(gdps)
					.range([0,WIDTH])
	var xAxisValues = d3.scaleTime()
						.domain([dates[0],dates[(dates.length-1)]])
						.range([0,WIDTH])
	var xAxisTicks = d3.axisBottom(xAxisValues)
						.ticks(d3.timeYear.every(5))
	var tooltip = d3.select('body')
					.append('div')
						.style('position','absolute')
						.style('background','#fff')
						.style('margin', '0 35px 100px')
						.style('opacity',0)

	var svg = d3.select('body')
					.append('svg')
						.attr("width",WIDTH+margin.left + margin.right)
						.attr("height",HEIGHT+margin.top+margin.bottom)
						.classed("vizgraph",true)
					.append('g')
					.attr('transform','translate('+margin.left+','+margin.right+')')
				.selectAll('rect').data(mydata)
					.enter().append('rect')
						.style('fill','#b3d9ff')
						.attr('width',function(d){
							return xScale.bandwidth()
						})
						.attr('height',0)
						.attr('x',function(d){
							return xScale(d[1])
						})
						.attr('y',HEIGHT)
						.on('mouseover',function(d){
							// console.log(d[1])
							tooltip.transition().duration(200)
									.style('opacity',.9)
							tooltip.html(function(){
								return d[0] + "<br/>"+" GDP :"+ d[1]
							}).style('left',(d3.event.pageX-35)+'px')
								.style('top',(d3.event.pageY-30)+'px')

							d3.select(this)
								.style('opacity',0.5)
						})
						.on('mouseout',function(d){
							d3.select(this)
								.style('opacity',1)
						});


	var yGuide = d3.select('.vizgraph')
					.append('g')
					.attr("transform",'translate(40,40)')
					.call(yAxisTicks)

	var xGuide = d3.select('.vizgraph').append('g')
					.attr("transform",'translate(40,'+(HEIGHT+40)+')')
					.call(xAxisTicks)
	var yLabel = d3.select('.vizgraph').append('g')
					.append('text')
					.text('Gross Domestic Product,USA')
					.attr('transform','translate(55,250) rotate(-90)')

	var title = d3.select('.vizgraph').append('g')
					.append('text')
					.classed('title',true)
					.text('Gross Domestic Product')
					.attr('transform','translate(250,40)')

					

	svg.transition()
			.attr('height',function(d){
				return yScale(d[1])
			})
			.attr('y',function(d){
				return HEIGHT - yScale(d[1])
			})
			.delay(function(d,i){
				return i*3
			})
			.duration(3000)
			.ease(d3.easeBounceOut)




		
	}











	
},1000)













