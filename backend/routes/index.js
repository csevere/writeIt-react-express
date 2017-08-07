var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');
var multer = require('multer');
var upload = multer({dest: '../frontend/public/images'});


var fs = require('fs');

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






module.exports = router;

///////////////////////////////////////////////////////////////////
///////////////////////////GET REQUESTS////////////////////////////
///////////////////////////////////////////////////////////////////

router.get('/chapters', (req, res)=>{

	var id = req.query.id;
	console.log('here');
	console.log(id);
	var username = req.query.username;
	console.log(username)
	var book = req.query.book;
	console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


	if(id !== '' && id !==undefined){
        var selectCharacterQuery = `SELECT * FROM chapters WHERE id = ${id}`
	}else if(book !== undefined  && username !== undefined){
        var selectCharacterQuery = `SELECT * FROM chapters WHERE username = '${username}' AND book = '${book}'`
	}else if(deleteId !== undefined){
        var selectCharacterQuery = `DELETE FROM chapters WHERE id = ${deleteId}`
	}


	connection.query(selectCharacterQuery, (error, results)=>{
		console.log(selectCharacterQuery);
		if(error){
			throw error
		}else{
			res.json(results);
		}
	});
});


router.get('/notepad', (req, res)=>{

    var id = req.query.id;
    console.log('here');
    console.log(id);
    var username = req.query.username;
    console.log(username)
    var book = req.query.book;
    console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


    if(id !== '' && id !==undefined){
        var selectNotePadQuery = `SELECT * FROM notepad WHERE id = ${id}`
    }else if(book !== undefined  && username !== undefined){
        var selectNotePadQuery = `SELECT * FROM notepad WHERE username = '${username}' AND book = '${book}'`
    }else if(deleteId !== undefined){
        var selectNotePadQuery = `DELETE FROM notepad WHERE id = ${deleteId}`
    }


    connection.query(selectNotePadQuery, (error, results)=>{
        console.log(selectNotePadQuery);
        if(error){
            throw error
        }else{
            res.json(results);
        }
    });
});


router.get('/critique', (req, res)=>{

    var id = req.query.id;
    console.log('here');
    console.log(id);
    var username = req.query.username;
    console.log(username)
    var book = req.query.book;
    console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


    if(id !== '' && id !==undefined){
        var selectCritiqueQuery = `SELECT * FROM critique WHERE id = ${id}`
    }else if(book !== undefined  && username !== undefined){
        var selectCritiqueQuery = `SELECT * FROM critique WHERE username = '${username}' AND book = '${book}'`
    }else if(deleteId !== undefined){
        var selectCritiqueQuery = `DELETE FROM critique WHERE id = ${deleteId}`
    }


    connection.query(selectCritiqueQuery, (error, results)=>{
        console.log(selectCritiqueQuery);
        if(error){
            throw error
        }else{
            res.json(results);
        }
    });
});



router.get('/characters', (req, res)=>{

    var id = req.query.id;
    console.log('here');
    console.log(id);
    var username = req.query.username;
    console.log(username)
    var book = req.query.book;
    console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


    if(id !== '' && id !==undefined){
        var selectCharacterQuery = `SELECT * FROM characters WHERE id = ${id}`
    }else if(book !== undefined  && username !== undefined){
        var selectCharacterQuery = `SELECT * FROM characters WHERE username = '${username}' AND book = '${book}'`
    }else if(deleteId !== undefined){
        var selectCharacterQuery = `DELETE FROM characters WHERE id = ${deleteId}`
    }


    connection.query(selectCharacterQuery, (error, results)=>{
        console.log(selectCharacterQuery);
        if(error){
            throw error
        }else{
            res.json(results);
        }
    });
});


router.get('/queryletter', (req, res)=>{

    var id = req.query.id;
    console.log('here');
    console.log(id);
    var username = req.query.username;
    console.log(username)
    var book = req.query.book;
    console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


    if(id !== '' && id !==undefined){
        var selectQueryLetterQuery = `SELECT * FROM query_letter WHERE id = ${id}`
    }else if(book !== undefined  && username !== undefined){
        var selectQueryLetterQuery = `SELECT * FROM query_letter WHERE username = '${username}' AND book = '${book}'`
    }else if(deleteId !== undefined){
        var selectQueryLetterQuery = `DELETE FROM query_letter WHERE id = ${deleteId}`
    }


    connection.query(selectQueryLetterQuery, (error, results)=>{
        console.log(selectQueryLetterQuery);
        if(error){
            throw error
        }else{
            res.json(results);
        }
    });
});


router.get('/plot', (req, res)=>{

    var id = req.query.id;
    console.log('here');
    console.log(id);
    var username = req.query.username;
    console.log(username)
    var book = req.query.book;
    console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


    if(id !== '' && id !==undefined){
        var selectPlotQuery = `SELECT * FROM plot WHERE id = ${id}`
    }else if(book !== undefined  && username !== undefined){
        var selectPlotQuery = `SELECT * FROM plot WHERE username = '${username}' AND book = '${book}'`
    }else if(deleteId !== undefined){
        var selectPlotQuery = `DELETE FROM plot WHERE id = ${deleteId}`
    }


    connection.query(selectPlotQuery, (error, results)=>{
        console.log(selectPlotQuery);
        if(error){
            throw error
        }else{
            res.json(results);
        }
    });
});


router.get('/bookpic', (req, res)=>{

    var id = req.query.id;
    console.log('here');
    console.log(id);
    var username = req.query.username;
    console.log(username)
    var book = req.query.book;
    console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


    if(id !== '' && id !==undefined){
        var selectPlotQuery = `SELECT * FROM book_images WHERE id = ${id}`
    }else if(book !== undefined  && username !== undefined){
        var selectPlotQuery = `SELECT * FROM book_images WHERE username = '${username}' AND book = '${book}'`
    }else if(deleteId !== undefined){
        var selectPlotQuery = `DELETE FROM book_images WHERE id = ${deleteId}`
    }


    connection.query(selectPlotQuery, (error, results)=>{
        console.log(selectPlotQuery);
        if(error){
            throw error
        }else{
            res.json(results);
        }
    });
});




router.get('/user', (req,res)=>{
	var email = req.query.email;
	var username = req.query.username;
	console.log(email);
	console.log(username);
	if(email !== undefined){
        var userDataQuery = `SELECT * FROM users WHERE email= '${email}'` ;
        connection.query(userDataQuery, (error, response)=>{
            if(error){
                throw error;
            }else{
                res.json({
                    userData: response[0]
                })
            }

        })
    }else{
        var userDataQuery = `SELECT * FROM users WHERE username= '${username}'` ;
        connection.query(userDataQuery, (error, response)=>{
            if(error){
                throw error;
            }else{
                res.json({
                    userData: response[0]
                })
            }

        })

    }


});

router.get('/book', (req,res)=>{
    var username = req.query.username;
    console.log('=========')
    var book = req.query.book;
    console.log(book);
    console.log('here')

    if(book === undefined){
    var bookDataQuery = `SELECT * FROM book WHERE username= '${username}'` ;
    connection.query(bookDataQuery, (error, response)=>{
    	console.log('fired 1')
        if(error){
            throw error;
        }else{
        	console.log(response);
            res.json({
                bookData: response
            })
        }

    })

    }else{
    	var bookDataQuery = `SELECT * FROM book WHERE username= '${username}' AND title='${book}'` ;
    	connection.query(bookDataQuery, (error, response)=>{
    		console.log('fired 2')
        	if(error){
            	throw error;
        	}else{
        		console.log(response);
            	res.json({
                	bookData: response
            	})
        	}

    	})


    }


});

router.get('/synopsis', (req, res)=>{

    var id = req.query.id;
    console.log('here');
    console.log(id);
    var username = req.query.username;
    console.log(username)
    var book = req.query.book;
    console.log(book);
    var deleteId = req.query.action;
    console.log(deleteId);


    if(id !== '' && id !==undefined){
        var selectSynopsisQuery = `SELECT * FROM synopsis WHERE id = ${id}`
    }else if(book !== undefined  && username !== undefined){
        var selectSynopsisQuery = `SELECT * FROM synopsis WHERE username = '${username}' AND book = '${book}'`
    }else if(deleteId !== undefined){
        var selectSynopsisQuery = `DELETE FROM synopsis WHERE id = ${deleteId}`
    }


    connection.query(selectSynopsisQuery, (error, results)=>{
        console.log(selectSynopsisQuery);
        if(error){
            throw error
        }else{
            res.json(results);
        }
    });
});


router.get('/post', (req,res)=>{
    var username = req.query.username;
    console.log(username)
    var postDataQuery = `SELECT * FROM post WHERE username= '${username}'` ;
    connection.query(postDataQuery, (error, response)=>{
        if(error){
            throw error;
        }else{
            console.log(response)
            res.json({
                postData: response
            })
        }

    })

});



router.get('/profilepic', (req,res)=>{
	var username = req.query.username;
	console.log(username)
	var postDataQuery = `SELECT * FROM profilepic WHERE username= '${username}'` ;
	connection.query(postDataQuery, (error, response)=>{
		if(error){
			throw error;
		}else{
			console.log(response)
			res.json({
				picData: response[0]
			})
		}

	})

});


router.get('/profiles', (req,res)=>{

	var profileQuery = `SELECT username FROM users` ;
	connection.query(profileQuery, (error, response)=>{
		if(error){
			throw error;
		}else{
			console.log(response)
			res.json({
				profileData: response
			})
		}

	})

});

router.get('/results', (req,res)=>{

	var specificUser = req.query.specificUser
	console.log(specificUser)

	if(specificUser.length > 0){
		var resultsQuery = `SELECT * FROM users LEFT JOIN profilepic on users.username = profilepic.username WHERE users.username = '${specificUser}' ;` ;
		connection.query(resultsQuery, (error, response)=>{
			console.log(resultsQuery);
			if(error){
				throw error;
			}else{
				console.log(response)
				res.json({
					resultsData: response
				})
			}

		})

	}else{
		var resultsQuery = `SELECT * FROM users 
		LEFT JOIN profilepic on users.username = profilepic.username;` ;
		connection.query(resultsQuery, (error, response)=>{
			console.log(resultsQuery);
			if(error){
				throw error;
			}else{
				console.log(response)
				res.json({
					resultsData: response
				})
			}

		})

	}



});

router.get('/follow', (req,res)=>{
	var userFollowed = req.query.userFollowed;
	var userFollowing = req.query.userFollowing;

	var username = req.query.username;

	console.log('=========PPPP==========');
	console.log(userFollowing);

	
		if(username !== undefined){
			var followQuery = `SELECT * FROM follow WHERE user_followed = '${username}'`;
			console.log(followQuery);
			connection.query(followQuery, (error, response)=>{
				if(error){
					throw error;
				}else{
					res.json({
						followers: response 
					})
				}

			})


		}else{
			var followQuery = `INSERT INTO follow (user_followed, user_following) VALUES (?,?);`;
			connection.query(followQuery, [userFollowed, userFollowing],(error, response)=>{
				console.log(followQuery);
				if(error){
					throw error;
				}else{
					res.json({
						msg: 'success'
					})
				}

			})

		}

});




///////////////////////////////////////////////////////////////////
///////////////////////////THE FORUM GET REQUESTS////////////////////////////
///////////////////////////////////////////////////////////////////

router.get('/contemp', (req,res)=>{ 
    var contempDataQuery = `SELECT * FROM forums WHERE category = 'Contemp_fic'`;
    connection.query(contempDataQuery, (error, response)=>{
        if(error){
            throw error;
        }else{
            console.log(response)
            res.json({
                dataz: response
            })
        }

    })

});

router.get('/contemp', (req,res)=>{ 
    var contempDataQuery = `SELECT * FROM forums WHERE category = 'Romance'`;
    connection.query(contempDataQuery, (error, response)=>{
        if(error){
            throw error;
        }else{
            console.log(response)
            res.json({
                dataz: response
            })
        }

    })

});


router.get('/contemp', (req,res)=>{ 
    var contempDataQuery = `SELECT * FROM forums WHERE category = 'Science_fic'`;
    connection.query(contempDataQuery, (error, response)=>{
        if(error){
            throw error;
        }else{
            console.log(response)
            res.json({
                dataz: response
            })
        }

    })

});

router.get('/contemp', (req,res)=>{ 
    var contempDataQuery = `SELECT * FROM forums WHERE category = 'Fantasy'`;
    connection.query(contempDataQuery, (error, response)=>{
        if(error){
            throw error;
        }else{
            console.log(response)
            res.json({
                dataz: response
            })
        }

    })

});

router.get('/contemp', (req,res)=>{ 
    var contempDataQuery = `SELECT * FROM forums WHERE category = 'Mystery'`;
    connection.query(contempDataQuery, (error, response)=>{
        if(error){
            throw error;
        }else{
            console.log(response)
            res.json({
                dataz: response
            })
        }

    })

});


router.get('/contemp', (req,res)=>{ 
    var contempDataQuery = `SELECT * FROM forums WHERE category = 'Horror'`;
    connection.query(contempDataQuery, (error, response)=>{
        if(error){
            throw error;
        }else{
            console.log(response)
            res.json({
                dataz: response
            })
        }

    })

});




///////////////////////////////////////////////////////////////////
///////////////////////////THE FORUM POST REQUESTS////////////////////////////
///////////////////////////////////////////////////////////////////













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
	const location = req.body.location;
    const t_username = req.body.t_username; 

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
			var insertQuery = "INSERT INTO users (name, email, username, password, occupation, about, token, location, token_exp, account_created, t_username) VALUES (?,?,?,?,?,?,?,?,DATE_ADD(NOW(), INTERVAL 1 HOUR),NOW(), ?);";
			// Run the query (for now autoset the sales rep to 1337)
			connection.query(insertQuery,[name,email,username,password,occupation,about,token,location, t_username],(error, results)=>{
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
						email: email


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
						token: token,
						email: results[0].email
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
	console.log("CHARACTER POST");
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

    var id = req.body.id;
    console.log(id);

    console.log(req.body)


	if(id!==''){
        var updateCharacterQuery = `UPDATE characters SET
				name = '${name}',race = '${race}',age = '${age}',birthday = '${birthday}',physical_desc = '${physical_desc}',hometown = '${hometown}',type_of_home = '${type_of_home}',father_info = '${father_info}',mother_info = '${mother_info}',sibling_info = '${sibling_info}',
				relatives = '${relatives}',friends = '${friends}',enemies = '${enemies}',mentor = '${mentor}',hobbies = '${hobbies}',dress = '${dress}',leader_follower = '${leader_follower}',positive_traits = '${positive_traits}',negative_traits = '${negative_traits}',temper = '${temper}',star_sign = '${star_sign}',personality = '${personality}',philosophy = '${philosophy}',ambitions = '${ambitions}',
				liked_disliked = '${liked_disliked}',time_stamp = NOW() WHERE id = '${id}'`;
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
	}else{
        var characterQuery = `SELECT * FROM characters WHERE username = ? and book = ? AND name = ?`;
        var insertCharacterQuery = `INSERT INTO characters 
		(username,book,name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,
		relatives,friends,enemies,mentor,hobbies,dress,leader_follower,positive_traits,negative_traits,temper,star_sign,personality,philosophy,ambitions,
		liked_disliked,time_stamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, NOW())`;
        connection.query(characterQuery, [username,book, name], (error,results)=>{
            if(error) throw error;
            if(results.length === 0){
                connection.query(insertCharacterQuery, [username,book,name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,
                    relatives,friends,enemies,mentor,hobbies,dress,leader_follower,positive_traits,negative_traits,temper,star_sign,personality,philosophy,ambitions,
                    liked_disliked], (error2,results2)=>{
                    if(error2) throw error2;
                    var characterArray = [name,race,age,birthday,physical_desc,hometown,type_of_home,father_info,mother_info,sibling_info,
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
				liked_disliked = '${liked_disliked}',time_stamp = NOW() WHERE username = '${username}' AND book = '${book}' AND name='${name}'`;
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

	}



});

router.post('/plot',(req,res)=>{
	console.log("PLOT REQUEST");
 
	var username = req.body.username;
	var book = req.body.book;
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

    var id = req.body.id;
    console.log(id);
 
    console.log(req.body)

	if(id!==''){
        var updatePlotQuery = `UPDATE plot SET
 					main_plot = '${main_plot}',subplot = '${subplot}',subplot_reasons = '${subplot_reasons}',direct_actions = '${direct_actions}',indirect_actions = '${indirect_actions}',motivation = '${motivation}',plot_type = '${plot_type}',plot_order = '${plot_order}',foreshadow = '${foreshadow}',
 					credibility = '${credibility}',flashbacks = '${flashbacks}',journey = '${journey}',stakes = '${stakes}',antagonist = '${antagonist}',summary = '${summary}',time_stamp = NOW() WHERE id = '${id}';`;
        connection.query(updatePlotQuery,(error3,results3)=>{
            console.log('here')
            if(error3) throw error3;
            var plotArray = [main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
                credibility,flashbacks,journey,stakes,antagonist,summary];
            res.json({
                msg:'plotUpdated',
                plotData: plotArray
            })
        })
	}else{
        var plotQuery = `SELECT * FROM plot WHERE username = ? and book = ? and main_plot=?`;
        var insertPlotQuery = `INSERT INTO plot 
 		(username,book,main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
 		credibility,flashbacks,journey,stakes,antagonist,summary,time_stamp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())`;
        connection.query(plotQuery, [username,book, main_plot], (error,results)=>{
            if(error) throw error;
            if(results.length === 0){
                connection.query(insertPlotQuery, [username,book,main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
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
 					credibility = '${credibility}',flashbacks = '${flashbacks}',journey = '${journey}',stakes = '${stakes}',antagonist = '${antagonist}',summary = '${summary}',time_stamp = NOW() WHERE username = '${username}' AND book = '${book}';`;
                connection.query(updatePlotQuery,(error3,results3)=>{
                    console.log('here')
                    if(error3) throw error3;
                    var plotArray = [main_plot,subplot,subplot_reasons,direct_actions,indirect_actions,motivation,plot_type,plot_order,foreshadow,
                        credibility,flashbacks,journey,stakes,antagonist,summary];
                    res.json({
                        msg:'plotUpdated',
                        plotData: plotArray
                    })
                })
            }
        })
	}
 

  
 });

router.post('/chapters', (req,res)=>{
    //console.log(res);
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
    var book = req.body.book;

    var id = req.body.id;

    //console.log(id);


    //console.log(req.body);

    if(id !== ''){
        var updatePlotQuery = `UPDATE chapters SET
                    scene_number='${scene_number}',scene_plot='${scene_plot}',scene_char1='${scene_char1}',scene_dialogue='${scene_dialogue}',scene_conflict='${scene_conflict}',relevant_dialogue='${relevant_dialogue}',char_thought='${char_thought}',pov_nar='${pov_nar}',pov_char='${pov_nar}',setting='${setting}',setting_char='${setting_char}',
                    setting_plot='${setting_plot}',setting_rev='${setting_plot}',scene_mood='${scene_mood}',scene_char2='${scene_char2}' WHERE id = '${id}';`;
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
	}else {


        var chapterQuery = `SELECT * FROM chapters WHERE username = ? AND book = ? AND scene_number = ?`;
        var insertChapterQuery = `INSERT INTO chapters
        (scene_number,scene_plot,scene_char1,scene_dialogue,scene_conflict,relevant_dialogue,char_thought,pov_nar,pov_char,setting,setting_char,
        setting_plot,setting_rev,scene_mood,scene_char2,username,book) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
        connection.query(chapterQuery, [username, book, scene_number], (error, results) => {
            if (error) throw error;
            if (results.length === 0) {
                console.log('insert');
                connection.query(insertChapterQuery, [scene_number, scene_plot, scene_char1, scene_dialogue, scene_conflict, relevant_dialogue, char_thought, pov_nar, pov_char, setting, setting_char,
                    setting_plot, setting_rev, scene_mood, scene_char2, username, book], (error2, results2) => {
                    if (error2) throw error2;
                    var chapterArray = [scene_number, scene_plot, scene_char1, scene_dialogue, scene_conflict, relevant_dialogue, char_thought, pov_nar, pov_char, setting, setting_char,
                        setting_plot, setting_rev, scene_mood, scene_char2];
                    res.json({
                        msg: 'chapterInserted',
                        chapterData: chapterArray
                    })
                })
            } else {
                var updatePlotQuery = `UPDATE chapters SET
                    scene_number='${scene_number}',scene_plot='${scene_plot}',scene_char1='${scene_char1}',scene_dialogue='${scene_dialogue}',scene_conflict='${scene_conflict}',relevant_dialogue='${relevant_dialogue}',char_thought='${char_thought}',pov_nar='${pov_nar}',pov_char='${pov_nar}',setting='${setting}',setting_char='${setting_char}',
                    setting_plot='${setting_plot}',setting_rev='${setting_plot}',scene_mood='${scene_mood}',scene_char2='${scene_char2}' WHERE username = '${username}' AND book='${book}' AND scene_number='${scene_number}';`;
                connection.query(updatePlotQuery, (error3, results3) => {
                    console.log('update')
                    if (error3) throw error3;
                    var chapterArray = [scene_number, scene_plot, scene_char1, scene_dialogue, scene_conflict, relevant_dialogue, char_thought, pov_nar, pov_char, setting, setting_char,
                        setting_plot, setting_rev, scene_mood, scene_char2];
                    res.json({
                        msg: 'chapterInserted',
                        chapterData: chapterArray
                    })
                })
            }
        })
    }
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
    var book = req.body.book;

    var id = req.body.id;
    console.log(id);
    console.log(req.body);

    if(id!==''){
        var updateCritiqueQuery = `UPDATE critique SET
                    critique_clarity='${critique_clarity}', critique_boring='${critique_boring}', critique_balance='${critique_balance}', critique_advance='${critique_advance}', critique_resolve='${critique_resolve}', critique_voice='${critique_voice}',
                    critique_action='${critique_action}', critique_personality='${critique_personality}', critique_romance='${critique_romance}', critique_conflict='${critique_conflict}', critique_limit='${critique_limit}', critique_pov='${critique_pov}',
                    critique_sent='${critique_sent}', critique_lang='${critique_lang}', critique_element='${critique_element}' WHERE id='${id}';`;
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

    }else{
        var critiqueQuery = `SELECT * FROM critique WHERE username = ? AND book = ? AND critique_clarity =?`;
        var insertCritiqueQuery = `INSERT INTO critique
        (critique_clarity, critique_boring, critique_balance, critique_advance, critique_resolve, critique_voice,
        critique_action, critique_personality, critique_romance, critique_conflict, critique_limit, critique_pov,
        critique_sent, critique_lang, critique_element, username,book) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);`;
        connection.query(critiqueQuery,[username, book, critique_clarity],(error,results)=>{
            if(error) throw error;
            if(results.length === 0){
                console.log('insert');
                connection.query(insertCritiqueQuery, [critique_clarity, critique_boring, critique_balance, critique_advance, critique_resolve, critique_voice,
                    critique_action, critique_personality, critique_romance, critique_conflict, critique_limit, critique_pov,
                    critique_sent, critique_lang, critique_element, username,book],(error2,results2)=>{
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
                    critique_sent='${critique_sent}', critique_lang='${critique_lang}', critique_element='${critique_element}' WHERE username='${username}' AND book='${book}';`;
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

    }



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
   var book = req.body.book;
   var id = req.body.id;
   console.log(id);

   if(id!==''){
       var updateSynopsisQuery = `UPDATE synopsis SET
                    synop_beg1='${synop_beg1}', synop_prot='${synop_prot}', synop_prob='${synop_prob}', synop_char='${synop_char}', synop_change1='${synop_change1}', synop_reader='${synop_reader}',
                    synop_impact='${synop_impact}', synop_change2='${synop_change2}', synop_rel_start='${synop_rel_start}', synop_test='${synop_test}', synop_rel_conflict='${synop_rel_conflict}', synop_rel_end='${synop_rel_end}',
                    synop_issue='${synop_issue}', synop_theme='${synop_theme}', synop_message='${synop_message}' WHERE id='${id}';`;
       connection.query(updateSynopsisQuery,(error3,results3)=>{
           console.log('update')
           if(error3) throw error3;
           var synopsisArray = [synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
               synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message];
           res.json({
               msg:'synopsisUpdated',
               synopsisData: synopsisArray
           })
       })

   }else{
       var synopsisQuery = `SELECT * FROM synopsis WHERE username = ? AND book = ? AND synop_beg1 = ?;`;
       var insertSynopsisQuery = `INSERT INTO synopsis
    	(synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
    	synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message,username,book) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

       connection.query(synopsisQuery,[username,book, synop_beg1],(error,results)=>{
           if(error) throw error;
           if(results.length === 0){
               console.log('insertSynopsis');
               connection.query(insertSynopsisQuery, [synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
                   synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message,username,book],(error2,results2)=>{
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
                    synop_issue='${synop_issue}', synop_theme='${synop_theme}', synop_message='${synop_message}' WHERE username='${username}' AND book='${book}';`;
               connection.query(updateSynopsisQuery,(error3,results3)=>{
                   console.log('update')
                   if(error3) throw error3;
                   var synopsisArray = [synop_beg1,synop_prot,synop_prob,synop_char,synop_change1,synop_reader,synop_impact,synop_change2,synop_rel_start,
                       synop_test,synop_rel_conflict,synop_rel_end,synop_issue,synop_theme,synop_message];
                   res.json({
                       msg:'synopsisUpdated',
                       synopsisData: synopsisArray
                   })
               })
           }

       })

   }


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
    var book = req.body.book;

    console.log('==========')
    var id = req.body.id;
    console.log(id);

    if(id!==''){
        var updateQueryLetterQuery = `UPDATE query_letter SET
                query_clarity='${query_clarity}', query_boring='${query_boring}', query_balance='${query_balance}', query_stakes='${query_stakes}', query_advance='${query_advance}',
                query_resolve='${query_resolve}', query_voice='${query_voice}', query_action='${query_action}', query_personality='${query_personality}', query_romance='${query_romance}' WHERE id='${id}';`;
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

    }else{
        var queryLetterQuery = `SELECT * FROM query_letter WHERE username = ? AND book = ? AND query_clarity = ?`;
        var insertQueryLetterQuery = `INSERT INTO query_letter
    	(query_clarity,query_boring,query_balance,query_stakes,query_advance,query_resolve,query_voice,
    	query_action,query_personality,query_romance,username,book) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`;

        connection.query(queryLetterQuery,[username,book, query_clarity],(error,results)=>{
            if(error) throw error;
            if(results.length === 0){
                console.log('q-letter-insert');
                connection.query(insertQueryLetterQuery, [query_clarity,query_boring,query_balance,query_stakes,query_advance,query_resolve,query_voice,
                    query_action,query_personality,query_romance,username,book],(error2,results2)=>{
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
                query_resolve='${query_resolve}', query_voice='${query_voice}', query_action='${query_action}', query_personality='${query_personality}', query_romance='${query_romance}' WHERE username='${username}' AND book='${book}';`;
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

    }



});

router.post('/notepad', (req, res)=>{
	var username = req.body.username;
	var book = req.body.book;
	var notepad = req.body.notepad;


    var id = req.body.id;
    console.log(id);

    console.log(req.body);

    var notePadLetterQuery = `SELECT * FROM notepad WHERE username = ? AND book = ? AND notepad = ?`;
    var insertNotePadQuery = `INSERT INTO notepad
    	(notepad,username,book) VALUES (?,?,?)`;
    var updateNotePadQuery = `UPDATE notepad SET notepad='${notepad}' WHERE username='${username}' AND book='${book}';`;


    if(id!==''){
        var editNotePadQuery = `UPDATE notepad SET notepad='${notepad}' WHERE id='${id}';`;
        connection.query(editNotePadQuery, (error2, results2)=>{
            console.log('update')
            if(error2) throw error2;
            res.json({
                msg: 'Updated'
            })
        })
	}else{
        connection.query(notePadLetterQuery, [username, book, notepad], (error,results)=>{
            if(error) throw error;
            if(results.length === 0){
                connection.query(insertNotePadQuery, [notepad, username, book],(error2, results2)=>{
                    if(error2) throw error2;
                    res.json({
                        msg: 'Inserted'
                    })
                })
            }else{

                connection.query(updateNotePadQuery, (error2, results2)=>{
                    console.log('update')
                    if(error2) throw error2;
                    res.json({
                        msg: 'Updated'
                    })
                })

            }

        })

	}
});

router.post('/post', (req, res)=>{
	console.log('post post request')
	var username = req.body.username;
	var post = req.body.post;
	var from_user = req.body.from_user;


    console.log(req.body);

    var insertPostQuery = `INSERT INTO post (post,username,from_user,time_posted) VALUES (?,?,?,NOW())`;


    connection.query(insertPostQuery,[post,username,from_user],(error, response)=>{
    	console.log(insertPostQuery);
    	if(error) throw error;
    	res.json({
    		postData: response
    	})
    })


});


//Add multer file upload
router.post('/profilepic', upload.single('fileUploaded'), function(req, res, next){
	console.log('req  below')
	console.log(req.file)
	var username = req.body.username;
	//res.json(req.file);rs

	console.log('req body below')
	console.log(req.body);

	var tmp_path = req.file.path;

	var target_path = '../frontend/public/images/' + req.file.originalname
	fs.readFile(tmp_path, function (error, data){
		fs.writeFile(target_path, data, function(error){
			if(error) throw error
			//res.json('File Uploaded to ' + target_path);
			// db.insert into the mongdo, the path and name of the new file.
			// res.redirect('/')
			var insertPicQuery = 'INSERT into profilepic (username, picture) VALUES (?,?);';

			connection.query(insertPicQuery, [username, target_path], (error, response)=>{
				if(error) throw error;
				res.json({
					msg: 'picInserted'
				})

			})

		});
	});

});

router.post('/bookpic', upload.single('bookPicture'), function(req, res, next){
	console.log('req  below')
	console.log(req.file)
	var username = req.body.username;
	var book = req.body.book;
	//res.json(req.file);rs

	console.log('req body below')
	console.log(req.body);

	var tmp_path = req.file.path;

	var target_path = '../frontend/public/images/' + req.file.originalname
	fs.readFile(tmp_path, function (error, data){
		fs.writeFile(target_path, data, function(error){
			if(error) throw error
			//res.json('File Uploaded to ' + target_path);
			// db.insert into the mongdo, the path and name of the new file.
			// res.redirect('/')
			var insertBookPicQuery = 'INSERT into book_images (username,book,book_image) VALUES (?,?,?);';

			connection.query(insertBookPicQuery, [username,book,target_path], (error, response)=>{
				if(error) throw error;
				res.json({
					msg: 'bookPicInserted'
				})

			})

		});
	});

});















