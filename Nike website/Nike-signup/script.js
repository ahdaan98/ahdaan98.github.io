function validate(){
  var email=document.getElementById("inputemail4").value;
  var regex = /^([a-zA-Z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+?$)/

  if(regex.test(email)){
    alert("Successfully sended")
    return true;
  }
  else{
    alert("Sorry! Incorrect Email ID")
    return false;
  }
}