
import React from 'react';

 class editrecipeform extends React.Component{
 	constructor(props){
 		super(props)
 		this.state={
 			selectedRecipe:props.selectedRecipe
 		}
 	}
 	componentWillReceiveProps(nextProps){
 		this.setState({selectedRecipe:nextProps.selectedRecipe})

 	}
 	render(){
 		return (
	 		<div>
	 				<h2>Edit Recipe</h2>
					<textarea defaultValue={this.state.selectedRecipe.recipetitle}></textarea>
					<h2>Ingredients</h2>
					<textarea defaultValue={this.state.selectedRecipe.ingredients}></textarea>
					<button onClick={()=>{
							

						
							
							//localStorage.setItem(this.state.selectedRecipe,this.state.currentIngredients);
							
							
						
						
					}}>Add Recipe</button>		
	 		</div>
 		)
 	}
 }


export default editrecipeform;	