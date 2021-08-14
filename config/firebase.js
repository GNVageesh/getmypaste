import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: process.env.API_KEY,
// 	authDomain: process.env.AUTH_DOMAIN,
// 	projectId: process.env.PROJECT_ID,
// 	storageBucket: process.env.STORAGE_BUCKET,
// 	messagingSenderId: process.env.MESSAGING_SENDER_ID,
// 	appId: process.env.APP_ID,
// 	measurementId: process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
	apiKey: "AIzaSyDLdB2lCdJdiq5q1hWkcQkVldlMocc_luY",
	authDomain: "getmypaste-db.firebaseapp.com",
	projectId: "getmypaste-db",
	storageBucket: "getmypaste-db.appspot.com",
	messagingSenderId: "1052578271025",
	appId: "1:1052578271025:web:0c69a76add13e492dd2a10",
	measurementId: "G-QH9MVS3D0E",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

export { firebase, auth, db, timeStamp };
