
import React from 'react';

 class editrecipeform extends React.Component{
 	constructor(props){
 		super(props)
 		this.state={
 			selectedRecipe:props.selectedRecipe,
 			editRecipe:props.editRecipe 			
 		}
 	}
 	componentWillReceiveProps(nextProps){
 		this.setState({selectedRecipe:nextProps.selectedRecipe})

 	}
 	render(){
 		return (
	 		<div>
	 				<h2>Edit Recipe</h2>
					<textarea defaultValue={this.state.selectedRecipe.title} onChange={(event)=>{this.state.selectedRecipe.title=event.target.value}}></textarea>
					<h2>Ingredients</h2>
					<textarea defaultValue={this.state.selectedRecipe.ingredient} onChange={(event)=>{this.state.selectedRecipe.ingredient=event.target.value}}></textarea>
					<button onClick={()=>{
						
						this.state.editRecipe({index:this.state.selectedRecipe.index,title:this.state.selectedRecipe.title,ingredient:this.state.selectedRecipe.ingredient})
							// console.log(this.state.selectedRecipe)

						
							
							//localStorage.setItem(this.state.selectedRecipe,this.state.currentIngredients);
							
							
						
						
					}}>Add Recipe</button>		
	 		</div>
 		)
 	}
 }


export default editrecipeform;	