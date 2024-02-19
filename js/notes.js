//*1. Create an external JSON or js file containing information about the sounds you want to use. Import the file in here:  */
// import referanceWord from "the location of the file"
// Remember:
// to use type="module" for this js file when using imports
// to use assert {type: "json"} if using a json file
// examples of how the structure can look is in the data folder

//* ////////////////////////////////////// */

//*1. Catch the html element with id drumkit: */
const drumKit = document.getElementById("drumkit");

//* ////////////////////////////////////// */

//*2. Write a console log for the fetched sounds so you know how the structure is and how you can use it */
console.log(sounds);

//* ////////////////////////////////////// */

function playSound(sound) {
  //3.1. make a variable that creates a button element with .createElement

  // add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed
  const buttonElement = document.createElement("button");
  buttonElement.textContent = sound.key;

  //3.2. make a variables that create an audio element with .createElement
  //the audio element that is created should have the src equal to the file source
  //the audio element that is created should have the id equal to the textcontent created in 3.1.

  const audioElement = document.createElement("audio");
  audioElement.src = sound.file;
  audioElement.id = sound.key;

  //3.3. add an eventlistner to the whole page that:
  //actives when pressing a keyboard key (first parameter of the eventlistener)
  //runs a nameless function with parameter event (refering to the key pressed)

  document.addEventListener("keydown", (event) => {
    // 3.3.1. inside of the eventlistner:

    // create a variable that refers to the key pressed
    const keyPressed = event.key;
    // make a conditional logic that asks if the variable created just above is the same as the sound key that should be pressed (the key "key" in the js or JSON data you created)
    if (keyPressed === sound.key) {
      // if the conditional is true, play the audio element that you created in 3.2.
      audioElement.play();
    }
  });

  //3.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that:
  //actives when releasing a keyboard key (first parameter of the eventlistener)

  drumKit.appendChild(buttonElement);
}

// 3.4.1. inside of the eventlistner:

// pauses the audio element
// sets the current time of the audio element to 0

//3.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time

//3.6. append the created button and audio element to the html element you refered in 1.

///--------------------------

//*1. Create an external JSON or js file containing information about the sounds you want to use. Import the file in here:  */
// import referanceWord from "the location of the file"
// Remember:
// to use type="module" for this js file when using imports
// to use assert {type: "json"} if using a json file
// examples of how the structure can look is in the data folder

import { sounds } from "../data/soundsJSexample.js";

//* ////////////////////////////////////// */

//*1.1. Catch the html element with id drumkit: */

//* ////////////////////////////////////// */

//*1.3. Write a console log for the fetched sounds so you know how the structure is and how you can use it */

//* ////////////////////////////////////// */

//*2. Create the function with a parameter that is refering to the sound used that does the following: */

//2.1. make a variable that creates a button element with .createElement

// add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed

//2.2. make a variables that create an audio element with .createElement
//the audio element that is created should have the src equal to the file source
//the audio element that is created should have the id equal to the textcontent created in 2.1.

//2.3. add an eventlistner to the whole page that:
//actives when pressing a keyboard key (first parameter of the eventlistener)
//runs a nameless function with parameter event (refering to the key pressed)

// 2.3.1. inside of the eventlistner:

// create a variable that refers to the key pressed
// make a conditional logic that asks if the variable created just above is the same as the sound key that should be pressed (the key "key" in the js or JSON data you created)
// if the conditional is true, play the audio element that you created in 2.2.

//2.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that:
//actives when releasing a keyboard key (first parameter of the eventlistener)

// 2.4.1. inside of the eventlistner:

// pauses the audio element
// sets the current time of the audio element to 0

//2.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time

//2.6. append the created button and audio element to the html element you refered in 1.

//* ///////////////////////////////////////////////////////////////////////////////////////////// */

//*3. Create a function that loops over the sounds (from the data file you created). Use that function created in 2. to use the logic there to create the buttons. I prefer that you use .forEach or .map */

//* ////////////////////////////////////// */

//*4. Call on the function that loops over the sounds and creates the buttons */

//* ////////////////////////////////////// */
