import React from 'react';

class Tile extends React.Component{
	// determinerow(){
	// 	if(this.props.index/70=)
	// }
	constructor(props){
		super(props)
		this.tilewidth="12px"
		this.tileheight="12px"
		this.state={
			tile:this.props.tile
		}
		// this.currentwalls=null
	}
	determineX(){
		if(this.props.index)
		return this.props.index*30
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			tile:nextProps.tile
		})
	}
	componentDidUpdate(){
		// console.log(this.props.index)
	}
	shouldComponentUpdate(nextProps,nextState){
		// console.log(nextProps.tile ==this.state.tile)
		return nextProps.tile !==this.state.tile
		// if(this.props.index===1673){
		// console.log(nextProps.tile)
		// console.log(this.state.tile)	
		// }
		// return true
		
	}
	render(){
		return (
				<div style={
					{
                        margin: "0",
						border:"1px solid black",
						display:"inline-block",
						width:"13px",
                        height: "13px",
                        overflow:"auto"
						
						
					}
				} width="13px" height="13px" className={this.props.tile.type}
				onClick={()=>{

					// this.props.addWall(this.props.index)
					// this.props.tile.type="WALL"
					console.log({index:this.props.index,type:this.props.tile.type})
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