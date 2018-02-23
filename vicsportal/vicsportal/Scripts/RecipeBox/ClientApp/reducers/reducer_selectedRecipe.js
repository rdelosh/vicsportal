export default function(state=false, action){
	
	switch(action.type){
		case 'SELECTEDRECIPE': 
			// console.log(action);		
		return action.payload;
	}

	return state;
}