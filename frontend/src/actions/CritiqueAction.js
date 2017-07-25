import $ from 'jquery';



export default function(userData){
	console.log("CritiqueAction")
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/critique',
		data: userData
	})
	// Reducers get payload
	return{
		type: "CRITIQUE",
		payload: thePromise
	}
}
