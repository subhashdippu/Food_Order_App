import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyACdGX2Q-e9AECy-F26a2k85ZJx95sc7FU",
    authDomain: "foodapp-6d160.firebaseapp.com",
    projectId: "foodapp-6d160",
    storageBucket: "foodapp-6d160.appspot.com",
    messagingSenderId: "928215634482",
    appId: "1:928215634482:web:b3c87e3a15a392937b622b"
    // apiKey: process.env.APIKEY,
    // authDomain: process.env.AUTHDOMAIN,
    // projectId: process.env.PROJECTID,
    // storageBucket: process.env.STORAGEBUCKET,
    // messagingSenderId: process.env.MESSAGINGSENDERID,
    // appId: process.env.APPID
};

const app = initializeApp(firebaseConfig);

export default app;