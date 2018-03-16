export default function(state =100, action){
	switch (action.type){
		case 'UPDATEHP':
			//testing moving to the left
			console.log(action)
			let playerlocation =action.payload.gamemap.locs.playerlocation;
			let tiles = action.payload.gamemap.tiles
			let WIDTH = action.payload.gamemap.WIDTH
			switch(action.payload.movedirection){
				case 'ArrowLeft':
					
					if(tiles[playerlocation-1].type==='BOSS'){
						return state-5;
					}
					break;
				case 'ArrowRight':

					if(tiles[playerlocation+1].type==='BOSS'){
						return state-5;
					}
					break;
				case 'ArrowUp':
					if(tiles[playerlocation-WIDTH].type==='BOSS'){
						return state-5;
					}
					break;
				case 'ArrowDown':

					if(tiles[playerlocation+WIDTH].type==='BOSS'){
						return state-5;
					}
					break;
			}

			
	}
	return state;
}