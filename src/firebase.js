import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBxL6RQsRHls8VVnKhocFcssrXDMZYqhsw",
  authDomain: "auth-react-final.firebaseapp.com",
  projectId: "auth-react-final",
  storageBucket: "auth-react-final.appspot.com",
  messagingSenderId: "919465727967",
  appId: "1:919465727967:web:0428fe925422b12c68d66a"
})

export const auth = app.auth()
export default app
