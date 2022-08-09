const express = require('express');
const path = require('path');
var alert = require('alert');
const router = express.Router();
const mongoose = require('mongoose')
const AccountModel = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
var flags=0;
var Temp_user="";
function authorize(req, res, next) {
	if (!req.session.authenticated) {
		return res.redirect('/account/login');
	}
	next();
}

function ensureLoggedOut(req, res, next) {
	if (req.session.authenticated) {
		req.session.destroy();
	}
	next();
}

router.get('/login', ensureLoggedOut , (req, res) => {

  
	res.sendFile(path.resolve('views/login.html'));
    
});


router.post('/login',async(req,res,) =>{
	var password = req.body.psw;
	var email = req.body.email;
	
	

	const user = await AccountModel.findOne({ email }, function (err,User){
		
		if(err )return res.status(500).send({
			success: false,
			message: 'SomeThing Go Worng!'
		});
		if(!User){
			return res.status(500).send({
				success: false,
				message: 'User Didnt Found ,Go Back And Try Agian or Register!!'
			});
		}
		if(User){
			bcrypt.compare(password, User.pw, function(err,result){
				if (result === true) {
					req.session.authenticated = true;
					req.session.userId = User._id;
					req.session.email = User.email;
					Temp_user= User.email;
					var cs = User.user;
					if (cs == "guide"){
						flags=1;
						res.redirect(req.baseUrl + '/guide');
						
					}
					else {
						res.redirect(req.baseUrl + '/');}
				}
				else
					return res.status(500).send({
						success: false,
						message: 'Worng Password!!,Go Back And Try Agian'
					});
            
			});
			

			
             
		}
		
    
      
	}).clone().catch(function(err){ console.log(err)});
 
  

});



router.get('/register', ensureLoggedOut, (req, res) => {

	
	res.sendFile(path.resolve('views/register.html'));
	
    
}); 

router.post('/register',async (req, res) => {

	authorize

	var password = req.body.psw[0];
	var email = req.body.email;
	var text = req.body.user_info;
	var user = req.body.customer
	
 

	bcrypt.hash(password,saltRounds,function(err,hash){
		const accounts = new AccountModel({
			email: email,
			pw: hash,
			user_info:text,
			user:user
		});
  
		accounts.save(function (err) {
			if (err) {
				return res.sendFile(path.resolve('views/registerProblems.html'));         
			}
			return res.redirect('/account/login');
		});
   
	});
}); 
router.get('/update',authorize,async(req, res) => {
	res.sendFile(path.resolve('views/dashbord.html'));
})




router.post('/update',authorize,async(req, res) => {
	const info = req.body.info;
	var email= req.session.email;
	
	const user = await AccountModel.findOneAndUpdate({ "email" : email },{"user_info": info}, function (err,data){
		if(err )return res.status(500).send({
			success: false,
			message: 'SomeThing Go Worng!'
		});
		alert("update success");
		res.sendFile(path.resolve('views/index.html'));
	});
})
router.get('/guide',  authorize, async (req, res) => {
	if (flags==1){
		var cs = "guide";
		const users = await AccountModel.find({"user": "guide"});
		//str = await JSON.stringify(users);
		str = JSON.stringify(users, null, 4); // (Optional) beautiful indented output.
		
		res.render('DS',{ users });
		//res.sendFile(path.resolve('views/dashbord.html'));
	}
	else{
		res.sendFile(path.resolve('views/tourist.html'));
	}

	
})
//this route will logout the user and we also use ensure logot fun.
router.get('/logout', ensureLoggedOut, (req, res) => {
	flags=0;
	res.redirect('/');
});

router.get('/',  authorize, async (req, res) => {
	if (flags==0){
		res.sendFile(path.resolve('views/tourist.html'));
	}
	else{
		const users = await AccountModel.find({})
		//str = await JSON.stringify(users);
		str = JSON.stringify(users, null, 4); // (Optional) beautiful indented output.
		
		res.redirect('/account/guide');
	}
});



module.exports = router;
