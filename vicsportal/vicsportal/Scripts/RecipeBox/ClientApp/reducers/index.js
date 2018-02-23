import {combineReducers} from 'redux';
import recipesReducer from './reducer_recipes';
import modalstateReducer from './reducer_modalstate';
import selectedRecipeReducer from './reducer_selectedRecipe';

const rootReducer = combineReducers({
	recipes: recipesReducer,
	modalstate: modalstateReducer,
	selectedRecipe: selectedRecipeReducer
});

export default rootReducer;