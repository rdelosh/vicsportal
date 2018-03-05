import {combineReducers} from 'redux';
import cellsReducer from './reducer_cells';
import runningconditionsReducer from './reducer_runningconditions';


const rootReducer = combineReducers({
	cells: cellsReducer,
	runningconditions: runningconditionsReducer
});

export default rootReducer;