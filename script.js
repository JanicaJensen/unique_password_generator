
/* Assignment Code - this was provided and is selecting the #generate button
to link  with the variable generateBtn*/
var generateBtn = document.querySelector("#generate");

// This function name was provided and is creating the function that will be used to generate the password.
function generatePassword() {

  /* These are the arrays that are going to be used to generate the
  password, there are four arrays stored in variables named for the different
  characters.  */

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "_"];

  /*This is creating a blank variable that will eventually be filled in 
  with the concat of the various variables.*/

  var generatedPass = [];

  /* This is an empty variable for input from the user about character length and 
  desired characters to be included in password- to the following */
  
  var userData = [];

 

  /* This is creating a variable for the prompt which will ask how many characters
  are desired in the password.*/

  var characterNumberPrompt = prompt("Insert desired character length (min 8 - max 128:)");
  
  /*This is deciding whether the number input from the user is a valid
  amount of characters for the password generator to handle. We set the
  parameters between 8 and 128. It will send users back to the beginning if 
  they don't choose correctly. */

  if (characterNumberPrompt < 8) {
    alert("Password is too short. 📏 ");
    return "";
  }
  if (characterNumberPrompt > 128) {
    alert("Password is too long. 📏 ");
    return "";
  }

  /* These are the prompts that will be presented to the user to choose 
  what properties should be applied to their password.  */
  var numbersPrompt = confirm("Would you like your password to contain numbers?");
  var uppercasePrompt = confirm("Would you like uppercase letters in your password?");
  var lowercasePrompt = confirm("Would you like lower case letters in your password?");
  var specialPrompt = confirm("Would you like special characters in your password?");

/* The following if statements are checking whether the various prompts
are "true" and concatenating them together. They reference the variables that contain
the arrays with all of the available characters. */

  if (numbersPrompt) {
    generatedPass = generatedPass.concat(number);
  }

  if (uppercasePrompt) {
    generatedPass = generatedPass.concat(uppercase);
  }

  if (lowercasePrompt) {
    generatedPass = generatedPass.concat(lowercase);
  }

  if (specialPrompt) {
    generatedPass = generatedPass.concat(special);
  }

  
/* This is adding random items from the password character variables to what
will be the generatedpassword. The math.random is choosing randomly and the .length
is setting the length. */

for (var i=0; i < characterNumberPrompt; i++) {
  userData.push (generatedPass[Math.floor(Math.random() * generatedPass.length)]);
}

/* This is keeping a log of what was created */

console.log(generatedPass);

/* This returns the userData variable with what was populated.*/

return userData.join("");
}

/* This is calling the writePassword function */

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* This was provided in the starter code as the event listener. */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
