function detectEnemyCollision(tiles,player,direction,WIDTH){
	//returns null if player does not collide with enemy,
	// returns enemylocation if player collides with an eenemy
	switch(direction){
		case 'ArrowLeft':
			if(player.location-1<0||tiles[player.location-1].type!='FLOOR'){
				return player.location-1
			}
			return null
			break;
		case 'ArrowRight':
			if(player.location+1<0||tiles[player.location+1].type!='FLOOR'){
				return player.location+1
			}
			return null
			break;
		case 'ArrowUp':
			if(player.location-WIDTH<0||tiles[player.location-WIDTH].type!='FLOOR'){
				return player.location-WIDTH
			}
			return null
			break;
		case 'ArrowDown':
			if(player.location+WIDTH<0||tiles[player.location+WIDTH].type!='FLOOR'){
				return player.location+WIDTH
			}
			return null
			break;

	}



	return null;
		

}
function moveHelper(tiles,player,direction,WIDTH){
	let previousplayerlocation=player.location
	let newplayerlocation=previousplayerlocation
	switch(direction){
		case 'ArrowLeft':
			previousplayerlocation=player.location;
			newplayerlocation=player.location-1
			break;
		case 'ArrowRight':
			previousplayerlocation=player.location;
			newplayerlocation=player.location+1
			break;
		case 'ArrowUp':
			previousplayerlocation=player.location;
			newplayerlocation=player.location-WIDTH
			break;
		case 'ArrowDown':
			previousplayerlocation=player.location;
			newplayerlocation=player.location+WIDTH
			break;

	}

	return { previousplayerlocation:previousplayerlocation,
			 newplayerlocation: newplayerlocation}
}

function getCollidedEnemyHP(boss,enemies,collidedEnemyLocation){
	let hp=0;
	if(collidedEnemyLocation==boss.location){
		hp= boss.hp
	}
	enemies.map((enemy,index)=>{
		if(enemy.enemylocation==collidedEnemyLocation){
			hp= enemy.hp
		}
	})
	return hp

}

export {detectEnemyCollision}
export {moveHelper}
export {getCollidedEnemyHP}