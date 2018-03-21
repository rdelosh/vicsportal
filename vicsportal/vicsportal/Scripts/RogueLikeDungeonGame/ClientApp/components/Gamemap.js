import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tile from './tile';
import {move} from '../actions/index';
import {updateHP} from '../actions/index';
import {killEnemy} from '../actions/index';
import {heal} from '../actions/index';
import {toggleLights} from '../actions/index';
import {pickUpWeapon} from '../actions/index';
import {detectEnemyCollision} from '../sharedfunctions/helperfunctions'//detectCollision(tiles,player,direction){
import {moveHelper} from '../sharedfunctions/helperfunctions' //moveHelper(tiles,player,direction,WIDTH){
import {getCollidedEnemyHP} from '../sharedfunctions/helperfunctions' //getCollidedEnemyHP(boss,enemies,collidedEnemyLocation){


class Gamemap extends React.Component{
	constructor(props){
		super(props)
	
		window.focus()
		document.addEventListener('keydown',(event)=>{
			
			let collidedenemy = detectEnemyCollision(this.props.gamemap.tiles,this.props.player,event.key,this.props.gamemap.WIDTH)
			if(collidedenemy!=null){
				if(getCollidedEnemyHP(this.props.boss,this.props.enemies,collidedenemy)<=0&&this.props.gamemap.tiles[collidedenemy].type!='WALL'){
					console.log(this.props.gamemap.tiles[collidedenemy].type)
					if(this.props.gamemap.tiles[collidedenemy].type=='POTION'){
						this.props.heal()
					}
					if(this.props.gamemap.tiles[collidedenemy].type='WEAPON'){
						this.props.pickUpWeapon()
					}

					this.props.killEnemy(collidedenemy)

				}
				this.props.updateHP({movedirection:event.key,gamemap:this.props.gamemap,collidedenemy:collidedenemy,player:this.props.player})
			}else{
				// console.log("else MOVE!!")
				this.props.move(moveHelper(this.props.gamemap.tiles,this.props.player,event.key,this.props.gamemap.WIDTH))
			}
			// console.log("collided enemy: "+ collidedenemy)

			
		})
		
	}
	
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
        return (
        	<div>
            <div>
                <p>HP: {this.props.player.hp}/{this.props.player.maxhp} Experience:{this.props.player.exp}
                    Level: {this.props.player.level} Weapon Damage: {this.props.player.weapondamage}
                </p>


                <button onClick={() => {
                    this.props.toggleLights(this.props.player.location)
                }}>ToggleLights</button>
            </div>
                
			<div style={{
                    minWidth: "1200px"
			}}>
				
					
					
					{
					this.props.gamemap.visiblemap.map((tile,index)=>{
						if(index%70===0){
							return (
								<span>
									<br />	
									<Tile index={index} tile={tile} />
								</span>
								
								)
						}
						return <Tile index={index} tile={tile} />
					})
				}
				
			</div>

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
	return bindActionCreators({move:move,updateHP:updateHP,killEnemy:killEnemy,heal:heal,
								pickUpWeapon:pickUpWeapon, toggleLights:toggleLights},dispatch)
	
}
export default connect(mapStateToProps
	,mapDispatchToProps
	)(Gamemap)