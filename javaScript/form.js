function validation(){

  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var tel = document.getElementById("tel").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;

if(name && lastname && tel && email && country){
  if(!(/^[a-zA-Z]+$/.test(name) && /^[a-zA-Z]+$/.test(lastname))){ // test if name and lastname have only letters
    alert("Please select a valid name.");
  }
  if(!(/^[0-9]+$/.test(tel))){ // test if tel has only numbers
    alert("Please select a valid telephone number.");
  }
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!(re.test(email))){
    alert("Please select a valid mail.");
  }
  }else{
    alert("Please fill the whole form.");
  }
}
