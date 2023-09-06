function validate(){
  var email=document.getElementById("email").value;
  var regex = /^([a-zA-Z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+?$)/

  if(regex.test(email)){
    return true;
  }
  else{
    alert("Sorry! Incorrect Email ID")
    return false;
  }
}