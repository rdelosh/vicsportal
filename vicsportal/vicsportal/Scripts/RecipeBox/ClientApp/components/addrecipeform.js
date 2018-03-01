import React from 'react';

 class addrecipeform extends React.Component{
 	constructor(props){
 		super(props)
 		this.addRecipe=props.addRecipe
 		this.state={
 			title:'',
 			ingredient:''
 		}
 	}


 	render(){
 		 	return (
 		<div>
 				<h2>Add Recipe</h2>
				<textarea placeholder="Enter Recipe Title" onChange={(event)=>{this.setState({title:event.target.value})}}></textarea>
				<h2>Ingredients</h2>
				<textarea placeholder="Enter ingredients" onChange={(event)=>{this.setState({ingredient:event.target.value})}}></textarea>
				<button onClick={()=>{
					
					
					this.addRecipe({title:this.state.title,ingredient:this.state.ingredient})
						
						// localStorage.setItem(this.state.currentRecipe,this.state.currentIngredients);
						
						
					
					
				}}>Add Recipe</button>		
 		</div>
 		)
 	}

 	

	

}
export default addrecipeform;	
	