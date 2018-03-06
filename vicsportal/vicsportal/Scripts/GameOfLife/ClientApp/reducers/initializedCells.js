

export default function initializeCells(){
	let WIDTH=70;
	let HEIGHT=50;
	let initialarrayofcells =[]
	for(let i=0;i<WIDTH*HEIGHT;i++){
		initialarrayofcells.push({index:i,alive:generateDeaDOrAlive()})
	}
	
	return {WIDTH:WIDTH,HEIGHT:HEIGHT,array:initialarrayofcells}
}
function generateDeaDOrAlive(){
	let randomnumber = Math.random()
	
	if(randomnumber<0.5){
		return 'D';
	}else{
		return 'A';
	}
	
	
}
