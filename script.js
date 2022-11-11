// Assignment code here
var guaranteedString = '';
var blankString = '';

var lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
var numberString = '0123456789';
var specialString = " \!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\]^\_\`\{\|\}\~";
// console.log(specialString);

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
        let lowercase = window.confirm('Click OK to confirm including lowercase characters.');
        if (lowercase === true) {
            let randomNumber = Math.floor(Math.random() * lowercaseString.length);
            let guaranteed = lowercaseString.charAt(randomNumber);
            guaranteedString += guaranteed;
            console.log(guaranteedString);

            blankString += lowercaseString;
        }

        let uppercase = window.confirm('Click OK to confirm including uppercase characters.');
        if (uppercase === true) {
            let randomNumber = Math.floor(Math.random() * uppercaseString.length);
            let guaranteed = uppercaseString.charAt(randomNumber);
            guaranteedString += guaranteed;
            console.log(guaranteedString);

            blankString += uppercaseString;
        }

        number = window.confirm('Click OK to confirm including numbers.');
        if (number === true) {
            let randomNumber = Math.floor(Math.random() * numberString.length);
            let guaranteed = numberString.charAt(randomNumber);
            guaranteedString += guaranteed;
            console.log(guaranteedString);
            
            blankString += numberString;
        }

        special = window.confirm('Click OK to confirm including special characters.');
        if (special === true) {
            let randomNumber = Math.floor(Math.random() * specialString.length);
            let guaranteed = specialString.charAt(randomNumber);
            guaranteedString += guaranteed;
            console.log(guaranteedString);
            
            blankString += specialString;
        }

        var result = '';
        result += guaranteedString;
        console.log(result);
        console.log(result.length);
        newLength = passLength - result.length;
        console.log(newLength);

        // maybe make if statements and i would loop until whatever length-??
        // if (lowercase === true) {
        //     for (let i = 0; i < passLength; i++) {
        //         let randomNumber = Math.floor(Math.random() * blankString.length);
        //         let randomChar = blankString.charAt(randomNumber);
        //         result += randomChar;
        //     }
        // }

        for (let i = 0; i < newLength; i++) {
            let randomNumber = Math.floor(Math.random() * blankString.length);
            let randomChar = blankString.charAt(randomNumber);
            result += randomChar;
        }
        
        return result;
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