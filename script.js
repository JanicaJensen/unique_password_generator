
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "_"];

  var generatedPass = [];
  var userData = [];

 

  
  var characterNumberPrompt = prompt("Insert desired character length (min 8 - max 128:)");
  
  if (characterNumberPrompt < 8) {
    alert("Password is too short. 📏 ");
    return "";
  }
  if (characterNumberPrompt > 128) {
    alert("Password is too long. 📏 ");
    return "";
  }

  var numbersPrompt = confirm("Would you like your password to contain numbers?");
  var uppercasePrompt = confirm("Would you like uppercase letters in your password?");
  var lowercasePrompt = confirm("Would you like lower case letters in your password?");
  var specialPrompt = confirm("Would you like special characters in your password?");



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

  

for (var i=0; i < characterNumberPrompt; i++) {
  userData.push (generatedPass[Math.floor(Math.random() * generatedPass.length)]);
}

console.log(generatedPass);

return userData.join("");
}


function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
