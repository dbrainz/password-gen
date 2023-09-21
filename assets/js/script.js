// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var specialChars = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var characterPool = "";
  var userResponse = "";

  var validResponse = false;

  // Check whether the user wants lowercase letters to be included
  do {
    userResponse = prompt("Include lowercase letters? (Y/N)", "")
    if (userResponse.toUpperCase()=="Y" || userResponse.toUpperCase()=="YES") {
      characterPool = characterPool + lowercaseAlpha;
      validResponse = true;
    } else if (userResponse.toUpperCase()=="N" || userResponse.toUpperCase()=="NO") {
      validResponse = true;
    }
  }
  while (validResponse === false);

  // Check whether the user wants uppercase letters to be included
  validResponse = false;
  do {
      userResponse = prompt("Include uppercase letters? (Y/N)", "")
      if (userResponse.toUpperCase()=="Y" || userResponse.toUpperCase()=="YES") {
        characterPool = characterPool + uppercaseAlpha;
        validResponse = true;
      } else if (userResponse.toUpperCase()=="N" || userResponse.toUpperCase()=="NO") {
        validResponse = true;
      }
    }
  while (validResponse === false);

  // Check whether the user wants numbers to be included
  validResponse = false;
  do {
    userResponse = prompt("Include numbers? (Y/N)", "")
    if (userResponse.toUpperCase()=="Y" || userResponse.toUpperCase()=="YES") {
      characterPool = characterPool + numbers;
      validResponse = true;
    } else if (userResponse.toUpperCase()=="N" || userResponse.toUpperCase()=="NO") {
      validResponse = true;
    }
  }
  while (validResponse === false);

  // Check whether the user wants special characters to be included
  validResponse = false;
  do {
    userResponse = prompt("Include special characters? (Y/N)", "")
    if (userResponse.toUpperCase()=="Y" || userResponse.toUpperCase()=="YES") {
      characterPool = characterPool + specialChars;
      validResponse = true;
    } else if (userResponse.toUpperCase()=="N" || userResponse.toUpperCase()=="NO") {
      validResponse = true;
    }
  }
  while (validResponse === false);

  console.log(characterPool);




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
