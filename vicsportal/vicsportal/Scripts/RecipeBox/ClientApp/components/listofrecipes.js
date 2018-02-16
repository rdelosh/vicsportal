import React from 'react';
import RecipeItem from './recipeitem';

class ListofRecipes extends React.Component{
	constructor(props){
		super(props);
		this.state={
			callbackfunction:props.callbackfunction	
		}
		
	}
	render(){
		return(

				<div>


					<RecipeItem callbackfunction={this.state.callbackfunction}></RecipeItem>
					
				</div>
			);
	}
}

export default ListofRecipes;