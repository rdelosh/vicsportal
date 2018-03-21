import {initialConfig} from './initialmap'

const starter = initialConfig.player

export default function(state =starter, action){
	 console.log(state)
	switch (action.type){
		case 'PICKUPWEAPON':
		console.log("PICKUPWEAPON")
			return {hp: state.hp, location:state.location,
				weapondamage:state.weapondamage+5, maxhp:state.maxhp,level:state.level,exp:state.exp}
		case 'MOVE':
			return {hp: state.hp, location:action.payload.newplayerlocation,
				weapondamage:state.weapondamage, maxhp:state.maxhp,level:state.level,exp:state.exp}
			break;
		case 'UPDATEHP':
			//testing moving to the left
			 // console.log(action)
			 // console.log
			let playerlocation =state.location;
			let tiles = action.payload.gamemap.tiles
			let WIDTH = action.payload.gamemap.WIDTH

			// console.log(action)
			switch(action.payload.movedirection){
				case 'ArrowLeft':
					
					//console.log(tiles)
					if(tiles[playerlocation-1].type==='BOSS'||tiles[playerlocation-1].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation,
							weapondamage:state.weapondamage, maxhp:state.maxhp,level:state.level,exp:state.exp}
					}
					break;
				case 'ArrowRight':

					if(tiles[playerlocation+1].type==='BOSS'||tiles[playerlocation+1].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation,
							weapondamage:state.weapondamage, maxhp:state.maxhp,level:state.level,exp:state.exp}
					}
					break;
				case 'ArrowUp':
					if(tiles[playerlocation-WIDTH].type==='BOSS'||tiles[playerlocation-WIDTH].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation,
								weapondamage:state.weapondamage, maxhp:state.maxhp,level:state.level,exp:state.exp}
					}
					break;
				case 'ArrowDown':

					if(tiles[playerlocation+WIDTH].type==='BOSS'||tiles[playerlocation+WIDTH].type==='ENEMY'){
						return {hp:state.hp-5,location:playerlocation,
							weapondamage:state.weapondamage, maxhp:state.maxhp,level:state.level,exp:state.exp}
					}
					break;
			}
			break;
		case 'HEAL':
			return {hp:state.maxhp,location:state.location,weapondamage:state.weapondamage, maxhp:state.maxhp,level:state.level,exp:state.exp}
			break;
		case 'KILL':
			let newlevel = state.level
			let newweapondamage=state.weapondamage
			let newmaxhp=state.maxhp
			let newhp = state.hp
			let newexp=state.exp+15
				if(newexp>=100){
					newlevel=newlevel+1
					newexp= newexp-100
					newweapondamage=newweapondamage+5
					newmaxhp = newmaxhp+20
				}
			return {hp:newhp,location:state.location,weapondamage:newweapondamage, maxhp:newmaxhp,level:newlevel,exp:newexp}
			
	}
	return state;
}