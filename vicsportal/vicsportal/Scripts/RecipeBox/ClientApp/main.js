import React from 'react';
import ReactDOM from 'react-dom';
import ListofRecipes from './components/listofrecipes';
import Modal from './components/modal';


class RecipeBox extends React.Component{
	constructor(props){
		super(props);
		this.state={
			modalstate:false
		}
	}

	showRecipeModal(){
		console.log("trollala");
		this.setState({modalstate:!this.state.modalstate});
	}

	render() {
	        return (
	            <div>

	                <Modal modalstate={this.state.modalstate} callbackfunction={()=>this.showRecipeModal()}></Modal>
	                <ListofRecipes callbackfunction={()=>this.showRecipeModal()}></ListofRecipes>
	                <button onClick={()=>this.showRecipeModal()}>Add Recipe</button>
	            </div>
	        );    
	    }
	    
	    
	}

ReactDOM.render(<RecipeBox />, document.querySelector(".myapp"));
