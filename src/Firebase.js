import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNnPd1so2Thhc3BGIkJDoyLO91pSQ6Q_o",
    authDomain: "todolist-cd4c9.firebaseapp.com",
    databaseURL: "https://todolist-cd4c9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todolist-cd4c9",
    storageBucket: "todolist-cd4c9.appspot.com",
    messagingSenderId: "954513581815",
    appId: "1:954513581815:web:030c621686b482798855f2",
    measurementId: "G-HCZWBXJ39Q"
  };
  // Initialize Firebase and Firestore
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
  
export { db }