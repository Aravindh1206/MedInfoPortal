function signup(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("pass").value;
  var cpass=document.getElementById("cpass").value;
  console.log(password);
  console.log(cpass);
  if(password==cpass)
  {
    firebase.auth().createUserWithEmailAndPassword(email,password).then(
            function()
        {
            alert("Account created successfully");
            window.location="select.html";
        }).catch(function (error){
            var errorMessage=error.message;
            alert(errorMessage);
        });
  }
  else{
    alert("Password does not match");
  }
}
