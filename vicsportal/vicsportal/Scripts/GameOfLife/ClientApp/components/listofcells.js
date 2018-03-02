import React from 'react';
import {connect} from 'react-redux';
import Cell from './cell'
class ListOfCells extends React.Component{
	constructor(props){
		super(props)
		this.state={
			WIDTH:this.props.cells.WIDTH
		}
	}
	render(){
		return(
				<div>
					{
						
						this.props.cells.array.map((cell,index)=>{
							if(index%this.state.WIDTH===0 &&index>=this.state.WIDTH){
								console.log(this.state.WIDTH +"<-WIDTH -- index-->"+index)
								return (
									<span>
										<br />
										<Cell />
									</span>)
							}
							return <Cell />
					})}
				</div>
			)
	}
}

function mapStateToProps(state){
	return {
		cells: state.cells
	}
}

export default connect(mapStateToProps)(ListOfCells)