
const express = require('express');
const path = require('path');
const router = express.Router();
const buy = require('../models/webapp');



router.post('/webapp',async (req,res)=>{
	var select = req.body.choose;
	var id = req.body.id;
	var Email = req.body.Email;
    
	const contact_us = await new buy({
		select: select,
		ID: id,
		email: Email
	});


            
          
	contact_us.save();
	//alert("we got your reservation")
	return res.redirect('/');
});
router.get('/download', function(req, res){
	const file = `${__dirname}/myApp.apk`;
	res.download(file);
});







module.exports = router;