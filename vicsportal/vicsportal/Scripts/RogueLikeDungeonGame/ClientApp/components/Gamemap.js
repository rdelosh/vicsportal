import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Tile from './tile';

class Gamemap extends React.Component{
	constructor(props){
		super(props)
		
		// this.state={
		// 	walls:null
		// }
		// this.walls=[]	
	}
	// addWall(index){
	// 	this.walls.push(index+",")
	// 	this.setState(
	// 		{walls:this.walls})
	// 	// this.walls.push(index)
	// 	console.log(this.state.walls)
		
	// }
	render(){
		return(
			<div style={{
				minWidth:"1200px"
			}}>
				

					
					{
					this.props.gamemap.map((tile,index)=>{
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
		gamemap:state.gamemap
	}

}
// function mapDispatchToProps(dispatch){
// 	return{
// 		bindActionCreators({},dispatch)
// 	}
// }
export default connect(mapStateToProps
	// ,mapDispatchToProps
	)(Gamemap)