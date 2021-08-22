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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    function addRoom() {
          Room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(Room_name).update
          ({purpose:"adding room name"});
          localStorage.setItem("Room_name",Room_name);
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code  
      console.log(Room_names);
      row = "<div class = 'Room_name' id =  "+ Room_names +" onclick = 'redirectToRoom_name(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoom_name(name) {
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location = "kwitter_page.html";
}
 function logout() {
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("Room_name"); 
      window.location = "index.html";
 }