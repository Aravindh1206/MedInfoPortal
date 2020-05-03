function add() {
  var mid = document.getElementById("mid").value;
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var age = document.getElementById("age").value;
  var sex = document.getElementById("sex").value;
  var address = document.getElementById("add").value;
  var pname = document.getElementById("pname").value;
  var nation = document.getElementById("nat").value;
  var state = document.getElementById("state").value;
  var ph = document.getElementById("ph").value;
  var mail = document.getElementById("mail").value;
  var job = document.getElementById("job").value;
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  var blood = document.getElementById("bg").value;
  var infect = document.getElementById("inf").value;
  var disease = document.getElementById("dis").value;
  if (mid==""||name == "" || dob == "" || age == "" || mail == "" || address == "" || sex == "" || pname == "" || nation == "" || state == "" || ph == "" || height == "" || weight == "" || blood == "" || infect == "" || disease == "") {
    alert("Please ensure all the details are filled");
    return false;
  }
else {
  firebase.database().ref('user/' + mid).set({
    userId:mid,
    userName: name,
    userDob: dob,
    userAge: age,
    userSex: sex,
    userAddress: address,
    userPname: pname,
    userNation: nation,
    userState: state,
    userPhone: ph,
    userMail: mail,
    userJob: job,
    userHeight: height,
    userWeight: weight,
    userBlood: blood,
    userInfect: infect,
    userDisease: disease
  });
  alert("Data Added Successfully");
}
}

function back() {
  window.location = "select.html";
}
