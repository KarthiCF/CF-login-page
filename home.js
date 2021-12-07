


// localStorage.setItem('time', 'not');
// console.log(localStorage.getItem('time'));

// localStorage.setItem('service', '24/7');
// console.log(localStorage.getItem('service'));

// localStorage.setItem('service', 'not now');
// console.log(localStorage.getItem('service'));

// sessionStorage.setItem('food', 'pizza')
// console.log(sessionStorage.getItem('food'))

// sessionStorage.setItem('food', 'idly')
// console.log(sessionStorage.getItem('food'))

// sessionStorage.setItem('workout', 'diet')
// console.log(sessionStorage.getItem('workout'))



let studentDetails= 
`{
	"students" :
	[
		{
		"name" : "Wren",
		"rollNo" : 30,
        "class" : "A",
        "gender" : "male",
        "arrears" : null,
        "percentage" : "90%",
        "rank" : 2,
        "involvedInSports" : false,
        "passedOut" : true
		},
        {
        "name" : "Martha",
        "rollNo" : 19,
        "class" : "A",
        "gender" : "female",
        "arrears" : null,
        "percentage" : "95%",
        "rank" : 1,
        "involvedInSports" : true,
        "passedOut" : true
        },
        {
        "name" : "Martin",
        "rollNo" : 31,
        "class" : "A",
        "gender" : "male",
        "arrears" : 1,
        "percentage" : "80%",
        "rank" : null,
        "involvedInSports" : true,
        "passedOut" : false
        },
        {
        "name" : "Kevin",
        "rollNo" : 13,
        "class" : "B",
        "gender" : "male",
        "arrears" : 2,
        "percentage" : "75%",
        "rank" : null,
        "involvedInSports" : false,
        "passedOut" : false
        },   
        {
        "name" : "Timothy",
        "rollNo" : 25,
        "class" : "B",
        "gender" : "male",
        "arrears" : null,
        "percentage" : "89%",
        "rank" : 10,
        "involvedInSports" : false,
        "passedOut" : true
        },
        {
        "name" : "Elisa",
        "rollNo" : 8,
        "class" : "B",
        "gender" : "female",
        "arrears" : 1,
        "percentage" : "78%",
        "rank" : null,
        "involvedInSports" : true,
        "passedOut" : false
        }
	]
}`

console.log(JSON.parse(studentDetails))






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



var passcheck = function() {
    
    if (document.getElementById('SignPass').value ==
      document.getElementById('SignPassConfirm').value)  {
      document.getElementById('e1').style.display="none";
      }
    else{
      document.getElementById('e1').style.display="block";
    
    }
  }



  