import {combineReducers} from 'redux';
import cellsReducer from './reducer_cells';


const rootReducer = combineReducers({
	cells: cellsReducer
});

export default rootReducer;