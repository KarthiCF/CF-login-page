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
function passcheck() {
  if (document.getElementById('passwordSignin').value ==
    document.getElementById('confirmPasswordSignin').value)  {
    document.getElementById('e1').style.display="none";
    }
  else{
    document.getElementById('e1').style.display="block";
  };
};

//function to make sure the password length not less than 8 characters
function pass_length() {
  if(document.getElementById('passwordSignin').value.length >= Number(8)) {
    document.getElementById('e2').style.display="none";
  }
  else{
    document.getElementById('e2').style.display="block";
  };
};




var fname = document.querySelector('#firstName');
    lname = document.querySelector('#lastName');
    uname = document.querySelector('#userName');
    email = document.querySelector('#emailSignin');
    passwd = document.querySelector('#passwordSignin');
    passwdConf = document.querySelector('#confirmPasswordSignin');
    checkBox = document.querySelector('#invalidCheck');

    signupBtn = document.querySelector('#signupButton'); 
 


signupBtn.addEventListener("click", function(event){
 
  if(fname.value !== "" && lname.value !== "" && uname.value !== "" &&
     email.value !== "" && passwd.value !== "" && passwdConf.value !== "" 
     && document.getElementById("invalidCheck").checked){
    event.preventDefault();   
    event.stopPropagation();
    
    storeItem();
    document.getElementById("RegisterSucess").style.display="block";
    
  };
  document.getElementById('form').reset()

  function storeItem(){
    if(localStorage.getItem('First_Name') === null || localStorage.getItem('Last_Name') === null ||
      localStorage.getItem('User_Name') === null || localStorage.getItem('Email') === null)
      {

      localStorage.setItem('First_Name', '[]'); 
      localStorage.setItem('Last_Name', '[]');
      localStorage.setItem('User_Name', '[]');
      localStorage.setItem('Email', '[]');
    }

    let oldFname = JSON.parse(localStorage.getItem('First_Name'));
    oldFname.push(fname.value);

    let oldLname = JSON.parse(localStorage.getItem('Last_Name'));
    oldLname.push(lname.value);

    let oldUname = JSON.parse(localStorage.getItem('User_Name'));
    oldUname.push(uname.value);

    let oldEmail = JSON.parse(localStorage.getItem('Email'));
    oldEmail.push(email.value);

    console.log(localStorage.getItem('Email'))

    localStorage.setItem('First_Name', JSON.stringify(oldFname))
    localStorage.setItem('Last_Name', JSON.stringify(oldLname))
    localStorage.setItem('User_Name', JSON.stringify(oldUname))
    localStorage.setItem('Email', JSON.stringify(oldEmail))

   
  }
});





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