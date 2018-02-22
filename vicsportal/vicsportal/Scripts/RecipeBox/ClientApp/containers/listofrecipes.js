import React from 'react';
import RecipeItem from '../components/recipeitem';
import { connect } from 'react-redux';
// import { showModal } from '../actions/index';
// import { bindActionCreators } from 'redux';


class ListofRecipes extends React.Component{

	render(){
		return(

				<div>
					{
							this.props.recipes.map((recipe)=>{
								
								return (
									<RecipeItem key={recipe.title} Recipe={recipe.title} Ingredient={recipe.Ingredient} 
									></RecipeItem>)
								
							})
						}	
					
					
				</div>
			);
	}
}

function mapStateToProps(state){
	return{
		recipes:state.recipes
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({showModal: showModal}, dispatch)
// }


export default connect(mapStateToProps)(ListofRecipes);