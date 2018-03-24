var margin = {top:60, right: 60, bottom: 60 , left:60},
	WIDTH=1200-margin.left-margin.right,
	HEIGHT=800 - margin.top - margin.bottom

var mydata = null
var baseTemperature =null

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json",function(data){
	baseTemperature = data.baseTemperature
	mydata=data.monthlyVariance

})

var myInterval = setInterval(function(){
	if(mydata!==null){

	clearInterval(myInterval)
	var tempyear = 0
	var years= []
	mydata.map(function(data){
		if(tempyear!=data.year){
			tempyear=data.year
			years.push(tempyear)
		}
	})

	const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];


	var yAxisValues = d3.scaleLinear()
						.domain([0,12])
						.range([0,HEIGHT])
	var yAxisTicks = d3.axisLeft(yAxisValues)
						.ticks(12)
						.tickFormat(function(d){
							return MONTH_NAMES[d]
						})
	var xAxisValues = d3.scaleLinear()
						.domain([d3.min(years),d3.max(years)])
						.range([0,WIDTH])
	var xAxisTicks = d3.axisBottom(xAxisValues)
						.ticks(years.length/10)
						.tickFormat(function(d){
							return d
						})


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
						.style('fill',function(d){
							let temperature = baseTemperature+d.variance
							if(temperature<2.7){
								return '#6666ff'
							}else if(temperature>=2.7&&temperature<3.9){
								return '#6699ff'
							}else if(temperature>=3.9&&temperature<5){
								return '#008fb3'
							}else if(temperature>=5&&temperature<6.1){
								return '#00b359'
							}else if(temperature>=6.1&&temperature<7.2){
								return '#77b300'
							}else if(temperature>=7.2&&temperature<8.3){
								return '#ffffb3'
							}else if(temperature>=8.3&&temperature<9.4){
								return '#ffdab3'
							}else if(temperature>=9.4&&temperature<10.5){
								return '#ff9c33'
							}else if(temperature>=10.5&&temperature<11.6){
								return '#ff6600'
							}else if(temperature>=11.6&&temperature<12.7){
								return '#ff3300'
							}else if(temperature>=12.7){
								return '#993300'
							}

						})
						.attr('width',WIDTH/years.length)
						.attr('height',HEIGHT/12)
						.attr('x',function(d){
							return (d.year-1753)*WIDTH/years.length
						})
						.attr('y',function(d){
							// console.log(d.month*20)
							// console.log((d.month-1)*(HEIGHT/12))
							return (d.month-1)*(HEIGHT/12)
						})
						.on('mouseover',function(d){
							// console.log(d[1])
							tooltip.transition().duration(200)
									.style('opacity',.9)
							tooltip.html(function(){
								return MONTH_NAMES[d.month-1]+d.year +"<br />"+
										 "variance: " + d.variance
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
					.attr("transform",'translate(60,60)')
					.call(yAxisTicks)

	var xGuide = d3.select('.vizgraph')
					.append('g')
					.attr("transform",'translate(60,'+(HEIGHT+margin.bottom)+')')
					.call(xAxisTicks)
	var colors = [  
					{variance:0,color:'#6666ff'},
					{variance:2.7,color:'#6699ff'},
					{variance:3.9,color:'#008fb3'},
					{variance:5,color:'#00b359'},
					{variance:6.1,color:'#77b300'},
					{variance:7.2,color:'#ffffb3'},
					{variance:8.3,color:'#ffdab3'},
					{variance:9.4,color:'#ff9c33'},
					{variance:10.5,color:'#ff6600'},
					{variance:11.6,color:'#ff3300'},
					{variance:12.7,color:'#993300'},
					


				]

	var legend = d3.select('.vizgraph')
					.append('g')
					.attr('transform','translate('+(WIDTH-margin.left-margin.right-220)+','+(HEIGHT+margin.bottom+18)+')')
					.classed('legend',true)
				   .selectAll('rect').data(colors)
					.enter()
					.append('g')
					.classed('legendrect',true)
					.append('rect')
					.style('fill',function(d){
						return d.color
					})
					.attr('width',40)
					.attr('height',20)
					.attr('x',function(d,i){
						return i*40
					})
	d3.selectAll('.legendrect').append('text')
							.text(function(d,i){
								return d.variance
							})
							.attr('y',40)
							.attr('x',function(d,i){
								return i*40
							})
							.attr('transform','translate(10,-10)')
							.style('font-size',10)

	var yLabel = d3.select('.vizgraph').append('g')
					.append('text')
					.text('Months')
					.attr('transform','translate(20,250) rotate(-90)')
					.style('font-size',30)
	var xLabel = d3.select('.vizgraph').append('g')
					.append('text')
					.text('Years')
					.attr('transform','translate(500,'+(HEIGHT+margin.top+40)+')')
					.style('font-size',30)

	var title = d3.select('.vizgraph').append('g')
					.append('text')
					.classed('title',true)
					.text('Monthly Global Land-Surface Temperature 1753-2015')
					.attr('transform','translate(100,40)')
					.style('font-size',40)









	}
},1000)













