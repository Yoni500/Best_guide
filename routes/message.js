
const express = require('express');
const path = require('path');
const router = express.Router();
const ContactUsModel = require('../models/msg');



router.post('/',async (req,res)=>{
	const contact_us = await new ContactUsModel({
		name: req.body.name,
		email: req.body.email,
		message: req.body.message,
		number:req.body.number
	});
            
          
	contact_us.save();
	return res.redirect('/');
});





module.exports = router;