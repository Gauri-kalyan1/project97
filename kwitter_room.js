var firebaseConfig = {
      apiKey: "AIzaSyDVKtvq1eQnu2UVVJcHpf6v5kgzmuS_OyU",
      authDomain: "kwitter-14c58.firebaseapp.com",
      databaseURL: "https://kwitter-14c58-default-rtdb.firebaseio.com",
      projectId: "kwitter-14c58",
      storageBucket: "kwitter-14c58.appspot.com",
      messagingSenderId: "932372873947",
      appId: "1:932372873947:web:19f4c948d1202a9c0f82fe",
      measurementId: "G-21BDXML4KC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome "+user_name;

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
            });

            localStorage.setItem("room_name",room_name);
            window.location="kwitter_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
});
}

getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="index.html";
}