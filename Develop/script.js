// Assignment code here
var writePassword = function() {
  var promptChooseLength = window.prompt("How long would you like your password to be? Please choose a number between 8 and 128")
  //validate prompt characters
  if (promptChooseLength === "" || promptChooseLength === null || promptChooseLength < 8 || promptChooseLength > 128) {
    window.alert("Please choose a valid password length. Password must between 8 and 128 characters")
    return writePassword()
  }
  confirmLower = window.confirm("If you'd like to include lower case letters, please click 'OK'")
  confirmUpper = window.confirm("If you'd like to include upper case letters, please click 'OK'")
  confirmNum = window.confirm("If you'd like to include numbers, please click 'OK'")
  confirmSpecial = window.confirm("If you'd like to include special characters, please click 'OK'")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

