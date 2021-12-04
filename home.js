/*Js code for login page */

// const email = document.getElementById("check-email");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error")


// function credentials_fill(){
//     let email = document.getElementById("check-email");
//     let password1 = document.getElementById("password1");
//     var e1 = document.getElementById("e1")
//     var e2 = document.getElementById("e2")
//     if(password1.value < 8){
//         e2.style.display="block"
//     }
//     else{
//         e2.style.display="none"
//     }

// }





/* Js code for sign up page */



(function() {   //This function executesd the validation of the sign up page
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


// function passcheck(){
//     let Signin_Pass = document.getElementById("SignPass")
//     let Signin_Pass_Confirm = document.getElementById("SignPassConfirm")
//     // var e1 = document.getElementById("e1")
//     if(Signin_Pass.value === Signin_Pass_Confirm.value ){
//         e1.style.display = "none"
//     }
    

//     else{
//         e1.style.display = "block"
//     }
// }



// function Validate(){
//     var e1 = document.getElementById("e1")
//     var e2 = document.getElementById("e2")
//     if(Signin_Pass.value.match(/[0-9]/)){
//         e2.style.display = "none"
//     }
//     else{
        
//     }
    
// }



var passcheck = function() {
    
    if (document.getElementById('SignPass').value ==
      document.getElementById('SignPassConfirm').value)  {
      document.getElementById('e1').style.display="none";
      }
    else{
      document.getElementById('e1').style.display="block";
    
    }
  }