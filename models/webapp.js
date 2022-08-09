const mongoose = require('mongoose');


const buy = new mongoose.Schema({
	select : {
		type: String,
		required: true
	},
	ID : {
		type: String,
		required: true,
		unique: true
	},
	email: { 
		type: String, 
		required: true,
		unique: true
	},
	created: { 
		type: Date,
		default: Date.now
	}
});

  
const web_buy = mongoose.model('cuswebapps',buy);


module.exports = web_buy;