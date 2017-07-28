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

///////////////////////////////////////////////////////////////////
///////////////////////////GET REQUESTS////////////////////////////
///////////////////////////////////////////////////////////////////

router.get('/charboard/get', (req, res)=>{
	const selectCharacterQuery = `SELECT * FROM characters`
	connection.query(selectCharacterQuery,(error, results, fields)=>{
		if(error){
			throw error
		}else{
			res.json(results);
		}
	});
});

router.get('/pboard/get', (req, res)=>{
	// res.json({msg:"test"})
	const selectPlotQuery = `SELECT * FROM plot`
	connection.query(selectPlotQuery,(error,results,fields)=>{
		if(error){
			throw error
		}else{
			res.json(results);
		}
	})
});


///////////////////////////////////////////////////////////////////
//////////////////////////POST REQUESTS////////////////////////////
///////////////////////////////////////////////////////////////////




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

router.post('/newbook',(req,res)=>{
	console.log(req.body);
	
	var username = req.body.username;
	var title = req.body.title;
    var genre = req.body.genre;
    var word_count = req.body.word_count;

    var insertNewBookQuery = `INSERT INTO book
    (username,title,genre,word_count) VALUES (?,?,?,?)`;
    connection.query(insertNewBookQuery, [username,title,genre,word_count], (error,results)=>{
    	if(error) throw error;
    	res.json({
    		msg: "newBookInserted",
    		newBookData: {
    			username,
    			title,
    			genre,
    			word_count
    		}
    	})
    })

})



router.post('/characters',(req,res)=>{
	console.log("HELLO");
	console.log(req);
	// console.log(req.body.book);
	var username = req.body.username;
	var book = req.body.book;
	var name = req.body.name;
	var race = req.body.race;
	var age = req.body.age;
	var birthday = req.body.birthday;
	var physical_desc = req.body.physical_desc;
	var hometown = req.body.hometown;
	var type_of_home = req.body.type_of_home;
	var father_info = req.body.father_info;
	var mother_info = req.body.mother_info;
	var sibling_info = req.body.sibling_info;
	var relatives = req.body.relatives;
	var friends = req.body.friends;
	var enemies = req.body.enemies;
	var mentor = req.body.mentor;
	var hobbies = req.body.hobbies;
	var dress = req.body.dress;
	var leader_follower = req.body.leader_follower;
	var positive_traits = req.body.positive_traits;
	var negative_traits = req.body.negative_traits;
	var temper = req.body.temper;
	var star_sign = req.body.star_sign;
	var personality = req.body.personality;
	var philosophy = req.body.philosophy;
	var ambitions = req.body.ambitions;
	var liked_disliked = req.body.liked_disliked;


	var characterQuery = `SELECT * FROM characters WHERE username = ? and book = ?`;
	var insertCharacterQuery = `INSERT INTO characters 
		(username,book,name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,
		relatives,friends,enemies,mentor,hobbies,dress,leader_follower,positive_traits,negative_traits,temper,star_sign,personality,philosophy,ambitions,
		liked_disliked,time_stamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, NOW())`;
	connection.query(characterQuery, [username,name], (error,results)=>{
		if(error) throw error;
		if(results.length === 0){
			connection.query(insertCharacterQuery, [username,book,name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,
				relatives,friends,enemies,mentor,hobbies,dress,leader_follower,positive_traits,negative_traits,temper,star_sign,personality,philosophy,ambitions,
				liked_disliked], (error2,results2)=>{
					if(error2) throw error2;
					var characterArray = [book,name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,
					relatives,friends,enemies,mentor,hobbies,dress,leader_follower,positive_traits,negative_traits,temper,star_sign,personality,philosophy,ambitions,
					liked_disliked]
					res.json({
						msg:'characterInserted',
						characterData: characterArray
					})
				})

		}else{
			var updateCharacterQuery = `UPDATE characters SET
				name = '${name}',race = '${race}',age = '${age}',birthday = '${birthday}',physical_desc = '${physical_desc}',hometown = '${hometown}',type_of_home = '${type_of_home}',father_info = '${father_info}',mother_info = '${mother_info}',sibling_info = '${sibling_info}',
				relatives = '${relatives}',friends = '${friends}',enemies = '${enemies}',mentor = '${mentor}',hobbies = '${hobbies}',dress = '${dress}',leader_follower = '${leader_follower}',positive_traits = '${positive_traits}',negative_traits = '${negative_traits}',temper = '${temper}',star_sign = '${star_sign}',personality = '${personality}',philosophy = '${philosophy}',ambitions = '${ambitions}',
				liked_disliked = '${liked_disliked}',time_stamp = NOW() WHERE username = '${username}' AND book = '${book}'`;
			connection.query(updateCharacterQuery, (error3,results3)=>{
					var characterArray = [name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,
					relatives,friends,enemies,mentor,hobbies,dress,leader_follower,positive_traits,negative_traits,temper,star_sign,personality,philosophy,ambitions,
					liked_disliked]
					// console.log(characterArray);
					if(error3) throw error3;
					res.json({
						msg:'characterUpdated',
						characterData: characterArray
					})
					
			})
		}
	})

});

router.post('/plot',(req,res)=>{
	console.log("PLOT REQUEST")
 
	var username = req.body.username;
 	var main_plot = req.body.main_plot;
	var subplot = req.body.subplot;
	var subplot_reasons = req.body.subplot_reasons;
	var direct_actions = req.body.direct_actions;
	var indirect_actions = req.body.indirect_actions;
	var motivation = req.body.motivation;
	var plot_type = req.body.lot_type;
	var plot_order = req.body.plot_order;
	var foreshadow = req.body.foreshadow;
	var credibility = req.body.credibility;
	var flashbacks = req.body.flashbacks;
	var journey = req.body.journey;
	var stakes = req.body.stakes;
	var antagonist = req.body.antagonist;
	var summary = req.body.summary;
 
    console.log(req.body)
 
    var plotQuery = `SELECT * FROM plot WHERE username = ? and main_plot = ?`;
 	var insertPlotQuery = `INSERT INTO plot 
 		(username,main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
 		credibility,flashbacks,journey,stakes,antagonist,summary,time_stamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())`;
 		connection.query(plotQuery, [username,main_plot], (error,results)=>{
 			if(error) throw error;
 			if(results.length === 0){
 				connection.query(insertPlotQuery, [username, main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
 				credibility,flashbacks,journey,stakes,antagonist,summary],(error2,results2)=>{
 						if(error2) throw error2;
 						var plotArray = [main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
 						credibility,flashbacks,journey,stakes,antagonist,summary]
 						res.json({
 							msg:'plotInserted',
 							plotData: plotArray
 						})
 				})
 			}else{
 				var updatePlotQuery = `UPDATE plot SET
 					main_plot = '${main_plot}',subplot = '${subplot}',subplot_reasons = '${subplot_reasons}',direct_actions = '${direct_actions}',indirect_actions = '${indirect_actions}',motivation = '${motivation}',plot_type = '${plot_type}',plot_order = '${plot_order}',foreshadow = '${foreshadow}',
 					credibility = '${credibility}',flashbacks = '${flashbacks}',journey = '${journey}',stakes = '${stakes}',antagonist = '${antagonist}',summary = '${summary}',time_stamp = NOW() WHERE username = '${username}' AND main_plot = '${main_plot}';`;
 				connection.query(updatePlotQuery,(error3,results3)=>{
 					if(error3) throw error3;
 					var plotArray = [main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
 					credibility,flashbacks,journey,stakes,antagonist,summary]
 					res.json({
 							msg:'plotUpdated',
 							plotData: plotArray
 						})
 				})
 			}
 		})
  
 })

router.post('/chapters', (req,res)=>{
    console.log(res);
    var scene_number = req.body.scene_number;
    var scene_plot = req.body.scene_plot;
    var scene_char1 = req.body.scene_char1;
    var scene_dialogue = req.body.scene_dialogue;
    var scene_conflict = req.body.scene_conflict;
    var relevant_dialogue = req.body.relevant_dialogue;
    var char_thought = req.body.char_thought;
    var pov_nar = req.body.pov;
    var pov_char= req.body.pov_char;
    var setting = req.body.setting;
    var setting_char = req.body.setting_char;
    var setting_plot = req.body.setting_plot;
    var setting_rev = req.body.setting_rev;
    var scene_mood = req.body.scene_mood;
    var scene_char2 = req.body.scene_char2;
    var username = req.body.username;
    console.log(req.body);
    var chapterQuery = `SELECT * FROM chapters WHERE username = ? AND scene_number = ?`;
    var insertChapterQuery = `INSERT INTO chapters
        (scene_number,scene_plot,scene_char1,scene_dialogue,scene_conflict,relevant_dialogue,char_thought,pov_nar,pov_char,setting,setting_char,
        setting_plot,setting_rev,scene_mood,scene_char2,username) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
        connection.query(chapterQuery,[username, scene_number],(error,results)=>{
            if(error) throw error;
            if(results.length === 0){
                console.log('insert');
                connection.query(insertChapterQuery, [scene_number,scene_plot,scene_char1,scene_dialogue,scene_conflict,relevant_dialogue,char_thought,pov_nar,pov_char,setting,setting_char,
                setting_plot,setting_rev,scene_mood,scene_char2,username],(error2,results2)=>{
                        if(error2) throw error2;
                        var chapterArray = [scene_number,scene_plot,scene_char1,scene_dialogue,scene_conflict,relevant_dialogue,char_thought,pov_nar,pov_char,setting,setting_char,
                        setting_plot,setting_rev,scene_mood,scene_char2];
                        res.json({
                            msg:'chapterInserted',
                            chapterData: chapterArray
                        })
                })
            }else{
                var updatePlotQuery = `UPDATE chapters SET
                    scene_number='${scene_number}',scene_plot='${scene_plot}',scene_char1='${scene_char1}',scene_dialogue='${scene_dialogue}',scene_conflict='${scene_conflict}',relevant_dialogue='${relevant_dialogue}',char_thought='${char_thought}',pov_nar='${pov_nar}',pov_char='${pov_nar}',setting='${setting}',setting_char='${setting_char}',
                    setting_plot='${setting_plot}',setting_rev='${setting_plot}',scene_mood='${scene_mood}',scene_char2='${scene_char2}' WHERE username = '${username}' AND scene_number='${scene_number}';`;
                connection.query(updatePlotQuery,(error3,results3)=>{
                    console.log('update')
                    if(error3) throw error3;
                    var chapterArray = [scene_number,scene_plot,scene_char1,scene_dialogue,scene_conflict,relevant_dialogue,char_thought,pov_nar,pov_char,setting,setting_char,
                        setting_plot,setting_rev,scene_mood,scene_char2];
                    res.json({
                        msg:'chapterInserted',
                        chapterData: chapterArray
                    })
                })
            }
        })
});

router.post('/critique', (req,res)=>{
    console.log(req.body);

    var critique_clarity = req.body.critique_clarity;
    var critique_boring = req.body.critique_boring;
    var critique_balance = req.body.critique_balance;
    var critique_advance = req.body.critique_advance;
    var critique_resolve = req.body.critique_resolve;
    var critique_voice = req.body.critique_voice;
    var critique_action = req.body.critique_action;
    var critique_personality = req.body.critique_personality;
    var critique_romance = req.body.critique_romance;
    var critique_conflict = req.body.critique_conflict;
    var critique_limit = req.body.critique_limit;
    var critique_pov = req.body.critique_pov;
    var critique_sent = req.body.critique_sent;
    var critique_lang = req.body.critique_lang;
    var critique_element = req.body.critique_element;
    var username = req.body.username;

    console.log(req.body);
    var critiqueQuery = `SELECT * FROM critique WHERE username = ? AND critique_clarity = ?`;
    var insertCritiqueQuery = `INSERT INTO critique
        (critique_clarity, critique_boring, critique_balance, critique_advance, critique_resolve, critique_voice,
        critique_action, critique_personality, critique_romance, critique_conflict, critique_limit, critique_pov,
        critique_sent, critique_lang, critique_element, username) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
    connection.query(critiqueQuery,[username, critique_clarity],(error,results)=>{
        if(error) throw error;
        if(results.length === 0){
            console.log('insert');
            connection.query(insertCritiqueQuery, [critique_clarity, critique_boring, critique_balance, critique_advance, critique_resolve, critique_voice,
                critique_action, critique_personality, critique_romance, critique_conflict, critique_limit, critique_pov,
                critique_sent, critique_lang, critique_element, username],(error2,results2)=>{
                if(error2) throw error2;
                var critiqueArray = [critique_clarity, critique_boring, critique_balance, critique_advance, critique_resolve, critique_voice,
                    critique_action, critique_personality, critique_romance, critique_conflict, critique_limit, critique_pov,
                    critique_sent, critique_lang, critique_element];
                res.json({
                    msg:'critiqueInserted',
                    critiqueData: critiqueArray
                })
            })
        }else{
            var updateCritiqueQuery = `UPDATE critique SET
                    critique_clarity='${critique_clarity}', critique_boring='${critique_boring}', critique_balance='${critique_balance}', critique_advance='${critique_advance}', critique_resolve='${critique_resolve}', critique_voice='${critique_voice}',
                    critique_action='${critique_action}', critique_personality='${critique_personality}', critique_romance='${critique_romance}', critique_conflict='${critique_conflict}', critique_limit='${critique_limit}', critique_pov='${critique_pov}',
                    critique_sent='${critique_sent}', critique_lang='${critique_lang}', critique_element='${critique_element}' WHERE username='${username}' AND critique_clarity='${critique_clarity}';`;
            connection.query(updateCritiqueQuery,(error3,results3)=>{
                console.log('update')
                if(error3) throw error3;
                var critiqueArray = [critique_clarity, critique_boring, critique_balance, critique_advance, critique_resolve, critique_voice,
                    critique_action, critique_personality, critique_romance, critique_conflict, critique_limit, critique_pov,
                    critique_sent, critique_lang, critique_element];
                res.json({
                    msg:'critiqueInserted',
                    critiqueData: critiqueArray
                })
            })
        }
    })
});

router.post('/synopsis',(req,res)=>{
   console.log(req.body);
   var synop_beg1 = req.body.synop_beg1;
   var synop_prot = req.body.synop_prot;
   var synop_prob = req.body.synop_prob;
   var synop_char = req.body.synop_char;
   var synop_change1 = req.body.synop_change1;
   var synop_reader = req.body.synop_reader;
   var synop_impact = req.body.synop_impact;
   var synop_change2 = req.body.synop_change2;
   var synop_rel_start = req.body.synop_rel_start;
   var synop_test = req.body.synop_test;
   var synop_rel_conflict = req.body.synop_rel_conflict;
   var synop_rel_end = req.body.synop_rel_end;
   var synop_issue = req.body.synop_issue;
   var synop_theme = req.body.synop_theme;
   var synop_message = req.body.synop_message;

   var username = req.body.username;

   var synopsisQuery = `SELECT * FROM synopsis WHERE username = ? AND synop_beg1 = ?`;
   var insertSynopsisQuery = `INSERT INTO synopsis
    	(synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
    	synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message,username) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

	connection.query(synopsisQuery,[username,synop_beg1],(error,results)=>{
	    if(error) throw error;
	    if(results.length === 0){
	        console.log('insertSynopsis');
	        connection.query(insertSynopsisQuery, [synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
			synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message,username],(error2,results2)=>{
	            if(error2) throw error2;
	            console.log("SynopsisQuery")
	            var synopsisArray = [synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
				synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message];
	            res.json({
	                msg:'synopsisInserted',
	                synopsisData: synopsisArray
	            })
	        })

        }else{
            var updateSynopsisQuery = `UPDATE synopsis SET
                    synop_beg1='${synop_beg1}', synop_prot='${synop_prot}', synop_prob='${synop_prob}', synop_char='${synop_char}', synop_change1='${synop_change1}', synop_reader='${synop_reader}',
                    synop_impact='${synop_impact}', synop_change2='${synop_change2}', synop_rel_start='${synop_rel_start}', synop_test='${synop_test}', synop_rel_conflict='${synop_rel_conflict}', synop_rel_end='${synop_rel_end}',
                    synop_issue='${synop_issue}', synop_theme='${synop_theme}', synop_message='${synop_message}' WHERE username='${username}' AND synop_beg1='${synop_beg1}';`;
            connection.query(updateSynopsisQuery,(error3,results3)=>{
                console.log('update')
                if(error3) throw error3;
                var synopsisArray = [synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
    			synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message];
                res.json({
                    msg:'synopsisInserted',
                    synopsisData: synopsisArray
                })
            })
        }

	})
});

router.post('/queryletter', (req,res)=>{
	console.log(req.body)

	var query_clarity = req.body.query_clarity;
    var query_boring = req.body.query_boring;
    var query_balance = req.body.query_balance;
    var query_stakes = req.body.query_stakes;
    var query_advance = req.body.query_advance;
    var query_resolve = req.body.query_resolve;
    var query_voice = req.body.query_voice;
    var query_action = req.body.query_action;
    var query_personality = req.body.query_personality;
    var query_romance = req.body.query_romance;
    var username = req.body.username;

    var queryLetterQuery = `SELECT * FROM query_letter WHERE username = ? AND query_clarity = ?`;
   	var insertQueryLetterQuery = `INSERT INTO query_letter
    	(query_clarity,query_boring,query_balance,query_stakes,query_advance,query_resolve,query_voice,
    	query_action,query_personality,query_romance,username) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

    connection.query(queryLetterQuery,[username,query_clarity],(error,results)=>{
        if(error) throw error;
        if(results.length === 0){
            console.log('q-letter-insert');
            connection.query(insertQueryLetterQuery, [query_clarity,query_boring,query_balance,query_stakes,query_advance,query_resolve,query_voice,
    		query_action,query_personality,query_romance,username],(error2,results2)=>{
                if(error2) throw error2;
                var queryLetterArray = [query_clarity,query_boring,query_balance,query_stakes,query_advance,query_resolve,query_voice,
    			query_action,query_personality,query_romance];
                res.json({
                    msg:'queryLetterInserted',
                    queryLetterData: queryLetterArray
                })
            })
        }else{
            var updateQueryLetterQuery = `UPDATE query_letter SET
                query_clarity='${query_clarity}', query_boring='${query_boring}', query_balance='${query_balance}', query_stakes='${query_stakes}', query_advance='${query_advance}',
                query_resolve='${query_resolve}', query_voice='${query_voice}', query_action='${query_action}', query_personality='${query_personality}', query_romance='${query_romance}' WHERE username='${username}' AND query_clarity='${query_clarity}';`;
            connection.query(updateQueryLetterQuery,(error3,results3)=>{
                console.log('update')
                if(error3) throw error3;
                var queryLetterArray = [query_clarity,query_boring,query_balance,query_stakes,query_advance,query_resolve,query_voice,
    			query_action,query_personality,query_romance];
                res.json({
                    msg:'queryLetterInserted',
                    queryLetterData: queryLetterArray
                })
            })
        }
    })

})












































