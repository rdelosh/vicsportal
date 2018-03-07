import {combineReducers} from 'redux';
import mapReducer from './reducer_gamemap'

const rootReducer = combineReducers({
	gamemap: mapReducer
})
export default rootReducer