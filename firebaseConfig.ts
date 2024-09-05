// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCv3MOSPpoioQW8AFi-WlZhqFnnrXmhKo4",
  authDomain: "joandal.firebaseapp.com",
  databaseURL: "https://joandal-default-rtdb.firebaseio.com",
  projectId: "joandal",
  storageBucket: "joandal.appspot.com",
  messagingSenderId: "728074864621",
  appId: "1:728074864621:web:3d543134c0bee1241c09e4",
  measurementId: "G-1DDJ1426TG"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth(app);

export { auth };