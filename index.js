// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ7uPLr9i23Vva0yBzz3YQ4cgIywRRNmA",
  authDomain: "registration-310c5.firebaseapp.com",
  databaseURL: "https://registration-310c5-default-rtdb.firebaseio.com",
  projectId: "registration-310c5",
  storageBucket: "registration-310c5.appspot.com",
  messagingSenderId: "98589376762",
  appId: "1:98589376762:web:a8eab52be264c69c020943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

window.oncontextmenu=function(){
  alert('Right Click Is Disable');
  return false;
}
function logout(){
  localStorage.removeItem('dd');
  localStorage.removeItem('Names');
  localStorage.removeItem('login_username');
  localStorage.removeItem('login_email');
  localStorage.removeItem('name');
  localStorage.removeItem('OPT55551');
  localStorage.removeItem('loglevel');
  localStorage.removeItem('pcc');
  localStorage.removeItem('ROOM_NAME');
  localStorage.removeItem('User');
  localStorage.removeItem('GROUP_ROOM_NAME');
  localStorage.removeItem('new_email');
  localStorage.removeItem('OTP1');
  localStorage.removeItem('forgot_email');
  localStorage.removeItem('OTP');
  localStorage.removeItem('ROOM_NAME');
  localStorage.removeItem('username');
  localStorage.removeItem('picture');
  localStorage.removeItem('email');
  localStorage.removeItem('ext');
  localStorage.removeItem('login_password');

  window.location = 'index.html';
}
function back(){
  window.location = 'main.html';
}