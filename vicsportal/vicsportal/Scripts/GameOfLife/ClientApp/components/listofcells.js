import React from 'react';
import {connect} from 'react-redux';
import Cell from './cell';
import {bindActionCreators} from 'redux';
import {startGame} from '../actions/index';
import {clearGame} from '../actions/index';


class ListOfCells extends React.Component{
	constructor(props){
		super(props)
		this.state={
			WIDTH:this.props.cells.WIDTH,
			interval:null,
			pause:false

		}
	}
	componentDidMount(){
		this.startInterval()
		
	}

	startInterval(){
		if(this.props.runningconditions){
			const frameupdate = setInterval(()=>{this.props.startGame()},50)
			this.setState({interval:frameupdate}) 
		}
	}


	render(){
		return(
				<div>
					<div>
						<button onClick={()=>{
								if(this.state.pause){
									this.startInterval()
								}else if(!this.state.pause){
									clearInterval(this.state.interval)
								}
								this.setState({pause:!this.state.pause})	
							}
						}>

						{
							this.state.pause?"START":"STOP"
						}
						</button>
						<button onClick={()=>{
								this.props.clearGame()
						}}>CLEAR GAME</button>
					</div>
					
 
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
	return bindActionCreators({startGame:startGame, clearGame:clearGame},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOfCells)