import React from 'react';

class RecipeItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			callbackfunction:props.callbackfunction,
			Recipe:props.Recipe,
			Ingredient:props.Ingredient
		}
	
	}
	render(){
		return (
				<div 
					style={
							{	
								backgroundColor:"yellow",
								marginBottom:"30px"

						}} 
					onClick={this.state.callbackfunction}>

					<h1>{this.state.Recipe}</h1>
					<p>{this.state.Ingredient}</p>
				</div>

				
			);
	}
}
export default RecipeItem;