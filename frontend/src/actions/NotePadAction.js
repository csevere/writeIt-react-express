import $ from 'jquery';



export default function(userData){
    console.log("NotePadAction")
    var thePromise = $.ajax({
        method: "POST",
        url: window.hostAddress + '/notepad',
        data: userData
    })
    // Reducers get payload
    return{
        type: "NOTEPAD",
        payload: thePromise
    }
}/**
 * Created by mephisto on 7/29/17.
 */
