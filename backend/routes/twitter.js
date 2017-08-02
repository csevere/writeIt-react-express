// module.exports = require('./node_modules/twitter-node-client/lib/Twitter');


// var express = require('express'); 
// var app = express(); 
// var bodyParser = require('body-parser');
// var Twitter = require('twitter-node-client').Twitter 
// var config = require('../config/config');
// var router = require('./router')


// //Callback functions
// // setting success and error callbacks that are used when getting a response from Twitter’s servers after making a request
// var error = function (err, response, body) {
//     console.log('ERROR [%s]', JSON.stringify((err));
// };
// var success = function (data) {
//     console.log('Data [%s]', data);
// };


//  // tweetUrl = `https://twitter.com/status/${data[0].id_str}`;



// // var config = {
// // 	"consumer_key": "config.consumer_key",
// // 	"consumer_secret": "config.consumer_secret",
// // 	"access_token_key": "config.access_token_key",
// // 	"access_token_secret": "config.access_token_secret"

// // }



// app.use(bodyParser.json());  //support for JSON-encoded bodies
// app.use(bodyParser.urlencoded({   //support for URL-encoded bodies
// 	extended: true
// }));

// app.use(express.static('public'));


// //post to retrieve user data
// app.post('/twitter/user', (req, res)=>{
// 	var username = req.body.username;
// 	var data = twitter.getUser({screen_name: username}, function(error, response, body){
// 		res.status(404).send({
// 			"error": "User Not Found"
// 		});


// 	}, (data)=>{
// 		res.send({
// 			result: {
// 				"userData": data
// 			}
// 		});

// 	});

// });


// //new instance
// // var tweet = []; 
// var twitter = new Twitter({
// 	consumer_key: config.consumer_key,
// 	consumer_secret: config.consumer_secret,
// 	access_token_key: configt.access_token_key,
// 	access_token_secret: config.access_token_secret

// });

// console.log("i'm here")

// var params = {
// 	screen_name: screen_name,
// 	result_type: 'recent',
// 	lang: 'en',
// 	include_rts: "true"
// }

// twitter.getUserTimeline(params, function( error, data, response){
// 	 console.log(data)
//    if(!error){
//         tweetUrl = 'https://twitter.com/status/CWritewell';
//         // console.log(tweet);
//         var options = {
// 			url: tweetUrl,
// 			lang:"en",
// 			theme:"dark",
// 			link_color:"#2B7BB9",
// 			hide_media:"true",
// 			include_rts: "false",
//      	}
//     }

// }



// twitter.getUserTimeline({ params, count: '10'}, function(error, data, response){
// 	if(!err){
// 		tweetUrl = `https://twitter.com/status/writeit_now`
// 		console.log(tweet)
// 		var options = {
// 			url: tweetUrl,
// 			lang: "en",
// 			theme: "light",
// 			link_color: "cyan",
// 			hide_media: "true",
// 			include_rts: "true"
// 		}
// 	}


// }






//Example calls
// twitter.getMentionsTimeline({ count: '10'}, error, success);

// twitter.getHomeTimeline({ count: '10'}, error, success);

// twitter.getReTweetsOfMe({ count: '10'}, error, success);

// twitter.getTweet({ id: '1111111111'}, error, success);


// twitter.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });

// twitter.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {

// 	if(error){
// 	  	//res.json(data)
// 	  	tweetUrl = `http://twitter.com/statuses/user_timeline.xml?id=joelcomm&page=3`};
  
//   console.log(tweet);  // Tweet body. 
//   console.log(response);  // Raw response object. 
// }); 


// twitter.get(path,params, callback);
// twitter.post(path, params, callback);
// twitter.stream(path, params, callback);




