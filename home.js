
/* Js code for sign up page */



(function() {   //This function executed the validation of the sign up page
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


//verify whether password and confirm passwords are same
var passcheck = function() {
  
  if (document.getElementById('passwordSignin').value ==
    document.getElementById('confirmPasswordSignin').value)  {
    document.getElementById('e1').style.display="none";
    }
  else{
    document.getElementById('e1').style.display="block";
  
  }
}

//push new object to array

const form = document.querySelector("form"); //signup dept
const fname = document.querySelector('#firstName');
const lname = document.querySelector('#lastName');
const uname = document.querySelector('#userName');
const email = document.querySelector('#emailSignin');
const passwd = document.querySelector('#passwordSignin');
const passwdConf = document.querySelector('#confirmPasswordSignin');
const checkBox = document.querySelector('#invalidCheck');

const signupBtn = document.querySelector('#signupButton'); //signup dept



signupBtn.addEventListener("click", function(event){
  var unameSign = localStorage.setItem("username", uname.value);
  var emailSign = localStorage.setItem("emailId", email.value);
  var passSign = localStorage.setItem("password", passwd.value);

  if(fname.value !== "" && lname.value !== "" && uname.value !== "" &&
     email.value !== "" && passwd.value !== "" && passwdConf.value !== "" 
     && document.getElementById("invalidCheck").checked){
    event.preventDefault();   
    event.stopPropagation();
    document.getElementById("RegisterSucess").style.display="block";
  }
 
  
});


function storeUserCred(getUname, getEmail, getPass){
    this.getUname = getUname;
    this.getEmail = getEmail;
    this.getPass = getPass;
  }
  
  const getUserCredentials = [ ];
  
  getUserCredentials.push(new storeUserCred(localStorage.getItem('username'), localStorage.getItem('emailId'), localStorage.getItem('password')))
 
  
  console.log(getUserCredentials)



//following code is responsible for the table of data from json and sorting it:
var studentDetail = [
  {
  "name" : "Wren",
  "rollNo" : "30",
  "class" : "A",
  "gender" : "male",
  "dob" :"14.05.2010",
  "arrears" : "0",
  "percentage" : "90",
  "rank" : "2",
  "involvedInSports" : false,
  "appliedScholorship" : true,
  "passedOut" : true
  },
  {
  "name" : "Martha",
  "rollNo" : "19" ,
  "class" : "A",
  "gender" : "female",
  "dob" :"20.11.2010",
  "arrears" : "0",
  "percentage" : "92",
  "rank" : "1",
  "involvedInSports" : true,
  "appliedScholorship" : false,
  "passedOut" : true
  },
  {
  "name" : "Martin",
  "rollNo" : "31",
  "class" : "A",
  "gender" : "male",
  "dob" :"22.01.2010",
  "arrears" : "1",
  "percentage" : "80",
  "rank" : "0",
  "involvedInSports" : true,
  "appliedScholorship" : true,
  "passedOut" : false
  },
  {
  "name" : "Kevin",
  "rollNo" : "13",
  "class" : "B",
  "gender" : "male",
  "dob" :"12.12.2009",
  "arrears" : "2",
  "percentage" : "75",
  "rank" : "0",
  "involvedInSports" : false,
  "appliedScholorship" : true,
  "passedOut" : false
  },   
  {
  "name" : "Timothy",
  "rollNo" : "25",
  "class" : "B",
  "gender" : "male",
  "dob" :"28.06.2010",
  "arrears" : "0",
  "percentage" : "89",
  "rank" : "17",
  "involvedInSports" : false,
  "appliedScholorship" : false,
  "passedOut" : true
  },
  {
  "name" : "Elisa",
  "rollNo" : "8",
  "class" : "B",
  "gender" : "female",
  "dob" :"11.08.2009",
  "arrears" : "1",
  "percentage" : "78",
  "rank" : "0",
  "involvedInSports" : true,
  "appliedScholorship" : true,
  "passedOut" : false
  }
  ]


  
//filter the data using search box
$('#search-input').on('keyup', function(){
  var value = $(this).val()
  var data =searchBox(value, studentDetail)
  console.log(data)
  buildTable(data)
})

buildTable(studentDetail)

function searchBox(value, data){
  var filterData = []

  for (var i = 0; i < data.length; i++){
    console.log(i, data.length)
    value = value.toLowerCase()
    
    var name = data[i].name.toLowerCase()
    var rollNo = data[i].rollNo.toLowerCase()
    var classs = data[i].class.toLowerCase()
    var gender = data[i].gender.toLowerCase()
    var dob = data[i].dob.toLowerCase()
    var arrears = data[i].arrears.toLowerCase()
    var percentage = data[i].percentage.toLowerCase()
    var rank = data[i].rank.toLowerCase()
    

    if (name.startsWith(value) || //startsWith - for finding starting of the field only
    classs.startsWith(value) || 
    gender.startsWith(value) ||
    rollNo.startsWith(value) ||
    dob.includes(value) ||      // include - for finding anywhere in the field
    arrears.startsWith(value) ||
    percentage.startsWith(value) ||
    rank.startsWith(value))
    {
      filterData.push(data[i])
    }
  }
  return filterData
}



//sort the table
$('th').on('click', function(){
  var column = $(this).data('column')
  var order = $(this).data('order')
  var text = $(this).html()
  text = text.substring(0, text.length - 1)

  if(order == 'desc'){
    $(this).data('order', "asc")
    studentDetail = studentDetail.sort((a,b) => a[column] > b[column] ? 1 : -1)
    text += '&#9660'

  }else{
    $(this).data('order', "desc")
    studentDetail = studentDetail.sort((a,b) => a[column] < b[column] ? 1 : -1)
    text += '&#9650'

  }
  $(this).html(text)
  buildTable(studentDetail)
})

buildTable(studentDetail)

function buildTable(data){
  var table = document.getElementById('myTable')
  table.innerHTML = ''
  for (var i = 0; i < data.length; i++){
    var row = `<tr>
            <td>${data[i].name}</td>
            <td>${data[i].rollNo}</td>
            <td>${data[i].class}</td>
            <td>${data[i].gender}</td>
            <td>${data[i].dob}</td>
            <td>${data[i].arrears}</td>
            <td>${data[i].percentage}</td>
            <td>${data[i].rank}</td>
            <td>${data[i].involvedInSports}</td>
            <td>${data[i].appliedScholorship}</td>
            <td>${data[i].passedOut}</td>
          </tr>`
    table.innerHTML += row


  }
}













