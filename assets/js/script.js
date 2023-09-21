// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
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
    let userResponse = prompt("Include lowercase letters? (Y/N)", "")
    if (userResponse.toUpperCase()=="Y" || userResponse.toUpperCase()=="YES") {
      characterPool = characterPool + lowercaseAlpha;
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
