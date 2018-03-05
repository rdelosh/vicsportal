import React from 'react';
import {connect} from 'react-redux';
import Cell from './cell';
import {bindActionCreators} from 'redux';
import {startGame} from '../actions/index';


class ListOfCells extends React.Component{
	constructor(props){
		super(props)
		this.state={
			WIDTH:this.props.cells.WIDTH
		}
	}
	componentDidMount(){
		if(this.props.runningconditions){
			const frameupdate = setInterval(()=>{this.props.startGame()},50)
		}
		
	}
	render(){
		return(
				<div>
					{
						
						this.props.cells.array.map((cell,index)=>{
							if(index%this.state.WIDTH===0 &&index>=this.state.WIDTH){
								
								return (
									<span>
										<br />
										<Cell key={index} deadoralive={cell.alive}/>
									</span>)
							}
							return <Cell key={index} deadoralive={cell.alive}/>
							
					})

					}
					<button onClick={()=>{this.props.startGame()}}>click me</button>
				</div>
			)
	}
}

function mapStateToProps(state){
	return {
		cells: state.cells,
		runningconditions: state.runningconditions

	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({startGame:startGame},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOfCells)