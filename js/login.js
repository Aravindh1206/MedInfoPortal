function login(){
  var email=document.getElementById("email").value;
  var password=document.getElementById("pass").value;
  firebase.auth().signInWithEmailAndPassword(email,password).then(
        function(){
            window.location="select.html";
        }
    ).catch(function(error)
    {
        var er=error.message;
        alert(er);
    }
    );

}
