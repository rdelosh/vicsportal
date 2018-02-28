export function showModal(modalstate,context){
	return {
		type: 'MODALSTATE',
		payload: {modalstate:modalstate, context:context}// context.type = ADDRECIPEFORM or EDITRECIPEFORM, context.data = {recipetitle, ingredients}
	}
}
export function editRecipe(changedRecipe){
	return{
		type: 'EDITRECIPES',
		payload: {index: changedRecipe.index,title:changedRecipe.title,ingredient:changedRecipe.ingredient}
	}
}
export function selectRecipe(Recipe){
	return{
		type:'SELECTEDRECIPE',
		payload:{index: Recipe.index,title:Recipe.title, ingredient:Recipe.ingredient}
	}
}