import initialMap from './initialmap';


let starter = initialMap()

export default function(state = starter, action){


	switch(action.type){
		case 'MOVE':
		let newtiles = Object.assign([],state.tiles)
		let newlocs = Object.assign({},state.locs)
		let WIDTH = Object.assign(state.WIDTH)
		let HEIGHT = Object.assign(state.HEIGHT)
		console.log(state)
		switch(action.payload){
			case 'left':
				newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation-1]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation-1
			return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
			case 'right':
			newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation+1]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation+1	
			return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
			
			case 'up':
				
				newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation-state.WIDTH]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation-state.WIDTH
			return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}
			case 'down':
				newtiles[state.locs.playerlocation]={type:'FLOOR'}
				newtiles[state.locs.playerlocation+state.WIDTH]={type:'PLAYER'}
				newlocs.playerlocation=state.locs.playerlocation+state.WIDTH
				return {tiles:newtiles, locs:newlocs,WIDTH:WIDTH,HEIGHT:HEIGHT}




		}
	}
	return state
}