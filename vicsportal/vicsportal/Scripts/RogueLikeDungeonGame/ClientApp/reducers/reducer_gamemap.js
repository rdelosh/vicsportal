import {initialConfig} from './initialmap';


let starter = initialConfig

export default function(state = starter, action){
	let newtiles = Object.assign([],state.tiles)
	let newlocs = Object.assign({},state.locs)
	let WIDTH = Object.assign(state.WIDTH)
	let HEIGHT = Object.assign(state.HEIGHT)

	switch(action.type){
		case 'MOVE':
			
		 // console.log(state)
				newtiles[action.payload.previousplayerlocation]={type:'FLOOR'}
				newtiles[action.payload.newplayerlocation]={type:'PLAYER'} 
		 return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
		// console.log(action.payload)

		case 'KILL':
			console.log("KILL LOCATION: "+action.payload)
			newtiles[action.payload] = {type:'FLOOR'}
			return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
	}
	return state
}