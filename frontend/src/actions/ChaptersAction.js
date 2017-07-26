import $ from 'jquery';



export default function(userData){
	console.log("ChapterAction")
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/chapters',
		data: userData
	})
	// Reducers get payload
	return{
		type: "CHAPTERS",
		payload: thePromise
	}
}