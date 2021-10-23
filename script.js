
var passwordStr = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specials: "!@#$%^&*()",
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 
var passwordCharSet = ""

/*need to prompt user
needs pass length
needs confirm lower, upper, numbers, specials
validate
generate the password
then display the genenerated password on the page
*/
  var length = (window.prompt("How long would you like your password to be? Please choose a number between 8 and 128"))
  //validate prompt character length
  if (isNaN(length)  || length < 8 || length > 128) {  
    prompt("Please enter a valid password length. Password must between 8 and 128 characters") 
   return null}

  var lowercase = window.confirm("If you'd like to include lower case letters, please click 'OK'")
  var uppercase = window.confirm("If you'd like to include upper case letters, please click 'OK'")
  var numbers = window.confirm("If you'd like to include numbers, please click 'OK'")
  var specials = window.confirm("If you'd like to include special characters, please click 'OK'")
 
  while (!lowercase && !uppercase && !numbers && !specials) {
    window.alert("You must select at least one criteria for your password!")
    lowercase = window.confirm("If you'd like to include lower case letters, please click 'OK'")
    uppercase = window.confirm("If you'd like to include upper case letters, please click 'OK'")
    numbers = window.confirm("If you'd like to include numbers, please click 'OK'")
    specials = window.confirm("If you'd like to include special characters, please click 'OK'")}
    
    if (lowercase) {
      passwordCharSet += passwordStr.lowercase
    }
    if (uppercase) {
      passwordCharSet += passwordStr.uppercase
    }
    if (numbers) {
      passwordCharSet += passwordStr.numbers
    }
    if (specials) {
      passwordCharSet += passwordStr.specials
    }

  var password = ""
  for (i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
    
    return password
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

