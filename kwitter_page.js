var firebaseConfig = {
      apiKey: "AIzaSyBWWMsybG_Ail921bhjzkBxq8MWhp5q8j8",
      authDomain: "kwitter-bbef.firebaseapp.com",
      databaseURL: "https://kwitter-bbef-default-rtdb.firebaseio.com",
      projectId: "kwitter-bbef",
      storageBucket: "kwitter-bbef.appspot.com",
      messagingSenderId: "849020602017",
      appId: "1:849020602017:web:65f2ee5b0978da837fd2e0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


Room_name = localStorage.getItem("Room_name");

user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+Room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);

console.log(message_data);

name = message_data['name'];

message = message_data['message'];

like = message_data['like'];

name_wt = "<h4>"+name+"<img src = 'tick.png' class = 'user_tick'> </h4>";

msg_wt = "<h4 class = 'message_h4'>"+message+"</h4>";

like_btn = "<button class = 'btn btn-warning' id =  " +firebase_message_id+ " value = " + like + " onclick='update_like(this.id)'>";

span_wt ="<span class = 'glyphicon glyphicon-thumbs-up'> Like:" + like + " </span> </button> <hr>";

row = name_wt+msg_wt+like_btn+span_wt;

document.getElementById("output").innerHTML = row;
//End code
} });  }); }
getData();

function update_like(msg_id) {

console.log("Clicked On Like Button"+msg_id);
btn_id = msg_id;
likes = document.getElementById(btn_id).value;
updated_like = Number(likes)+1;
console.log(updated_like);
firebase.database().ref(Room_name).child(msg_id).update({
  like:updated_like
});
}

function send() {
  msg = document.getElementById("msg").value;
  console.log(msg);
  firebase.database().ref(Room_name).push({
    name:user_name,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("Room_name");
  window.location.replace("index.html");
}