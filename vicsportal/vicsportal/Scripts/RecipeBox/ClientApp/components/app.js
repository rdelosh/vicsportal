import React from 'react';
import ReactDOM from 'react-dom';
import ListofRecipes from '../containers/listofrecipes';
import Modal from './modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../actions/index';
import { editRecipe } from '../actions/index';
import { addRecipe } from '../actions/index';
import {deleteRecipe} from '../actions/index';


class RecipeBox extends React.Component{

	closemodal(){
		this.props.showModal(false,null)
	}

	render(){
		return(
			<div id="mymodal">

				<Modal  deleteRecipe={this.props.deleteRecipe} addRecipe={this.props.addRecipe} editRecipe={this.props.editRecipe} selectedRecipe={this.props.selectedRecipe} modalstate={this.props.modalstate} closemodal={()=>{this.closemodal()}} >

				</Modal>

				<ListofRecipes />
				<button onClick={()=>{
					

					this.props.showModal(true,'CONTEXT_ADDRECIPE')

				}}>Add recipe</button>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		modalstate:state.modalstate,
		selectedRecipe:state.selectedRecipe
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({showModal: showModal, editRecipe: editRecipe, addRecipe:addRecipe, deleteRecipe:deleteRecipe}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(RecipeBox);