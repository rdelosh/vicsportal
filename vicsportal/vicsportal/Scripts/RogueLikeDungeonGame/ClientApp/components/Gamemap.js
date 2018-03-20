import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tile from './tile';
import {move} from '../actions/index';
import {updateHP} from '../actions/index';
import {killEnemy} from '../actions/index';
import {detectEnemyCollision} from '../sharedfunctions/helperfunctions'//detectCollision(tiles,player,direction){
import {moveHelper} from '../sharedfunctions/helperfunctions' //moveHelper(tiles,player,direction,WIDTH){
import {getCollidedEnemyHP} from '../sharedfunctions/helperfunctions' //getCollidedEnemyHP(boss,enemies,collidedEnemyLocation){


class Gamemap extends React.Component{
	constructor(props){
		super(props)
		
		// this.state={
		// 	walls:null
		// }
		// this.walls=[]	
		window.focus()
		document.addEventListener('keydown',(event)=>{
			// console.log(this.player)
			let collidedenemy = detectEnemyCollision(this.props.gamemap.tiles,this.props.player,event.key,this.props.gamemap.WIDTH)

			if(collidedenemy!=null){
				// console.log("getCollidedEnemyHP:"+getCollidedEnemyHP(this.props.boss,this.props.enemies,collidedenemy))
				if(getCollidedEnemyHP(this.props.boss,this.props.enemies,collidedenemy)<=0){
					this.props.killEnemy(collidedenemy)
				}
				// console.log(this.props.enemies)



				this.props.updateHP({movedirection:event.key,gamemap:this.props.gamemap,collidedenemy:collidedenemy})
			}else{
				console.log("else MOVE!!")
				this.props.move(moveHelper(this.props.gamemap.tiles,this.props.player,event.key,this.props.gamemap.WIDTH))
			}
			console.log("collided enemy: "+ collidedenemy)
			// if(collidedenemy!=null){
			// 	update hp for player
			// 	update hp for collidedenemy
			// }
				

			
			// console.log(event.key)
			// this.props.updateHP({movedirection:event.key,gamemap:this.props.gamemap})
			// this.moveCommand(event)
			
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
		enemies:state.enemies,
		boss:state.boss

	}

}
function mapDispatchToProps(dispatch){
	return bindActionCreators({move:move,updateHP:updateHP,killEnemy:killEnemy},dispatch)
	
}
export default connect(mapStateToProps
	,mapDispatchToProps
	)(Gamemap)