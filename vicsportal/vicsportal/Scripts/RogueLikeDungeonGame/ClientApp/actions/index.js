export function move(direction){
	return {
		type: 'MOVE',
		payload:direction

	}
}
export function updateHP(update){
	return{
		type:'UPDATEHP',
		payload:{movedirection:update.movedirection,gamemap:update.gamemap}
	}
}
