import React from 'react';

class Cell extends React.Component{

	constructor(props){
		super(props)
		this.state={
			alive:false
		}
	}
	render(){
		return (

			<div style={
				{display:'inline-block',
				 margin: 0
				}
			}>
				o
			</div>
			)
	}
}
export default Cell