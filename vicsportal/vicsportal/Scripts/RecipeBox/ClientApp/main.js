import React from 'react';
import ReactDOM from 'react-dom';
import ListofRecipes from './containers/listofrecipes';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';
//import Modal from './components/modal';
//import EditRecipeModal from './components/editrecipemodal';



function initializeRecipes(){
							


	var arrayofrecipes = [];
	Object.keys(localStorage).map((key,index)=>{
		arrayofrecipes.push({index:index,title:key,ingredient:localStorage[key]})
	})
	return  arrayofrecipes;
}

ReactDOM.render(
	<Provider store={createStore(reducers,{recipes:initializeRecipes()})}>
	
		<App />
	</Provider>, document.querySelector(".myapp"))


