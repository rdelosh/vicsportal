import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../actions/index';
import { selectRecipe } from '../actions/index';

class RecipeItem extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			
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
								marginBottom:"30px",
								cursor:"pointer"

						}} 
					
					onClick={
						()=>{
							this.props.showModal(true,'EDIT_RECIPE')
							this.props.selectRecipe({recipeTitle:this.state.Recipe,ingredients:this.state.Ingredient})
							console.log(this.props.selectedRecipe)
						}}
					>

					<h1>{this.state.Recipe}</h1>
					<p>{this.state.Ingredient}</p>
				</div>

				
			);
	}
}
function mapStateToProps(state){
	return{
		modalstate:state.modalstate,
		selectedRecipe:state.selectedRecipe


	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({showModal: showModal, selectRecipe: selectRecipe}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeItem);