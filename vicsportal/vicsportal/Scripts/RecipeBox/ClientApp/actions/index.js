export function showModal(modalstate,context){
	return {
		type: 'MODALSTATE',
		payload: {modalstate:modalstate, context:context}// context.type = ADDRECIPEFORM or EDITRECIPEFORM, context.data = {recipetitle, ingredients}
	}
}
export function AddorEditRecipes(changed){
	return{
		type: 'CHANGERECIPES',
		payload: changed
	}
}
export function selectRecipe(Recipe){
	return{
		type:'SELECTEDRECIPE',
		payload:{recipetitle:Recipe.recipeTitle, ingredients:Recipe.ingredients}
	}
}