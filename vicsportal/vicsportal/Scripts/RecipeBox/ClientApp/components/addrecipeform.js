import React from 'react';

 const addrecipeform = () =>{
 	return (
 		<div>
 				<h2>Add Recipe</h2>
				<textarea placeholder="Enter Recipe Title"></textarea>
				<h2>Ingredients</h2>
				<textarea placeholder="Enter ingredients"></textarea>
				<button onClick={()=>{
					

					
						
						// localStorage.setItem(this.state.currentRecipe,this.state.currentIngredients);
						
						
					
					
				}}>Add Recipe</button>		
 		</div>
 		)
	

}
export default addrecipeform;	
	