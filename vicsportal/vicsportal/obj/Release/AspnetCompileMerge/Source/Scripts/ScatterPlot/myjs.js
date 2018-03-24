

var margin={top:40,bottom:40,left:40,right:40},
	WIDTH=800-margin.left-margin.right,
	HEIGHT= 600-margin.top-margin.bottom,
	
	circlesize=5

var mydata =null,
	seconds=[],
	places=[]

d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", function(data){
	mydata=data
})


var myInterval = setInterval(function(){
	if(mydata!=null){
		clearInterval(myInterval)
		console.log(mydata)

		
		mydata.map(function(data){
			places.push(data.Place)
			seconds.push(data.Seconds)

			// tempdate.setSeconds(data.Seconds)
			// seconds.push(Date.parse(tempdate.toISOString()))
			// console.log(tempdate.toISOString())


		})
		var best = d3.min(seconds)
		var behindtimes=[]
		seconds.map(function(data){
			behindtimes.push(data-best)
		})
		console.log(behindtimes)

		
		

		var yScale = d3.scaleLinear()
					.domain([0,d3.max(places)])
					.range([0,HEIGHT])
		var xScale = d3.scaleBand()
					.domain(behindtimes)
					.range([WIDTH,0])
		var xAxisValues = d3.scaleBand()
						.domain(behindtimes)
						.range([WIDTH,0])
		

		var yAxisValues = d3.scaleLinear()
						.domain([d3.max(places),1])
						.range([HEIGHT,0])
		var xAxisTicks = d3.axisBottom(xAxisValues)
						.ticks(20)

		var yAxisTicks = d3.axisLeft(yAxisValues)
						.ticks(7)

		var tooltip = d3.select('body')
							.append('div')
								.style('position','absolute')
								.style('background','#fff')
								.style('margin', '0 35px 100px')
								.style('opacity',0)



		var svg = d3.select('body')
				.append('svg')
				.classed('vizgraph',true)
				.attr('width',WIDTH+margin.left + margin.right)
				.attr('height',HEIGHT+margin.top+margin.bottom)
				.append('g')
				.attr('transform','translate('+(margin.left+13)+','+margin.right+')')
				.selectAll('circle').data(mydata)
				.enter()
				.append('g')
				.classed('ridergroup',true)
				.append('circle')
				.attr('cx',function(d,i){
					console.log(d.Name +""+ (d.Seconds - best))
					// console.log(d.Seconds - best)
					return xScale(d.Seconds-best)
				})
				.attr('cy',function(d,i){
					return yScale(d.Place)
				})
				.attr('r',circlesize)
				.attr('fill',function(d){
					if(d.Doping === ""){
						return 'black'
					}else{
						return 'red'
					}
				})
				.on('mouseover',function(d){
					tooltip.transition().duration(200)
									.style('opacity',.9)
					tooltip.html(function(){
								return d.Name + "<br />"+
										"Place: "+d.Place + "<br />"+
										"Time: "+ d.Time + "<br />"+
										"Year: "+ d.Year + "<br />"+
										"Seconds behind: "+(d.Seconds-best)
							}).style('left',(d3.event.pageX-35)+'px')
								.style('top',(d3.event.pageY-30)+'px')
								
				})


		d3.selectAll('.ridergroup').append('text')
						.text(function(d){
							return d.Name
						})
						.attr('x',function(d){
							return xScale(d.Seconds-best)
						})
						.attr('y',function(d){
							return yScale(d.Place)
						})
						.style('font-size',"8px")
						.attr('transform','translate(5,3)')

		var xGuide = d3.select('.vizgraph').append('g')
					.attr("transform",'translate(40,'+(HEIGHT+40)+')')
					.call(xAxisTicks)
		var yGuide = d3.select('.vizgraph').append('g')
					.attr("transform",'translate(40,40)')
					.call(yAxisTicks)


		var yLabel = d3.select('.vizgraph').append('text')
					.text('Ranking')
					.attr('transform','translate(42,40) rotate(90)')
		var xLabel = d3.select('.vizgraph').append('text')
					.text('Seconds behind best time')
					.attr('transform','translate('+(WIDTH-margin.left-margin.right-50)+','+(HEIGHT+margin.top+margin.bottom-10)+')')
		var title = d3.select('.vizgraph').append('text')
					.text("Doping in Professional Bicycle Racing 35 Fastest times up Alpe d'Huez Normalized to 13.8km distance")
					.attr("transform",'translate('+(WIDTH)/10+',40)')
					



	}	

},1000)


				
