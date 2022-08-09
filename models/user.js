const mongoose = require('mongoose');


const AccountSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	pw: {
		type: String,
		required: true
	},
	user_info:{
		type: String,
		required: true
	},
	user:{
		type: String,
		required:true
	},
	created: { 
		type: Date,
		default: Date.now
	},
});

  
const Account = mongoose.model('Account',AccountSchema);


module.exports = Account;