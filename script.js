// Assignment code here

var lowercaseString = 'abcdefghijklmnopqrstuvwxyz'; // length = 26
var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // length = 26
var lowUp = randomString1 + randomString2; // length = 52
// var randomString3 = '0123456789'; // length = 10
// var randomString4 = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function generatePassword() {
    let passLength = window.prompt('Enter the number of characters for your password:');

    passLength = parseInt(passLength, 10);

    if (typeof passLength === 'number' && passLength < 8) {
        window.alert('Your password must be at least 8 characters.');
    }
    if (typeof passLength === 'number' && passLength > 128) {
        window.alert('Your password must be less than 128 characters.');
    }
    if (!passLength) {
        window.alert('Password length must be entered as a number.');
    } else {
        let lowercaseChar = window.confirm('Click OK to confirm including lowercase characters.');
        let uppercaseChar = window.confirm('Click OK to confirm including uppercase characters.');
        // number = window.confirm('Click OK to confirm including numbers.');
        // specialChar = window.confirm('Click OK to confirm including special characters.');

        if (lowercaseChar === true) {
            var result = '';
            for (let i = 0; i < passLength; i++) {
                let randomNumber = Math.floor(Math.random() * 26);
                console.log(randomNumber);
                let randomChar = randomString1.charAt(randomNumber);
                console.log(randomChar);
                result += randomChar;
            }
            return result;
        }

        if (uppercaseChar === true) {
            var result = '';
            for (let i = 0; i < passLength; i++) {
                let randomNumber = Math.floor(Math.random() * 26);
                let randomChar = randomString2.charAt(randomNumber);
                console.log(randomChar);
                result += randomChar;
            }
            return result;
        }
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