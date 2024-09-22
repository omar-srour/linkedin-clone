
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnUtyvTz3oaTNcTB5rgsj_53zlazs3v8Y",
    authDomain: "linkedin-clone-ad309.firebaseapp.com",
    projectId: "linkedin-clone-ad309",
    storageBucket: "linkedin-clone-ad309.appspot.com",
    messagingSenderId: "6917228717",
    appId: "1:6917228717:web:855038cc9f9c8a040a9e24",
    measurementId: "G-VNBFFN4QD0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db= firebaseApp.firestore();
const auth =firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
const storage =firebase.storage();


export{auth,provider,storage}
export default db



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBnUtyvTz3oaTNcTB5rgsj_53zlazs3v8Y",
//     authDomain: "linkedin-clone-ad309.firebaseapp.com",
//     projectId: "linkedin-clone-ad309",
//     storageBucket: "linkedin-clone-ad309.appspot.com",
//     messagingSenderId: "6917228717",
//     appId: "1:6917228717:web:855038cc9f9c8a040a9e24",
//     measurementId: "G-VNBFFN4QD0"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(firebaseApp);

// export { auth, provider, storage };
// export default db;








































// // استيراد الوحدات المطلوبة من Firebase SDK

// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// // إعدادات تكوين Firebase لموقعك
// const firebaseConfig = {
//     apiKey: "AIzaSyBnUtyvTz3oaTNcTB5rgsj_53zlazs3v8Y",
//     authDomain: "linkedin-clone-ad309.firebaseapp.com",
//     projectId: "linkedin-clone-ad309",
//     storageBucket: "linkedin-clone-ad309.appspot.com",
//     messagingSenderId: "6917228717",
//     appId: "1:6917228717:web:855038cc9f9c8a040a9e24",
//     measurementId: "G-VNBFFN4QD0"
// };

// // تهيئة Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider();
// const storage = getStorage(firebaseApp);

// // تصدير الخدمات للاستخدام في أماكن أخرى من التطبيق
// export { auth, provider, storage };
// export default db;










