import {combineReducers} from 'redux';
import mapReducer from './reducer_gamemap';
import hpReducer from './reducer_hp';

const rootReducer = combineReducers({
	gamemap: mapReducer,
	hp: hpReducer

})
export default rootReducer