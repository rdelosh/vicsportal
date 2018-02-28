export default function(state=null,action){
	switch(action.type){
		case 'EDITRECIPES': 
		
		// let arrayofrecipes=state
		let arrayofrecipes= Object.assign([],state)
		console.log(state);
		console.log(action.payload);
		

		arrayofrecipes.splice(action.payload.index,1,action.payload);
		return arrayofrecipes;
	}
	// 	let editedrecipe = arrayofrecipes.map((recipe)=>{
	// 		if(recipe.equals(action.payload){

	// 		})
	// 	});
	// }
	// console.log(state);
	return state

	 // localStorage.clear()
// localStorage.setItem("pizza","flour, tomato, pepperoni")
// localStorage.setItem("spaghetti","pasta,tomato, meat")
	

	//console.log(localStorage);


	// var arrayofrecipes = [];
	// Object.keys(localStorage).map((key)=>{
	// 	arrayofrecipes.push({title:key,ingredient:localStorage[key]})
	// })
	
	// return  state;



	// return [{title:"piza",ingredient:"flour, tomato, pepperoni"},
	// 		{title:"spaghetti",ingredient:"pasta,tomato, meat"}]								
}