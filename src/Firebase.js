// import firebase from "firebase/app"
// import 'firebase/firestore'; 
// import 'firebase/auth';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpFCX2DdMOjbbUomp_80Rv7kPhRyASfHY",
  authDomain: "react-auth-app-e44fb.firebaseapp.com",
  projectId: "react-auth-app-e44fb",
  storageBucket: "react-auth-app-e44fb.appspot.com",
  messagingSenderId: "695947184173",
  appId: "1:695947184173:web:38665c61efd4f368e150a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//initialize firebase authentication and get a reference to the service
export const auth = getAuth(app);
// export const auth = firebase.auth();

// export const firestore = firebase.firestore();