// Assignment code here
function generatePassword() {
    let length = window.prompt('Enter the number of characters for your password:');

    length = parseInt(length, 10);

    if (typeof length === 'number' && length < 8) {
        window.alert('Your password must be at least 8 characters.');
    }
    if (typeof length === 'number' && length > 128) {
        window.alert('Your password must be less than 128 characters.');
    }
    if (!length) {
        window.alert('Password length must be entered as a number.');
    } else {
        window.confirm('Click OK to confirm including special characters.');
        window.confirm('Click OK to confirm including numbers.');
        window.confirm('Click OK to confirm including lowercase characters.');
        window.confirm('Click OK to confirm including uppercase characters.');
    }
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