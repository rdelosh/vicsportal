export function showModal(modalstate,context){
	return {
		type: 'MODALSTATE',
		payload: {modalstate:modalstate, context:context}
	}
}