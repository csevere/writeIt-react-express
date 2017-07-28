var express = require('express'); 
var twitter = require ('twitter');
var config = require('../config/config');
var routes = require('./routes')



var config = {
	consumer_key: config.consumer_key,
	consumer_secret: config.consumer_secret,
	access_token_key: config.access_token_key,
	access_token_secret: config.access_token_secret

}

var twitter = new Twitter({config});

var params ={

}

// client.get(path,params, callback);
// client.post(path, params, callback);
// client.stream(path, params, callback);

twitter.get('favorites/list', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweets);  // The favorites. 
  console.log(response);  // Raw response object. 
});

twitter.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {

	if(error){
	  	//res.json(data)
	  	tweetUrl = `http://twitter.com/statuses/user_timeline.xml?id=joelcomm&page=3`};
  
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
}); 




