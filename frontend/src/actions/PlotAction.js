import $ from 'jquery';



export default function(userData){
	console.log("PlotAction")
	var thePromise = $.ajax({
		method: "POST",
		url: window.hostAddress + '/plot',
		data: userData
	})
	// Reducers get payload
	return{
		type: "PLOT",
		payload: thePromise
	}
}
