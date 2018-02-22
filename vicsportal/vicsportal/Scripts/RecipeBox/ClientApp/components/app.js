import React from 'react';
import ReactDOM from 'react-dom';
import ListofRecipes from '../containers/listofrecipes';
import Modal from './modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../actions/index';
import AddRecipeForm from './addrecipeform';

class RecipeBox extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			context:{
				addrecipeform:false
			}
		}
		
	}
	closemodal(){
		this.props.showModal(false)
	}
	render(){
		return(
			<div id="mymodal">
				<Modal  modalstate={this.props.modalstate} closemodal={()=>{this.closemodal()}} >


				</Modal>

				<ListofRecipes />
				<button onClick={()=>{
					this.setState({context:{addrecipeform:true}});

					this.props.showModal(true)

				}}>Add recipe</button>
			</div>
		)
	}
}


function mapStateToProps(state){
	return{
		modalstate:state.modalstate
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({showModal: showModal}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);