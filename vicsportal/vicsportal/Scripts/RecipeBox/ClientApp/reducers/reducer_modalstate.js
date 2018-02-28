export default function(state = false, action){
	
	switch(action.type){
		case 'MODALSTATE': return action.payload;
	}
	
	return state;
}