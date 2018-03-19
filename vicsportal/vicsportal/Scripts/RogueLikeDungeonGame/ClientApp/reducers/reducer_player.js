import {initialConfig} from './initialmap'

const starter = initialConfig.player

export default function(state =starter, action){
	// console.log(state)
	switch (action.type){
		case 'UPDATEHP':
			//testing moving to the left
			 console.log(action)
			let playerlocation =action.payload.gamemap.locs.playerlocation;
			let tiles = action.payload.gamemap.tiles
			let WIDTH = action.payload.gamemap.WIDTH
			console.log(action)
			switch(action.payload.movedirection){
				case 'ArrowLeft':
					console.log(state)
					if(tiles[playerlocation-1].type==='BOSS'||tiles[playerlocation-1].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation}
					}
					break;
				case 'ArrowRight':

					if(tiles[playerlocation+1].type==='BOSS'||tiles[playerlocation+1].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation}
					}
					break;
				case 'ArrowUp':
					if(tiles[playerlocation-WIDTH].type==='BOSS'||tiles[playerlocation-WIDTH].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation}
					}
					break;
				case 'ArrowDown':

					if(tiles[playerlocation+WIDTH].type==='BOSS'||tiles[playerlocation+WIDTH].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation}
					}
					break;
			}

			
	}
	return state;
}