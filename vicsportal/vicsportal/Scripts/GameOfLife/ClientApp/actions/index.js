export function startGame(){
	return {
		type:'START',
		payload:true
	}
}
export function updateFrame(){
	return{
		type:'UPDATE',
		payload:true
	}
}
export function clearGame(){
	return{
		type:'CLEAR',
		payload:null
	}
}
export function newBoard(){
	return{
		type:'NEWBOARD',
		payload:null
	}
}
export function resurrectCell(index){

	return{
		type:'RESURRECT',
		payload:index
	}
}