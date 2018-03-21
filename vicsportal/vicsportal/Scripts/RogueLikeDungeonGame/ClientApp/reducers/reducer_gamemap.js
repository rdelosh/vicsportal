import {initialConfig} from './initialmap';


let starter = initialConfig

export default function(state = starter, action){
	let newtiles = Object.assign([],state.tiles)
	let WIDTH = Object.assign(state.WIDTH)
	let HEIGHT = Object.assign(state.HEIGHT)
	let visiblemap = Object.assign([],state.visiblemap)

  


	switch(action.type){
		case 'TOGGLELIGHTS':

			let newlightstate = !state.lightsON
			let currentplayerlocation = action.payload
					if(newlightstate){
						// console.log(true)
						visiblemap=newtiles
						
					}else{
						visiblemap=generateVisibleMap(newtiles,currentplayerlocation,state.WIDTH)
					}
			return {visiblemap:visiblemap,tiles:newtiles,WIDTH:WIDTH,HEIGHT:HEIGHT,lightsON:newlightstate}

		case 'MOVE':
			let newplayerlocation = action.payload.newplayerlocation
			newtiles[action.payload.previousplayerlocation]={type:'FLOOR'}
			newtiles[action.payload.newplayerlocation]={type:'PLAYER'} 

			if(state.lightsON){
					visiblemap=newtiles
			}else{
					visiblemap = generateVisibleMap(newtiles,newplayerlocation,state.WIDTH)
				}

			
		 // console.log(state)
				
		 return {visiblemap:visiblemap,tiles:newtiles,WIDTH:WIDTH,HEIGHT:HEIGHT,lightsON:state.lightsON}
		// console.log(action.payload)

		case 'KILL':
			// console.log("KILL LOCATION: "+action.payload)
			newtiles[action.payload] = {type:'FLOOR'}
			return {visiblemap:visiblemap,tiles:newtiles,WIDTH:WIDTH,HEIGHT:HEIGHT,lightsON:state.lightsON}
	}
	return state
}
function generateVisibleMap(newtiles,newplayerlocation,WIDTH){
		    	let visibletiles = []
			    for(let i =-3;i<=3;i++){
			    	for(let j = 0;j<=3;j++){
			    		if(j===0){
			    			visibletiles.push(newplayerlocation+i)			
			    		}else{
			    			visibletiles.push(newplayerlocation+j*WIDTH+i)
			    			visibletiles.push(newplayerlocation-j*WIDTH+i)
			    		}
			    		if(3-Math.abs(i)===j){
			    			break;
			    		}	
			    	}
			    }

				let  visiblemap = Object.assign([],newtiles)
			    newtiles.map((tile,index)=>{
			    	if(visibletiles.includes(index)){
			    		// console.log(index)
			    	}else{

			    		visiblemap[index] = {type:'DARK'}	
			    		
			    	}
			    	
			    })
			
	return visiblemap
}