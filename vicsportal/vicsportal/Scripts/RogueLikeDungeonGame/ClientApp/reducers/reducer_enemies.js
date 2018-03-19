import {initialConfig} from './initialmap'
let starter = initialConfig.enemies
// console.log(starter)
export default function(state =starter, action){
	switch(action.type){
		case 'KILLENEMY':
				console.log(state)
				break;	
		
		
	}
	return state
}