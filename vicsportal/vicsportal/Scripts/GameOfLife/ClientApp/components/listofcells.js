import React from 'react';
import {connect} from 'react-redux';
import Cell from './cell';
import {bindActionCreators} from 'redux';
import {startGame} from '../actions/index';
import {clearGame} from '../actions/index';
import {newBoard} from '../actions/index';
import {resurrectCell} from '../actions/index';


class ListOfCells extends React.Component{
	constructor(props){
		super(props)
		this.state={
			WIDTH:this.props.cells.WIDTH,
			interval:null,
			pause:false,
			generations:0

		}
	}
	componentDidMount(){
		this.startInterval()
		
	}

	startInterval(){
		if(this.props.runningconditions){
			const frameupdate = setInterval(()=>{
				this.props.startGame()
				this.setState({generations:this.state.generations+1})
			},50)
			this.setState({interval:frameupdate}) 
		}
	}
	callbacktoresurrect(index){
		this.props.resurrectCell(index)
	}

	render(){
		return(
				<div>
					<div className="header">
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

						<button onClick={()=>{
								this.props.clearGame()
								this.props.newBoard()
						}}>Generate New Board</button>
						<p className="generations" style={{display:"inline-block"}}>Generations:{this.state.generations}</p>
					</div>
					
 
					{
						
						this.props.cells.array.map((cell,index)=>{
							if(index%this.state.WIDTH===0 &&index>=this.state.WIDTH){
								
								return (
									<span>
										<br />
										<Cell key={index} index={cell.index} deadoralive={cell.alive} resurrectCell={(index)=>{this.callbacktoresurrect(index)}}/>
									</span>)
							}
							return <Cell key={index} index={cell.index} deadoralive={cell.alive} resurrectCell={(index)=>{this.callbacktoresurrect(index)}}/>
							
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
	return bindActionCreators({startGame:startGame, clearGame:clearGame, newBoard:newBoard, resurrectCell:resurrectCell},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ListOfCells)