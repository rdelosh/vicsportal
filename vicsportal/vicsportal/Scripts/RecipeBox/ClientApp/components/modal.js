import React from 'react';
import ReactDOM from 'react-dom';
import AddRecipeForm from './addrecipeform';
import EditRecipe from './edit_recipeform';
import { connect } from 'react-redux';



class Modal extends React.Component{
	constructor(props){
		super(props)
		
		this.modalstate=false;
		this.context=null;
	}
	
	componentWillReceiveProps(nextProps){
		this.selectedRecipe = nextProps.selectedRecipe
		this.modalstate=nextProps.modalstate.modalstate
		this.closemodal=nextProps.closemodal
		this.context = nextProps.modalstate.context

		if(this.modalstate){
				this.modalTarget = document.createElement('div');
				this.modalTarget.className = 'modal';
				document.body.appendChild(this.modalTarget);
				this._render();	
		}
		else{
			this.componentWillUnmount()
		}
	}
	
	
	componentWillUpdate(){

		this._render();
	}
	componentWillUnmount(){
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild(this.modalTarget)
	}

	
	_render(){

		if(this.modalstate){

			ReactDOM.render(
					<div className='modalcontainer'>
						{this.props.children}
						{(this.context==='CONTEXT_ADDRECIPE') && <AddRecipeForm />}
						{this.context==='EDIT_RECIPE' && <EditRecipe selectedRecipe={this.selectedRecipe} />}
						

						<button onClick={this.closemodal}>close modal</button>
					</div>, this.modalTarget

				);	
	}
			
	

		
	}

	
	render(){
		return <noscript />
	}
	
}


export default (Modal);