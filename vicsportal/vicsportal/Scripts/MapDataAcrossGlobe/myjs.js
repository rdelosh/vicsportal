var margin = {top:60, right: 60, bottom: 60 , left:60},
	WIDTH='100%',
	HEIGHT='100%'

var mapdata = null

d3.queue()
	.defer(d3.json,"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json")
	.defer(d3.json,"https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json")
	.await(ready)

	var projection = d3.geoMercator().translate([900,600])
							.scale(300)

	var path=d3.geoPath().projection(projection)


function ready(error,data,meteors){
	var meteors = meteors.features
	var masses = []
	meteors.map(function(data){
		masses.push(data.properties.mass)
	})
	console.log(meteors)

	var countries = topojson.feature(data,data.objects.countries1).features

	var tooltip = d3.select('body')
					.append('div')
						.style('position','absolute')
						.style('background','#fff')
						.style('margin', '0 35px 100px')
						.style('opacity',0)
	var svg = d3.select('body')
					.append('svg')
						.attr("width",WIDTH)
						.attr("height",HEIGHT)
						.classed("vizgraph",true)
					.append('g')
					.selectAll('.country').data(countries)
					.enter()
					.append('path')
					.classed('country',true)
					.attr('d',path)
		
		var circles = d3.select('.vizgraph').append('g').selectAll('.meteor').data(meteors)
					.enter().append('circle')
					.classed('meteor',true)
					.attr('cx',function(d){
						if(d.geometry===null){
							return 1
						}
						var location = projection([d.geometry.coordinates[0],d.geometry.coordinates[1]])
						
						return location[0]
					})
					.attr('cy',function(d){

						if(d.geometry===null){
							return 1
						}
						var location = projection([d.geometry.coordinates[0],d.geometry.coordinates[1]])
						
						return location[1]
					})
					.attr('r',function(d){
						var mass = d.properties.mass
						// d.properties.mass>0? return 5 : return 10
						if(mass<1000){
							return 3
						}
						if(mass>10000&&mass<100000){
							return 4
						}
						else if(mass>100000&&mass<1000000){
							return 6

						}else if(mass>1000000&&mass<10000000){
							return 15
							
						}else if(mass>10000000){
							return 30
						}

					})
					.style('opacity',0.5)
					.on('mouseover',function(d){
						tooltip.transition().duration(200)
								.style('opacity',.9)
						tooltip.html(function(){
							return "name: " + d.properties.name + "<br />"+
								   "mass: "+ d.properties.mass + "<br />"+
								   "date: "+ d.properties.year
						}).style('left',(d3.event.pageX-100)+'px')
							.style('top',(d3.event.pageY-100)+'px')

						d3.select(this)
							.style('opacity',0.7)
					})
					.on('mouseout',function(d){
						tooltip.html("")
						d3.select(this)
							.style('opacity',0.5)
					});

	var start_x, start_y;  
	var drag_handler = d3.drag()
							.on("start", drag_start)
							.on("drag", drag_drag);

	function drag_start(){
	     start_x = +d3.event.x;
	     start_y = +d3.event.y;
	}    
	    
	function drag_drag(d) {
		var current_scale
	    if (this.getAttribute("transform") === null)
	    {
	        current_scale = 1; 
	    } 
	    else {
	        current_scale_string = this.getAttribute("transform").split(' ')[1];
	        current_scale = +current_scale_string.substring(6,current_scale_string.length-1);
	    }
	      d3.select(this)
	        .attr("cx", d.x = start_x + ((d3.event.x - start_x) / current_scale) )
	        .attr("cy", d.y = start_y + ((d3.event.y - start_y) / current_scale));
	}
	drag_handler(circles); 

	var zoom_handler = d3.zoom()
    .on("zoom", zoom_actions);

	function zoom_actions(){
	  circles.attr("transform", d3.event.transform);
    	svg.attr("transform", d3.event.transform)
	}

	zoom_handler(d3.select('.vizgraph'));   

}
