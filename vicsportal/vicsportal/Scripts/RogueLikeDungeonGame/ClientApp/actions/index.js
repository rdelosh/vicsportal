export function move(newlocations){
	return {
		type: 'MOVE',
		payload:{previousplayerlocation:newlocations.previousplayerlocation,
				 newplayerlocation:newlocations.newplayerlocation}

	}
}
export function updateHP(update){
	
	return{

		type:'UPDATEHP',
		payload:{movedirection:update.movedirection,gamemap:update.gamemap,collidedenemy:update.collidedenemy}
	}
}
export function killEnemy(location){
	return{
		type: 'KILL',
		payload:location
	}
}
export function heal(){
	return{
		type:'HEAL',
		payload:null
	}
}
export function toggleLights(currentplayerlocation){
	return{
		type:'TOGGLELIGHTS',
		payload:currentplayerlocation
	}
}