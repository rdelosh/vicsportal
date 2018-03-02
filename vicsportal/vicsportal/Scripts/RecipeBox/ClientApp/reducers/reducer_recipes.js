

export default function(state=null,action){
	let arrayofrecipes;
	switch(action.type){
		case 'EDITRECIPES': 
		
			
			
			console.log(state);
			console.log(action.payload);

			arrayofrecipes = Object.assign([],state)
			arrayofrecipes.splice(action.payload.index,1,action.payload);
			localStorage.clear()
			arrayofrecipes.map((recipe)=>{
				localStorage.setItem(recipe.title,recipe.ingredienjt)
			})
			return arrayofrecipes;
			break;
		
		case 'ADDRECIPE':
			arrayofrecipes = Object.assign([],state)
			arrayofrecipes.push({index:arrayofrecipes.length,title:action.payload.title,ingredient:action.payload.ingredient});
			localStorage.clear()
			arrayofrecipes.map((recipe)=>{
				localStorage.setItem(recipe.title,recipe.ingredient)
			})
			return arrayofrecipes;
			break;

		case 'DELETERECIPE':
			arrayofrecipes = Object.assign([],state)
			arrayofrecipes.splice(action.payload,1)
			localStorage.clear()
			arrayofrecipes.map((recipe)=>{
				localStorage.setItem(recipe.title,recipe.ingredient)
			})
			return arrayofrecipes;
			break;

	}


	return state







	// 	let editedrecipe = arrayofrecipes.map((recipe)=>{
	// 		if(recipe.equals(action.payload){

	// 		})
	// 	});
	// }
	// console.log(state);
	

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