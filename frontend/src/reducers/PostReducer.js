export default function(state = [], action){
	if(action.type == "POST"){
		return action.payload;
	}else{
		return state;
	}
}