// A reducer tis a function that returns a piece of state
// Set the default state to []
export default function(state = [], action){
	if(action.type == "QUERYLETTER"){
		return action.payload;
	}else{
		return state;
	}
}