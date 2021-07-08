import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDi-FWHQ_NBtJuEmG98MAv8BQFlNwyBaPw",
    authDomain: "congngheweb-78f42.firebaseapp.com",
    projectId: "congngheweb-78f42",
    storageBucket: "congngheweb-78f42.appspot.com",
    messagingSenderId: "611346617733",
    appId: "1:611346617733:web:55685994bd2d64511e60ec"
})

export const auth = app.auth()
export default app
