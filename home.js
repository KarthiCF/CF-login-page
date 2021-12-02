const email = document.getElementById("check-email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error")


// var email_error = document.getElementById('email_error');
// var pass_error = document.getElementById('pass_error');



function credentials_fill(){
    if(email.value === '' || email.value === null){
        alert("Please enter email")
    }
    else if(password.value === '' || password.value === null){
        alert("Please enter password")
    }

}
