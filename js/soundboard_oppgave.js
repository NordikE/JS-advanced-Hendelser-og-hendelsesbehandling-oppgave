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

const drumkit = document.getElementById("drumkit");

//*1.3. Write a console log for the fetched sounds so you know how the structure is and how you can use it */

//* ////////////////////////////////////// */
console.log(sounds);

//*2. Create the function with a parameter that is refering to the sound used that does the following: */
function createButtonAndAudio(sound) {
  //2.1. make a variable that creates a button element with .createElement
  const button = document.createElement("button");

  // add textContent to the created buttonElement. Textcontent should be either the file name and/or key needed to be pressed
  const buttonText = ["Don't", "Press", "These", "Buttons!"];
  button.textContent = buttonText[sounds.indexOf(sound)];

  //2.2. make a variables that create an audio element with .createElement
  //the audio element that is created should have the src equal to the file source
  //the audio element that is created should have the id equal to the textcontent created in 2.1.
  const audio = document.createElement("audio");
  audio.src = sound.file;
  audio.id = button.textContent;

  //2.3. add an eventlistner to the whole page that:
  //actives when pressing a keyboard key (first parameter of the eventlistener)
  //runs a nameless function with parameter event (refering to the key pressed)

  // 2.3.1. inside of the eventlistner:

  // create a variable that refers to the key pressed
  // make a conditional logic that asks if the variable created just above is the same as the sound key that should be pressed (the key "key" in the js or JSON data you created)
  // if the conditional is true, play the audio element that you created in 2.2.

  window.addEventListener("keydown", (event) => {
    const keyPressed = event.key;
    if (keyPressed === sound.key) {
      audio.play();
    }
  });

  //2.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that:
  //actives when releasing a keyboard key (first parameter of the eventlistener)

  // 2.4.1. inside of the eventlistner:

  // pauses the audio element
  // sets the current time of the audio element to 0
  window.addEventListener("keyup", () => {
    audio.pause();
    audio.currentTime = 0;
  });

  //2.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time
  button.addEventListener("click", () => {
    audio.play();
  });

  //2.6. append the created button and audio element to the html element you refered in 1.
  drumkit.appendChild(button);
  drumkit.appendChild(audio);
}

//* ///////////////////////////////////////////////////////////////////////////////////////////// */

//*3. Create a function that loops over the sounds (from the data file you created). Use that function created in 2. to use the logic there to create the buttons. I prefer that you use .forEach or .map */

//* ////////////////////////////////////// */
function createButtonsForSounds() {
  sounds.forEach((sound) => createButtonAndAudio(sound));
}

//*4. Call on the function that loops over the sounds and creates the buttons */

//* ////////////////////////////////////// */
createButtonsForSounds();
