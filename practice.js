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

  function adduser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose:"adding user"
      });
  }
//ADD YOUR FIREBASE LINKS