import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: Process.env.apiKey.APIKEY,
    authDomain: "foodapp-6d160.firebaseapp.com",
    projectId: "foodapp-6d160",
    storageBucket: "foodapp-6d160.appspot.com",
    messagingSenderId: "928215634482",
    appId: "1:928215634482:web:b3c87e3a15a392937b622b"
};

const app = initializeApp(firebaseConfig);

export default app;