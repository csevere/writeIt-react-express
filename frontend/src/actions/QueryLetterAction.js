import $ from 'jquery';



export default function(userData){
	console.log("QueryLetterAction")
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/queryletter',
		data: userData
	})
	// Reducers get payload
	return{
		type: "QUERYLETTER",
		payload: thePromise
	}
}