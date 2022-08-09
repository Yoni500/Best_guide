
const mongoose = require('mongoose');





const ContactUsSchema = new mongoose.Schema({
	name: {
		type:String
	},
	email: { 
		type: String,
		required: true
	},
	message : {
		type: String,
		required: true
	},
	number:{
		type:String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	},
});
  
  
const ContactUs = mongoose.model('ContactUs',ContactUsSchema);



module.exports = ContactUs;