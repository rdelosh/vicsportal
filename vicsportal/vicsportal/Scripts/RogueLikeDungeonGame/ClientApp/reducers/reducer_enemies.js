import {initialConfig} from './initialmap'
let starter = initialConfig.enemies
// console.log(starter)
export default function(state =starter, action){
	switch(action.type){
		case 'UPDATEHP':
		let newstate = Object.assign([],state)

		

			state.map((enemy,index)=>{
				if(enemy.enemylocation===action.payload.collidedenemy){
					// console.log(newstate[index])
					newstate[index].hp=newstate[index].hp-action.payload.player.weapondamage

				}
			})
			return newstate
			break;



	}

	return state
}