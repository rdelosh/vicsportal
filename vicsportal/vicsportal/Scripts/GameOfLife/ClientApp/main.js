import React from 'react';
import ReactDOM from 'react-dom';
// import ListofRecipes from './containers/listofrecipes';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';
//import Modal from './components/modal';
//import EditRecipeModal from './components/editrecipemodal';


function initializeCells(){
	let WIDTH=70;
	let HEIGHT=50;
	let initialarrayofcells =[]
	for(let i=0;i<WIDTH*HEIGHT;i++){
		initialarrayofcells.push({index:i,alive:generateDeaDOrAlive()})
	}
	// console.log(initialarrayofcells);
	return {WIDTH:WIDTH,HEIGHT:HEIGHT,array:initialarrayofcells}
}
function generateDeaDOrAlive(){
	let randomnumber = Math.random()
	// console.log(randomnumber)
	if(randomnumber<0.5){
		return 'D';
	}else{
		return 'A';
	}
	
	
}


ReactDOM.render(
	<Provider store={createStore(reducers,{cells:initializeCells()})}>
	
		<App />
	</Provider>
	, document.querySelector(".myapp"))
	


