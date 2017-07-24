var express = require('express');
var router = express.Router();
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');

// include bcrpyt for hasing and checking password
var bcrypt = require('bcrypt-nodejs');
// include rand-token for generating user token
var randToken = require('rand-token')


// set up the connection with options
var connection = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});
// Actually make the connection
connection.connect();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


router.post('/register', (req, res)=>{
	console.log(req.body)
	console.log(req.body.email)

	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = bcrypt.hashSync(req.body.password);
	const occupation = req.body.occupation;
	const about = req.body.about;

	console.log(password);
	

	// We want to insert the user into 2 tables: Customers and Users.
	// Users needs the customerNumber from the Customers table.
	// Therefore, we need to insert the user into Customers first...
	// get the ID created by that insert, THEN insert the user into Users.

// First, check to see if email already exists
	const checkEmail = new Promise((resolve, reject) => {
		const checkEmailQuery = "SELECT * FROM users WHERE email = ?";
		connection.query(checkEmailQuery,[email],(error,results)=>{
			if(error) throw error;
			if(results.length > 0){
				reject({msg: "userAlreadyExists"});
			}else{
				// we dont care about results. Just that there isn't a match
				resolve();
			}
		})
	})

	checkEmail.then(
		// Customers insert query
		()=>{
			// Set up a token for this user. We will give this back to React
			var token = randToken.uid(40);
			var insertQuery = "INSERT INTO users (name, email, username, password, occupation, about, token, token_exp, account_created) VALUES (?,?,?,?,?,?,?,DATE_ADD(NOW(), INTERVAL 1 HOUR),NOW())"
			// Run the query (for now autoset the sales rep to 1337)
			connection.query(insertQuery,[name,email,username,password,occupation,about,token],(error, results)=>{
				// Users insert query
				if(error){
					throw error
					// res.json({
					// 	msg: error
					// })
				}else{
					res.json({
						msg: "userInserted",
						token: token,
						username: username,

					});
				}
			});
		}
	).catch(
		(error)=>{
			throw error
			// res.json(error)
		}
	)

})	

router.post('/login', (req, res)=>{
	var email = req.body.email;
	var password = req.body.password;
	var checkLoginQuery = `SELECT * FROM users WHERE email = ?`;
	connection.query(checkLoginQuery, [email], (error,results)=>{
		if(error) throw error;
		if(results.length === 0){
			// This email aint in the database
			res.json({
				msg: 'badUserName'
			});
		}else{
			// The username is valid. See if the password is...
			var checkHash = bcrypt.compareSync(password, results[0].password);
			// checkHash will be true or false.
			if(checkHash){
				// this is teh droid we're looking for
				// Log them in... i.e, create a token, update it, send it back
				const updateToken = `Update users SET token=?, token_exp=DATE_ADD(NOW(), INTERVAL 1 HOUR)
					WHERE email=?`
				var token = randToken.uid(40);
				connection.query(updateToken,[token,email],(error2,results2)=>{
					console.log(results)
					res.json({
						msg: 'loginSuccess',
						name: results[0].username,
						token: token
					})
				})
			}else{
				// These arent the droids were looking for.
				// You don't want to sell me death sticks.
				// You want to go home and rethink your life. Goodbye
				res.json({
					msg: 'wrongPassword'
				})
			}
		}
	})
})

router.post('/characters',(req,res)=>{
	var name = req.body.name;
	var race = req.body.race;
	var age = req.body.age
	var birthday = req.body.birthday;
	var physical_desc = req.body.physical_desc;
	var hometown = req.body.hometown;
	var type_of_home = req.body.type_of_home;
	var father_info = req.body.father_info;
	var mother_info = req.body.mother_info;
	var sibling_info = req.body.sibling_info;
	var family_position = req.body.family_position;
	var relatives = req.body.relatives;
	var fam_relationships = req.body.fam_relationships;
	var friends = req.body.friends;
	var enemies = req.body.enemies;
	var influences = req.body.influences;
	var hobbies = req.body.hobbies;
	var sports = req.body.sports;
	var food = req.body.food;
	var dress = req.body.dress;
	var religion = req.body.religion;
	var attitude_religion = req.body.attitude_religion;
	var relationship_boys = req.body.relationship_boys;
	var relationship_girls = req.body.relationship_girls;
	var leader_follower = req.body.leader_follower;
	var positive_traits = req.body.positive_traits;
	var negative_traits = req.body.negative_traits;
	var humor = req.body.humor;
	var temper = req.body.temper;
	var seen_by_others = req.body.seen_by_others;
	var opinion_of_self = req.body.opinion_of_self;
	var other_traits = req.body.other_traits;
	var ambitions = req.body.ambitions;
	var philosophy = req.body.philosophy;
	var important_points = req.body.important_points;
	var liked_disliked = req.body.liked_disliked;

	var characterQuery = `SELECT * FROM characters WHERE username = ? and name = ?`;
	var insertCharacterQuery = `INSERT INTO characters 
		(name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,family_position,
		relatives,fam_relationships,friends,enemies,influences,hobbies,sports,food,dress,religion,attitude_religion,attitude_religion,relationship_boys,
		relationship_girls,leader_follower,positive_traits,negative_traits,humor,temper,seen_by_others,opinion_of_self,other_traits,ambitions,philosophy,
		important_points,liked_disliked) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
	connection.query(characterQuery, [username,name], (error,results)=>{
		if(error) throw error;
		if(results.length === 0){
			connection.query(insertCharacterQuery, [name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,family_position,
				relatives,fam_relationships,friends,enemies,influences,hobbies,sports,food,dress,religion,attitude_religion,attitude_religion,relationship_boys,
				relationship_girls,leader_follower,positive_traits,negative_traits,humor,temper,seen_by_others,opinion_of_self,other_traits,ambitions,philosophy,
				important_points,liked_disliked], (error2,results2)=>{
					if(error2) throw error2;
					var characterArray = [name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,family_position,
					relatives,fam_relationships,friends,enemies,influences,hobbies,sports,food,dress,religion,attitude_religion,attitude_religion,relationship_boys,
					relationship_girls,leader_follower,positive_traits,negative_traits,humor,temper,seen_by_others,opinion_of_self,other_traits,ambitions,philosophy,
					important_points,liked_disliked]
					res.json({
						msg:'characterInserted',
						characterData: characterArray
					})
			})
		}else{
			var updateCharacterQuery = `UPDATE characters SET
				(name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,family_position,
				relatives,fam_relationships,friends,enemies,influences,hobbies,sports,food,dress,religion,attitude_religion,attitude_religion,relationship_boys,
				relationship_girls,leader_follower,positive_traits,negative_traits,humor,temper,seen_by_others,opinion_of_self,other_traits,ambitions,philosophy,
				important_points,liked_disliked) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
			connection.query(insertCharacterQuery, [name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,family_position,
				relatives,fam_relationships,friends,enemies,influences,hobbies,sports,food,dress,religion,attitude_religion,attitude_religion,relationship_boys,
				relationship_girls,leader_follower,positive_traits,negative_traits,humor,temper,seen_by_others,opinion_of_self,other_traits,ambitions,philosophy,
				important_points,liked_disliked], (error3,results3)=>{
					if(error3) throw error3;
					var characterArray = [name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,family_position,
					relatives,fam_relationships,friends,enemies,influences,hobbies,sports,food,dress,religion,attitude_religion,attitude_religion,relationship_boys,
					relationship_girls,leader_follower,positive_traits,negative_traits,humor,temper,seen_by_others,opinion_of_self,other_traits,ambitions,philosophy,
					important_points,liked_disliked]
					res.json({
						msg:'characterUpdated',
						characterData: characterArray
					})
			})
		}
	})

})
















































