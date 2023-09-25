
var generateBtn = document.querySelector("#generate");

// writePasword is called when user clicks the "Generate" button on the page
// Asks the user which characters to include, gets desired length of the password, and generates the password and pushes it to the page
function writePassword() {
  var password = "";
  var passwordLength = 0;
  var passwordText = document.querySelector("#password");
  var specialChars = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var characterPool = "";
  var userResponse = "";

  var validResponse = false;

  // Main input function
  // promptStr - the prompt that the user will be given
  // poolAdditoon - the string to append to characterPool if the user answers yes to the prompt
  function inputLoop(promptStr, poolAddition) {
    do {
      userResponse = prompt(promptStr, "");
      if (userResponse.toUpperCase()=="Y" || userResponse.toUpperCase()=="YES") {
        characterPool = characterPool + poolAddition;
        validResponse = true;
      } else if (userResponse.toUpperCase()=="N" || userResponse.toUpperCase()=="NO") {
        validResponse = true;
      }
    }
    while (validResponse === false);
  }
  
  // Main input loop - repeats if the user doesn't pick to add any of the choices to the password character pool
  do {
    inputLoop("Include lowercase letters? (Y/N)", lowercaseAlpha);
    inputLoop("Include uppercase letters? (Y/N)", uppercaseAlpha);
    inputLoop("Include numbers? (Y/N)", numbers);
    inputLoop("Include special characters? (Y/N)", specialChars);
  }
  while (characterPool=="");
  
  // Ask user for length of password - Minimum length: 8 Maximum length: 128 - question repeats until they enter a valid length
  validResponse = false;
  do {
    userResponse = prompt("Password Length (8-128)", "")
    if (userResponse >= 8 && userResponse<=128) {
      passwordLength = userResponse;
      validResponse = true;
    } 
  }
  while (validResponse === false);

  // Generate password from the pool of characters selected by the user
  for (i=0; i<passwordLength; i++) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
