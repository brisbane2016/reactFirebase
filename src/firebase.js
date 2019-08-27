import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAhFWwl9D6R2bTdhCswLsd6JT-lty4Zzs",
    authDomain: "gary-test-d8dd9.firebaseapp.com",
    databaseURL: "https://gary-test-d8dd9.firebaseio.com",
    projectId: "gary-test-d8dd9",
    storageBucket: "",
    messagingSenderId: "21066296233",
    appId: "1:21066296233:web:b58127b2c82069e7"
}
firebase.initializeApp(config);
const databaseRef = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase,googleAuthProvider,databaseRef as default};