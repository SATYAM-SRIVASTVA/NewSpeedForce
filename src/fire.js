import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCBG83-JzgbneJ4aL_BNUuMMyzxwK9LV_k",
  authDomain: "login-8cc87.firebaseapp.com",
  projectId: "login-8cc87",
  storageBucket: "login-8cc87.appspot.com",
  messagingSenderId: "13533352224",
  appId: "1:13533352224:web:adf2fbb7e24b75dee08745",
  measurementId: "G-PGHH4N8MHN"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire