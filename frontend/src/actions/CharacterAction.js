import $ from 'jquery';



export default function(userData){
	console.log("CharacterAction")
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/characters',
		data: userData
	})
	// Reducers get payload
	return{
		type: "CHARACTER",
		payload: thePromise
	}
}
