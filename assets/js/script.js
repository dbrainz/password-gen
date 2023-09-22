// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
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
  


  inputLoop("Include lowercase letters? (Y/N)", lowercaseAlpha);
  inputLoop("Include uppercase letters? (Y/N)", uppercaseAlpha);
  inputLoop("Include numbers? (Y/N)", numbers);
  inputLoop("Include special characters? (Y/N)", specialChars);

  // Ask user for length of password - Minimum length: 8 Maximum length: 128
  validResponse = false;
  do {
    userResponse = prompt("Password Length (8-128)", "")
    if (userResponse >= 8 && userResponse<=128) {
      passwordLength = userResponse;
      validResponse = true;
    } 
  }
  while (validResponse === false);

  for (i=0; i<passwordLength; i++) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
