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
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


/**************************************************************/
//Firevase Configuration
/**************************************************************/
const FB_GAMECONFIG = {
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

export { 
    fb_signout };

export { 
    fb_RecToFirebase };

export { 
    fb_Destruction_Button };

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
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log("working")
    })
    .catch((error) => {
        console.log("not working")
    });
}

function fb_detectAuthState(){
    const AUTH = getAuth();
    onAuthStateChanged(AUTH, (user) => {
        if (user) {
            console.log("working")
        } else {
            console.log("working")
        }
    }, (error) => {
        console.log("not working")
    });
}

function fb_signout(){
    const AUTH = getAuth();
    signOut(AUTH).then(() => {
        console.log("working")
    })
    .catch((error) => {
        console.log("not working")
    });
}


function fb_RecToFirebase(){
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);    
    const FB_GAMEDB = getDatabase(FB_GAMEAPP);      
    const dbReference= ref(FB_GAMEDB,"friction/Author");
    set(dbReference, {Book_number:539}).then(() => {
        console.log("working")
    }).catch((error) => {
        console.log("not working")
    });
}

function fb_Destruction_Button(){
       console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    //https://comp-firebaseskills-default-rtdb.asia-southeast1.firebasedatabase.app
    // Your web app's Firebase configuration
    /*   const FB_CONFIG = {
           apiKey: "AIzaSyAC9lbREKwJJ95pZUJ7Wy3hI_QfivE2a34",
           authDomain: "comp-firebaseskills.firebaseapp.com",
           projectId: "comp-firebaseskills",
           storageBucket: "comp-firebaseskills.firebasestorage.app",
           messagingSenderId: "634491601796",
           appId: "1:634491601796:web:1c48be8af741f25bd353d1"
       }; */
    const FB_CONFIG = {
        apiKey: "AIzaSyB5B5P_sSmNTN7RjkaV-I2TKNUJWj0cF1A",
        authDomain: "comp-2025-carmen-o-grady.firebaseapp.com",
        databaseURL: "https://comp-2025-carmen-o-grady-default-rtdb.firebaseio.com",
        projectId: "comp-2025-carmen-o-grady",
        storageBucket: "comp-2025-carmen-o-grady.appspot.com",
        messagingSenderId: "1046417795904",
        appId: "1:1046417795904:web:25cff308e04c73eb5968a5",
        measurementId: "G-BGRNW3X6K8"
    };
    // Initialize Firebase
    console.log(FB_CONFIG)
    const FB_APP = initializeApp(FB_CONFIG);
    console.log(FB_APP);
    var fb_gamedb = getDatabase(FB_APP);
    console.log(fb_gamedb);
    document.getElementById("p_fbInitialise").innerHTML = "Initialised";
}
/**************************************************************/
// END OF CODE
/**************************************************************/