import React from 'react';
import ReactDOM from 'react-dom'

class Modal extends React.Component{
	constructor(props){
		super(props)
		this.modalstate=false;
	}
	
	componentWillReceiveProps(nextProps){
		this.modalstate=nextProps.modalstate
		this.closemodal=nextProps.closemodal
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
					<button onClick={this.closemodal}>close modal</button>
				</div>, this.modalTarget

			);	
	}
			
	

		
	}

	
	render(){
		return <noscript />
	}
	
}
	
export default Modal;