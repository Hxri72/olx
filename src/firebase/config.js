import firebase from "firebase";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBTEjN_f_cKwl337d5vPWu4x_gBsKOFM_Q",
    authDomain: "olxclone-bbbf0.firebaseapp.com",
    projectId: "olxclone-bbbf0",
    storageBucket: "olxclone-bbbf0.appspot.com",
    messagingSenderId: "499912737943",
    appId: "1:499912737943:web:2b354f756dae11082b55d2",
    measurementId: "G-M3HQZF188J"
  };

export default firebase.initializeApp(firebaseConfig)