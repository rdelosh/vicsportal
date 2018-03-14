export default function(state =100, action){
	switch (action.type){
		case 'UPDATEHP':
			//testing moving to the left
			console.log(action)
			switch(action.payload.movedirection){
				case 'ArrowLeft':
					if(action.payload.gamemap.tiles[action.payload.gamemap.locs.playerlocation-1].type==='BOSS'){
						return state-5;
					}				
				case 'ArrowRight':
					if(action.payload.gamemap.tiles[action.payload.gamemap.locs.playerlocation+1].type==='BOSS'){
						return state-5;
					}
				case 'ArrowUp':
					if(action.payload.gamemap.tiles[action.payload.gamemap.locs.playerlocation-action.payload.gamemap.WIDTH].type==='BOSS'){
						return state-5;
					}
				case 'ArrowDown':
					if(action.payload.gamemap.tiles[action.payload.gamemap.locs.playerlocation+action.payload.gamemap.WIDTH].type==='BOSS'){
						return state-5;
					}
			}

			
	}
	return state;
}