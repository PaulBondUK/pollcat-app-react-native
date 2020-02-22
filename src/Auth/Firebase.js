import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDodWam9q0q8rZRkfxbTS8TXJrGYPx627o",
  authDomain: "pollcat-app.firebaseapp.com",
  databaseURL: "https://pollcat-app.firebaseio.com",
  projectId: "pollcat-app",
  storageBucket: "pollcat-app.appspot.com",
  messagingSenderId: "870073587661",
  appId: "1:870073587661:web:8ecbecef2f9b39151e5684",
  measurementId: "G-LVXJMYDVGZ"
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
