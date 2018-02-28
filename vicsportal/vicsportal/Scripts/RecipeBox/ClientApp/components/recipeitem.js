import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from '../actions/index';
import { selectRecipe } from '../actions/index';

class RecipeItem extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			
			recipe:props.recipe,
			ingredient:props.ingredient,
			index:props.index
		}
	
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			recipe:nextProps.recipe,
			ingredient:nextProps.ingredient,
			index:nextProps.index
		})
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
							console.log(this.state)
							this.props.showModal(true,'EDIT_RECIPE')
							this.props.selectRecipe({index: this.state.index, title:this.state.recipe,ingredient:this.state.ingredient})
							// console.log(this.props.selectedRecipe)
						}}
					>

					<h1>{this.state.recipe}</h1>
					<p>{this.state.ingredient}</p>
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