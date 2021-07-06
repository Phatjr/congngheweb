import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDi-FWHQ_NBtJuEmG98MAv8BQFlNwyBaPw",
    authDomain: "congngheweb-78f42.firebaseapp.com",
    projectId: "congngheweb-78f42",
    storageBucket: "congngheweb-78f42.appspot.com",
    messagingSenderId: "611346617733",
    appId: "1:611346617733:web:55685994bd2d64511e60ec"
  };

  const firebase = firebase.initializeApp(firebaseConfig)
  
  export default firebase

