import firebase from "firebase";
import "firebase/auth";
import "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyBcVkphaF8Pprb9pasqzY4EDSKEn76OCDA",
  authDomain: "react-cart-f7ebd.firebaseapp.com",
  projectId: "react-cart-f7ebd",
  storageBucket: "react-cart-f7ebd.appspot.com",
  messagingSenderId: "394483049495",
  appId: "1:394483049495:web:56b4f47824feb0db8aa852",
  measurementId: "G-ZRJCL1NPYY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth();
export default {
  firebaseConfig,
};
