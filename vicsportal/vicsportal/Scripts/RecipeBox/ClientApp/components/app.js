import React from 'react';
import ReactDOM from 'react-dom';
import ListofRecipes from '../containers/listofrecipes';
import Modal from './modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../actions/index';



class RecipeBox extends React.Component{
	// constructor(props){
	// 	super(props)
	// 	this.state = {
	// 		context:{
	// 			addrecipeform:false
	// 		}
	// 	}
		
	// }
	closemodal(){
		this.props.showModal(false,null)
	}
	render(){
		return(
			<div id="mymodal">
			{console.log(this.props.modalstate)}
				<Modal  modalstate={this.props.modalstate} closemodal={()=>{this.closemodal()}} >

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
		modalstate:state.modalstate
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({showModal: showModal}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RecipeBox);