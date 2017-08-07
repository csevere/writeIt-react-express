import $ from 'jquery';

export default function(userData){
    console.log("PostAction")
    var thePromise = $.ajax({
        method: "POST",
        url: window.hostAddress + '/contempform',
        data: userData
    })
    // Reducers get payload
    return{
        type: "POST",
        payload: thePromise
    }
}

