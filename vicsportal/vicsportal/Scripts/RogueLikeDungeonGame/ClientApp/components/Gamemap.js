import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tile from './tile';
import {move} from '../actions/index';
import {updateHP} from '../actions/index';
import {detectCollision} from '../sharedfunctions/helperfunctions'


class Gamemap extends React.Component{
	constructor(props){
		super(props)
		
		// this.state={
		// 	walls:null
		// }
		// this.walls=[]	
		window.focus()
		document.addEventListener('keydown',(event)=>{
			// if(detectCollision())
			console.log(event.key)
			this.props.updateHP({movedirection:event.key,gamemap:this.props.gamemap})
			this.moveCommand(event)
			
		})
		
	}
	// addWall(index){
	// 	this.walls.push(index+",")
	// 	this.setState(
	// 		{walls:this.walls})
	// 	// this.walls.push(index)
	// 	console.log(this.state.walls)
		
	// }
	componentWillUpdate(){
		if(this.props.player.hp<=0){
			console.log('GAME OVER')
		}
	}
	moveCommand(event){
		if(event.key==='ArrowLeft'){
			this.props.move('left')
		}
		else if(event.key==='ArrowRight'){
			this.props.move('right')
		}
		else if(event.key==='ArrowUp'){
			this.props.move('up')
		}else if(event.key==='ArrowDown'){
			this.props.move('down')
		}
	}

	
	render(){
		return(
			<div style={{
				minWidth:"1200px"
			}}>
				
					
					<p>HP: {this.props.player.hp}</p>
					{
					this.props.gamemap.tiles.map((tile,index)=>{
						if(index%70===0){
							return (
								<span>
									<br />	
									<Tile index={index} tile={tile} />
								</span>
								
								)
						}
						return (

			
								<Tile index={index} tile={tile} />
							
							)
					})
				}
				
			</div>
			)
	}
}


function mapStateToProps(state){
	return {
		gamemap:state.gamemap,
		player:state.player,
		enemies:state.enemies

	}

}
function mapDispatchToProps(dispatch){
	return bindActionCreators({move:move,updateHP:updateHP},dispatch)
	
}
export default connect(mapStateToProps
	,mapDispatchToProps
	)(Gamemap)