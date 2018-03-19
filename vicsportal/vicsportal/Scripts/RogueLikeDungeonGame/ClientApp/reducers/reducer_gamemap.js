import {initialConfig} from './initialmap';


let starter = initialConfig

export default function(state = starter, action){


	switch(action.type){
		case 'MOVE':
		let newtiles = Object.assign([],state.tiles)
		let newlocs = Object.assign({},state.locs)
		let WIDTH = Object.assign(state.WIDTH)
		let HEIGHT = Object.assign(state.HEIGHT)
		// console.log(state)
		switch(action.payload){
			case 'left':
				if(state.locs.playerlocation-1<0 ||
				 state.tiles[state.locs.playerlocation-1].type!=='FLOOR'){
					return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
				}
				newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation-1]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation-1
			return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
			case 'right':
				if(state.locs.playerlocation+1>state.WIDTH*state.HEIGHT-1 ||
				 state.tiles[state.locs.playerlocation+1].type!=='FLOOR'){
					return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
				}
				newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation+1]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation+1	
			return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
			
			case 'up':
				// console.log(state.playerlocation)
				// console.log(state.WIDTH)
				if(state.locs.playerlocation-state.WIDTH<0 ||
				 state.tiles[state.locs.playerlocation-state.WIDTH].type!=='FLOOR'){
					return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
				}
				newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation-state.WIDTH]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation-state.WIDTH
				return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
			case 'down':
				if(state.locs.playerlocation+state.WIDTH>state.WIDTH*state.HEIGHT-1 ||
				 state.tiles[state.locs.playerlocation+state.WIDTH].type!=='FLOOR'){
					return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
				}
				newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation+state.WIDTH]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation+state.WIDTH
				return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}




		}
	}
	return state
}