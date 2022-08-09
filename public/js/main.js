
 

function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  
    if(!sEmail.match(reEmail)) {
      alert("Invalid email address");
      return false;
    }
  
    return true;
  
  }



function validatePw(pw){
 var number = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;

 if(!pw.match(number)) {   
    alert("Invalid Password")
    return false;
}
return true;
}

function matchPassword() {  
    var pw1 = document.getElementById("pass");  
    var pw2 = document.getElementById("re_pass");  

    
    if(pw1.value != pw2.value)  
    {   
      alert("Passwords did not match");  
    }
    return true; 
  }  