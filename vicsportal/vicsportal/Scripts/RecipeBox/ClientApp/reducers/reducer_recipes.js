export default function(){
	var arrayofrecipes = [];
	Object.keys(localStorage).map((key)=>{
		arrayofrecipes.push({title:key,Ingredient:localStorage[key]})
	})
	return  arrayofrecipes;
	

	// return [{title:"piza",ingredient:"flour, tomato, pepperoni"},
	// 		{title:"spaghetti",ingredient:"pasta,tomato, meat"}]								
}