import React from 'react';

class RecipeItem extends React.Component{
	constructor(props){
		super(props);
		this.state={
			callbackfunction:props.callbackfunction	
		}
	
	}
	render(){
		return (
				<div>

					<ul>
						{
							Object.keys(localStorage).map((key)=>{
								console.log(key+"#"+localStorage[key])
								return (<li key={key}
									style={
											{	
												backgroundColor:"yellow",
												marginBottom:"30px"

										}} onClick={this.state.callbackfunction}

								>{key}</li>)
								
							})
						}
					</ul>
				</div>

				
			);
	}
}
export default RecipeItem;