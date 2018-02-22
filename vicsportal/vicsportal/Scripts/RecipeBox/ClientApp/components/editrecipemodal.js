import React from 'react';

class EditRecipeModal extends React.Component{
	constructor(props){
		//localStorage.clear();
		super(props);
		console.log(props);
		this.state={
			modalstate:props.modalstate,
			callbackfunction:props.callbackfunction,
			currentRecipe: '',
			currentIngredients:''
			

		}
	}
	componentWillReceiveProps(nextprops){

		this.setState({
			modalstate:nextprops.modalstate
			
		})
	}

	determinemodal(){
		
			var invisiblemodal={
				display:'none', /* Hidden by default */
			    position: 'fixed', /* Stay in place */
			    zIndex: '1', /* Sit on top */
			    paddingTop: '100px', /* Location of the box */
			    left: '0',
			    top: '0',
			    width: '100%', /* Full width */
			    height: '100%', /* Full height */
			    overflow: 'auto', /* Enable scroll if needed */
			    backgroundColor: 'rgb(0,0,0)', /* Fallback color */
			    backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
			}

		var visiblemodal={
				display:'block', /* Hidden by default */
			    position: 'fixed', /* Stay in place */
			    zIndex: '1', /* Sit on top */
			    paddingTop: '100px', /* Location of the box */
			    left: '0',
			    top: '0',
			    width: '100%', /* Full width */
			    height: '100%', /* Full height */
			    overflow: 'auto', /* Enable scroll if needed */
			    backgroundColor: 'rgb(0,0,0)', /* Fallback color */
			    backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
			   
			}
			
			if(this.state.modalstate){
				console.log("vis")
				return visiblemodal;
			}else{
				console.log("invis")
				return invisiblemodal;
			}
			
	}

	
	render(){
		return(
				<div className="mymodal" style={
					this.determinemodal()

				}>
						<div style={
							{
								marginLeft:'25%',
								marginRight:'25%',
								padding:'0 5% 2% 5%',
								borderRadius:'10%',
								border:'2px solid #000',
								backgroundColor:'#fff'
							}
						}>
							<h2>Edit Recipe</h2>
							<textarea></textarea>
							<h2>Ingredients</h2>
							<textarea placeholder="Enter ingredients" onChange={
								(event)=>{this.setState({"currentIngredients":event.target.value})}}></textarea>
							<button onClick={()=>{
								//console.log()

								if(this.state.currentRecipe!==""){
									
									localStorage.setItem(this.state.currentRecipe,this.state.currentIngredients);
									
									//localStorage.setItem(this.state.currentRecipe,this.state.currentIngredients);	
								}
								
							}}>Add Recipe</button>
							<button onClick={this.state.callbackfunction}>close modal</button>
							<button onClick={console.log(localStorage)}>view localstorage</button>
						</div>
				</div>
			);
	}
	
}
	
export default EditRecipeModal;