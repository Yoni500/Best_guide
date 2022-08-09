var answer = false;
var currentIndex;
var myInput = document.getElementById('psw');
var myInputEmail= document.getElementById('email');
var myInputUser = document.getElementById('usrname');
var myInputcity = document.getElementById('place');
var myInputPostal =document.getElementById('postalCode');
var letter = document.getElementById('letter');
var EmailLatters=document.getElementById('EmailLatters');
var FirstWord = document.getElementById('FirstWord');
var FirstWordCity=document.getElementById('FirstWordCity');
var PostalNumbers =document.getElementById('PostalNumbers');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');
var Special = document.getElementById('special');
var modal = document.getElementById('home');


myInput.onfocus = function() {
	document.getElementById('message').style.display = 'block';
};


myInput.onblur = function() {
	document.getElementById('message').style.display = 'none';
};

myInputEmail.onfocus = function() {
	document.getElementById('EmailMessage').style.display = 'block';
};


myInputEmail.onblur = function() {
	document.getElementById('EmailMessage').style.display = 'none';
};
myInputUser.onfocus = function() {
	document.getElementById('usrmsg').style.display = 'block';
};


myInputUser.onblur = function() {
	document.getElementById('usrmsg').style.display = 'none';
};
myInputcity.onfocus = function() {
	document.getElementById('citymsg').style.display = 'block';
};


myInputcity.onblur = function() {
	document.getElementById('citymsg').style.display = 'none';
};
myInputPostal.onfocus = function() {
	document.getElementById('postalmsg').style.display = 'block';
};


myInputPostal.onblur = function() {
	document.getElementById('postalmsg').style.display = 'none';
};
myInputPostal.onkeyup = function(){
	var Postalnumbers = /[0-9]/;
	if(myInputPostal.value.match(Postalnumbers)) {  
		PostalNumbers.classList.remove('invalid');
		PostalNumbers.classList.add('valid');
		answer=true;
	} else {
		PostalNumbers.classList.remove('valid');
		PostalNumbers.classList.add('invalid');
		answer = false;
	}
};
myInputcity.onkeyup = function() {
	var wordCity = /[a-zA-Z]/;
	if(myInputcity.value.match(wordCity)) {
		FirstWordCity.classList.remove('invalid');
		FirstWordCity.classList.add('valid');
		answer=true;
	} else {
		FirstWordCity.classList.remove('valid');
		FirstWordCity.classList.add('invalid');
		answer = false;
	}
};
myInputUser.onkeyup = function() {
	var word = /[a-zA-Z]/;
	if(myInputUser.value.match(word)) {
		FirstWord.classList.remove('invalid');
		FirstWord.classList.add('valid');
		answer=true;

	} else {
		FirstWord.classList.remove('valid');
		FirstWord.classList.add('invalid');
		answer = false;
	}
};

myInputEmail.onkeyup = function() {
  

	var EmaillLatter = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
	if(myInputEmail.value.match(EmaillLatter)) {  
		EmailLatters.classList.remove('invalid');
		EmailLatters.classList.add('valid');
		answer=true;
	} else {
		EmailLatters.classList.remove('valid');
		EmailLatters.classList.add('invalid');
		answer = false;
	}
    
 

  
};
myInput.onkeyup = function() {

	var lowerCaseLetters = /[a-z]/;
	if(myInput.value.match(lowerCaseLetters)) {  
		letter.classList.remove('invalid');
		letter.classList.add('valid');
		answer=true;
	} else {
		letter.classList.remove('valid');
		letter.classList.add('invalid');
		answer = false;
	}
  

	var upperCaseLetters = /[A-Z]/;
	if(myInput.value.match(upperCaseLetters)) {  
		capital.classList.remove('invalid');
		capital.classList.add('valid');
		answer=true;
	} else {
		capital.classList.remove('valid');
		capital.classList.add('invalid');
		answer = false;
	}


	var numbers = /[0-9]/;
	if(myInput.value.match(numbers)) {  
		number.classList.remove('invalid');
		number.classList.add('valid');
		answer=true;
	} else {
		number.classList.remove('valid');
		number.classList.add('invalid');
		answer = false;
	}
  

	if(myInput.value.length >= 8) {
		length.classList.remove('invalid');
		length.classList.add('valid');
		answer = true;
	} else {
		length.classList.remove('valid');
		length.classList.add('invalid');
		answer=false;
	}
};
function myFunction() {
	if(answer==true){
		alert('You have successfully registered');}
	else{
		alert('You Need to fill the fields Correct');
	}
}

  
var currentIndex;
function display(index) {
	modal[index].style.display = 'block';
	currentIndex = index;

}