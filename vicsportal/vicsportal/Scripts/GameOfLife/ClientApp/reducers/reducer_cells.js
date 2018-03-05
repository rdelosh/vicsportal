export default function(state =null, action){
	switch (action.type){
		case 'START':
			let newarray =[]
			state.array.map((cell,index)=>{
				// console.log(index)
				let aliveneighbors =0;
				let deadneighbors = 0;
				recognizeNeighbors(findNeighbors(index,state.WIDTH,state.HEIGHT),index,state).map((neighbor)=>{
					
					if(neighbor.alive==='A'){
						aliveneighbors++
					}else if(neighbor.alive==='D'){
						deadneighbors++
					}

				})
				if(cell.alive==='A'){
					if(aliveneighbors>3||aliveneighbors<2){
						newarray.push({index:index,alive:'D'})	
					}else if(aliveneighbors>=2&&aliveneighbors<=3){
						newarray.push({index:index,alive:'A'})	
					}
				}
				if(cell.alive==='D'){
					if(aliveneighbors===3){
						newarray.push({index:index,alive:'A'})
					}else{
						newarray.push({index:index,alive:'D'})	
					}
				}

				
				

			})
			// console.log(newarray)
			// let testconstant =3430
			// console.log(state.array[testconstant])
			// console.log(recognizeNeighbors([3,5,6,7,8],50,state))
			// console.log(findNeighbors(testconstant,state.WIDTH,state.HEIGHT))
			// console.log(recognizeNeighbors(findNeighbors(testconstant,state.WIDTH,state.HEIGHT),testconstant,state))
			// recognizeNeighbors(findNeighbors(testconstant,state.WIDTH,state.HEIGHT),testconstant,state)
				


			// 	let aliveneighbors =0;
			// 	let deadneighbors = 0;
			// 	recognizeNeighbors(findNeighbors(testconstant,state.WIDTH,state.HEIGHT),testconstant,state).map((neighbor)=>{
					
			// 		if(neighbor.alive==='A'){
			// 			aliveneighbors++
			// 		}else if(neighbor.alive==='D'){
			// 			deadneighbors++
			// 		}

			// 	})
			// console.log(aliveneighbors)
			// console.log(deadneighbors)
			return {WIDTH:state.WIDTH,HEIGHT:state.HEIGHT,array:newarray}
	}
	return state
	// console.log(state);
	// return state



}
function findNeighbors(index,WIDTH, HEIGHT){

	//find if index is at the corner
	if(index===0){//{type:CORNER,location1:UP,location2:LEFT}
		return [5,7,8]
	}else if(index===WIDTH-1){//return {type:CORNER,location1:UP,location2:RIGHT}
		return [3,6,7]
	}else if(index===(WIDTH*HEIGHT)-WIDTH){//return {type:CORNER,location1:DOWN,location2:LEFT}
		return [1,2,5]
	}else if(index===WIDTH*HEIGHT-1){//return{type:CORNER,location1:DOWN,location2:RIGHT}
		return [0,1,3]
	}

	//find if index is at the edge
	if(index>0&&index<WIDTH-1){//return {type:EDGE,location1:UP}
		return [3,5,6,7,8]
	}else if(index%WIDTH===0){//return {type:EDGE,location1:LEFT}
		return [1,2,5,7,8]
	}else if((index+1)%WIDTH===0){//return EDGE RIGHT
		return [0,1,3,6,7]
	}else if(index>WIDTH*HEIGHT-WIDTH &&index<HEIGHT*WIDTH){//return {type:EDGE,location1:DOWN}
		return [0,1,2,3,5]
	}

	//if none of the above conditions are met, then cell has 8 neighbors so
	return [0,1,2,3,5,6,7,8]

}
function recognizeNeighbors(arrayofneighborpositions,index,boardstate){
	// NeighborPositions
	// [0 1 2
	//  3   5
	//  6 7 8]
	let neighbors = []

	arrayofneighborpositions.map((position)=>{
		if(position===0){
			neighbors.push(boardstate.array[index-boardstate.WIDTH-1])
		}else if(position===1){
			neighbors.push(boardstate.array[index-boardstate.WIDTH])
		}else if(position===2){
			neighbors.push(boardstate.array[index-boardstate.WIDTH+1])
		}else if(position===3){
			neighbors.push(boardstate.array[index-1])
		}else if(position===5){
			neighbors.push(boardstate.array[index+1])
		}else if(position===6){
			neighbors.push(boardstate.array[index+boardstate.WIDTH-1])
		}else if(position===7){
			neighbors.push(boardstate.array[index+boardstate.WIDTH])
		}else if(position===8){
			neighbors.push(boardstate.array[index+boardstate.WIDTH+1])
		}

	})

	return neighbors



}

