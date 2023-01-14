// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlm-ejwKt19wGlhFJJ4TfsWTv5bDorsTE",
  authDomain: "fir-auth-14884.firebaseapp.com",
  projectId: "fir-auth-14884",
  storageBucket: "fir-auth-14884.appspot.com",
  messagingSenderId: "841820331444",
  appId: "1:841820331444:web:290b05512249ad3acd26e1"
};



const app=firebase.initializeApp(firebaseConfig)
export default app;
