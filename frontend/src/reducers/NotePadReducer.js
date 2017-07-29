/**
 * Created by mephisto on 7/29/17.
 */
export default function(state = [], action){
    if(action.type == "NOTEPAD"){
        return action.payload;
    }else{
        return state;
    }
}