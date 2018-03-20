import {initialConfig} from './initialmap'

const starter =  initialConfig.boss
console.log(starter)
export default function(state=starter, action){
	switch(action.type){
		case 'UPDATEHP':

			if(action.payload.collidedenemy===state.location){
				console.log(state)
				console.log("from bozz reducer: " +action.payload.collidedenemy)
				console.log("from bozz reducer: " +state.location)
				return {hp:state.hp-5,location:state.location}
			}
			break;
	}
	// console.log("boZZZ loc: "+state.location)
	
 	return state	
}