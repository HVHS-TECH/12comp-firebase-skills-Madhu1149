//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Madhulika>, Term 2 2025
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAuth, onAuthStateChanged }  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";



/**************************************************************/
//Firevase Configuration
/**************************************************************/
const firebaseConfig = {
    apiKey: "AIzaSyAVR1PCSvRfuJtVBBaTOS_Q1l6M9Si0zwk",
    authDomain: "comp-2025-tirindi-madhulika.firebaseapp.com",
    databaseURL: "https://comp-2025-tirindi-madhulika-default-rtdb.firebaseio.com",
    projectId: "comp-2025-tirindi-madhulika",
    storageBucket: "comp-2025-tirindi-madhulika.firebasestorage.app",
    messagingSenderId: "492713596983",
    appId: "1:492713596983:web:1a462d99a51bd1cef607b2",
    measurementId: "G-RNYJ2GKKLL"
  };

/**************************************************************/
// EXPORT FUNCTIONS
/**************************************************************/
export { 
    fb_initialise };

export { 
    fb_authenticate };

export { 
    fb_detectAuthState };

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

function fb_initialise() {
    console.log('%c fb_initialise(): ', 
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    
                const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);    
                const FB_GAMEDB = getDatabase(FB_GAMEAPP);           
                console.info(FB_GAMEDB);                          
            
                const statusEl = document.getElementById("p_fbInitialise");
                if (statusEl) {
                    statusEl.innerHTML = "Initialised";
                }
}

function fb_authenticate(){
    from './fb_io.mjs';
    window.fb_authenticate   = fb_authenticate;
}

function fb_detectAuthState(){
    from './fb_io.mjs';
    window.fb_detectAuthState   = fb_detectAuthState;
}




/**************************************************************/
// END OF CODE
/**************************************************************/