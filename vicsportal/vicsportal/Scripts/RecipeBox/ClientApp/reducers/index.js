import {combineReducers} from 'redux';
import recipesReducer from './reducer_recipes';
import modalstateReducer from './reducer_modalstate';

const rootReducer = combineReducers({
	recipes: recipesReducer,
	modalstate: modalstateReducer
});

export default rootReducer;