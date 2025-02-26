// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDUZl2TeGaGu_nJQucnmM8uFLA2BkHxxLQ",
  authDomain: "attendease-3a1s.firebaseapp.com",
  projectId: "attendease-3a1s",
  storageBucket: "attendease-3a1s.firebasestorage.app",
  messagingSenderId: "605891381451",
  appId: "1:605891381451:web:bf23cb942acbc15b78f34e",
  measurementId: "G-57YFNCZQW2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { storage,auth } ;