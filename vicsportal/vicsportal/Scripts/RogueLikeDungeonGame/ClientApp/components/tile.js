import React from 'react';

class Tile extends React.Component{
	// determinerow(){
	// 	if(this.props.index/70=)
	// }
	constructor(props){
		super(props)
		this.tilewidth="12px"
		this.tileheight="12px"
		// this.currentwalls=null
	}
	determineX(){
		if(this.props.index)
		return this.props.index*30
	}
	
	render(){
		return (
				<div style={
					{
						
						border:"1px solid black",
						display:"inline-block",
						width:"13px",
						height:"13px",
						
						
					}
				} width="13px" height="13px" className={this.props.tile.type}
				onClick={()=>{

					this.props.addWall(this.props.index)
					this.props.tile.type="WALL"
					// console.log(this.props.addWall(this.props.index))
					// console.log(this.props.tile.type)
				}}></div>


	 		// <rect  x={(this.props.index%70)*this.tilewidth} y={Math.floor(this.props.index/70)*this.tileheight} 
	 		// width={this.tilewidth} height={this.tileheight} stroke="blue" 
	 		// fill="transparent"
	 		// onClick={()=>{console.log("lola")}}/>	

				
			)
		

	}
}
export default Tile