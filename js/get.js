function get(){
  var user=document.getElementById("mid").value;
  firebase.database().ref('user/'+user).once('value').then(function(get){

        var mid=get.val().userId;
        var name=get.val().userName;
        var age=get.val().userAge;
        var phone=get.val().userPhone;
        var address=get.val().userAddress;
        var sex=get.val().userSex;
        var mail=get.val().userMail;
        var dob=get.val().userDob;
        var pname=get.val().userPname;
        var nation=get.val().userNation;
        var state=get.val().userState;
        var blood=get.val().userBlood;
        var height=get.val().userHeight;
        var weight=get.val().userWeight;
        var infect=get.val().userInfect;
        var disease=get.val().userDisease;
        var job=get.val().userJob;

        document.getElementById("username").innerHTML=name;
        document.getElementById("userage").innerHTML=age;
        document.getElementById("userdob").innerHTML=dob;
        document.getElementById("usersex").innerHTML=sex;
        document.getElementById("usermid").innerHTML=mid;
        document.getElementById("userphone").innerHTML=phone;
        document.getElementById("usermail").innerHTML=mail;
        document.getElementById("userpname").innerHTML=pname;
        document.getElementById("useraddress").innerHTML=address;
        document.getElementById("userstate").innerHTML=state;
        document.getElementById("usernation").innerHTML=nation;
        document.getElementById("userjob").innerHTML=job;
        document.getElementById("userheight").innerHTML=height;
        document.getElementById("userweight").innerHTML=weight;
        document.getElementById("userblood").innerHTML=blood;
        document.getElementById("userinfect").innerHTML=infect;
        document.getElementById("userdisease").innerHTML=disease;
    });

}
function back() {
  window.location = "select.html";
}
