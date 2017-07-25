import $ from 'jquery';



export default function(userData){
	console.log("SynopsisAction")
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/synopsis',
		data: userData
	})
	// Reducers get payload
	return{
		type: "SYNOPSIS",
		payload: thePromise
	}
}
