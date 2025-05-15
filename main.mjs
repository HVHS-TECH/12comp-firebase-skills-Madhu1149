/**************************************************************/
// main.mjs
// Main entry for index.html
// Written by <Madhulika Tirindi>, Term 2 2025
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c main.mjs', 
    'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the constants & functions required from fb_io module
import { fb_initialise }
    from './fb_io.mjs';
    window.fb_initialise   = fb_initialise;

import { fb_authenticate }
    from './fb_io.mjs';
    window.fb_authenticate   = fb_authenticate;


import { fb_detectAuthState }
    from './fb_io.mjs';
    window.fb_detectAuthState   = fb_detectAuthState;


import { fb_signout }
    from './fb_io.mjs';
    window.fb_signout   = fb_signout;

import { fb_RecToFirebase }
    from './fb_io.mjs';
    window.fb_RecToFirebase   = fb_RecToFirebase;

import { fb_ReadSpecificFirebase }
    from './fb_io.mjs';
    window.fb_ReadSpecificFirebase   = fb_ReadSpecificFirebase;

import { fb_ReadAllRec }
    from './fb_io.mjs';
    window.fb_ReadAllRec   = fb_ReadAllRec;

import { fb_UpdateFbRec }
    from './fb_io.mjs';
    window.fb_UpdateFbRec   = fb_UpdateFbRec;



import { fb_Destruction_Button}
    from './fb_io.mjs';
    window.fb_Destruction_Button   = fb_Destruction_Button;
/**************************************************************/
// index.html main code
/**************************************************************/


/**************************************************************/
//   END OF CODE
/**************************************************************/
