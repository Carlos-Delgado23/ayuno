import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/analytics'

var config = {
  apiKey: "AIzaSyBn53ncm_LgOix5B47oFaY9N-gdNUA-zvw",
  authDomain: "ayuno-fast.firebaseapp.com",
  databaseURL: "https://ayuno-fast.firebaseio.com",
  projectId: "ayuno-fast",
  storageBucket: "ayuno-fast.appspot.com",
  messagingSenderId: "663134993722",
  appId: "1:663134993722:web:fb3062fb74bc8d722ae403",
  measurementId: "G-XV7ETQX5LH"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export default firebase