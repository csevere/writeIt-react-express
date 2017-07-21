import $ from 'jquery';



export default function(userData){
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/register',
		data: userData
	})
	// Reducers get payload
	return{
		type: "REGISTER",
		payload: thePromise
	}
}
