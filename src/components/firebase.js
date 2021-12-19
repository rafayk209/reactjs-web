import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBxL6RQsRHls8VVnKhocFcssrXDMZYqhsw",
  authDomain: "auth-react-final.firebaseapp.com",
  projectId: "auth-react-final",
  databaseURL: "https://auth-react-final-default-rtdb.firebaseio.com",
  storageBucket: "auth-react-final.appspot.com",
  messagingSenderId: "919465727967",
  appId: "1:919465727967:web:0428fe925422b12c68d66a"
};
  
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();