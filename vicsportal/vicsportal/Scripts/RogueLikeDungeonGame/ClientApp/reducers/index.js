import {combineReducers} from 'redux';
import mapReducer from './reducer_gamemap';
import playerReducer from './reducer_player';
import enemiesReducer from './reducer_enemies';
import bossReducer from './reducer_boss';

const rootReducer = combineReducers({
	gamemap: mapReducer,
	player: playerReducer,
	enemies: enemiesReducer,
	boss:bossReducer

})
export default rootReducer