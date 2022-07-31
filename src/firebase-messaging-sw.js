// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyD73PcJ2ngVKkPDXBxtfEbQF5QRFreAn9Y",
    authDomain: "tawsela-79bd0.firebaseapp.com",
    projectId: "tawsela-79bd0",
    storageBucket: "tawsela-79bd0.appspot.com",
    messagingSenderId: "1062423547790",
    appId: "1:1062423547790:web:74daf87e22f7d65f46dedf",
    measurementId: "G-01BYFQ7X9B"
});

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// const messaging = firebase.messaging();