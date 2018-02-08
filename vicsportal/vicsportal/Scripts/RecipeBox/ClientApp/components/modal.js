import React from 'react';

const Modal = (props) =>{

	var modalstate = props.modalstate;
	var callbackfunction = props.callbackfunction;
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
	
		console.log(modalstate);
		//console.log(getmodalstyle)
		return(


				<div className="mymodal" styles={()=>{
					{console.log(visiblemodal)}
					if (modalstate){
						return visiblemodal;
					}
					return (invisiblemodal);

				}}>

						<h2>Recipe</h2>
						<input type="text"></input>
						<h2>Ingredients</h2>
						<textarea></textarea>
						<button onClick={callbackfunction}>close modal</button>
				</div>

			)
	
}
	
export default Modal;