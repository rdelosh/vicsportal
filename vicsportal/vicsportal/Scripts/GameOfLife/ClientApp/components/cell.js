import React from 'react';

class Cell extends React.Component{

	constructor(props){
		super(props)
		this.state={
			alive:props.deadoralive
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({alive:nextProps.deadoralive})
	}
	render(){
		return (

			<div style={
				{display:'inline-block',
				 margin: 0
				}
			}>
				{
					this.state.alive
				}
			</div>
			)
	}
}
export default Cell