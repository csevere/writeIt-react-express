export default function(state = [], action){
	if(action.type == "LOGIN"){
		return action.payload;
	}else{
		return state;
	}
}