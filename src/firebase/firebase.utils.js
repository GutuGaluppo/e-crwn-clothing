import firebase from "firebase/app"
import "firebase/firestore" //database
import 'firebase/auth' //authentication

var firebaseConfig = {
	apiKey: "AIzaSyDVMPnE7mVejguvknuq9Le9KovhRSeRdAM",
	authDomain: "crwn-db-d8582.firebaseapp.com",
	projectId: "crwn-db-d8582",
	storageBucket: "crwn-db-d8582.appspot.com",
	messagingSenderId: "20431973142",
	appId: "1:20431973142:web:10d435814598875dd83e37",
	measurementId: "G-S0BCLVELPZ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // in order to use it whenever we need authentication
export const firestore = firebase.firestore(); // same here

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // allways trigger the Google popup whenever we use the Google auth provider for authentication
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase