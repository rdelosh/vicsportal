import {initialConfig} from './initialmap';


let starter = initialConfig

export default function(state = starter, action){
	let newtiles = Object.assign([],state.tiles)
	let WIDTH = Object.assign(state.WIDTH)
	let HEIGHT = Object.assign(state.HEIGHT)
	let visiblemap = Object.assign([],state.visiblemap)

  


	switch(action.type){
		case 'MOVE':
			let newplayerlocation = action.payload.newplayerlocation
			newtiles[action.payload.previousplayerlocation]={type:'FLOOR'}
			newtiles[action.payload.newplayerlocation]={type:'PLAYER'} 

			    let visibletiles = []
			    for(let i =-3;i<=3;i++){
			    	for(let j = 0;j<=3;j++){
			    		if(j===0){
			    			visibletiles.push(newplayerlocation+i)			
			    		}else{
			    			visibletiles.push(newplayerlocation+j*state.WIDTH+i)
			    			visibletiles.push(newplayerlocation-j*state.WIDTH+i)
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

			
		 // console.log(state)
				
		 return {visiblemap:visiblemap,tiles:newtiles,WIDTH:WIDTH,HEIGHT:HEIGHT}
		// console.log(action.payload)

		case 'KILL':
			// console.log("KILL LOCATION: "+action.payload)
			newtiles[action.payload] = {type:'FLOOR'}
			return {visiblemap:visiblemap,tiles:newtiles,WIDTH:WIDTH,HEIGHT:HEIGHT}
	}
	return state
}