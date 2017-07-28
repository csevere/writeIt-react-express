import $ from 'jquery';



export default function(userData){
	console.log("NewBookAction")
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/newbook',
		data: userData
	})
	// Reducers get payload
	return{
		type: "NEW BOOK",
		payload: thePromise
	}
}