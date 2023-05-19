// Assignment code here
function generatePassword() {
  var passwordResult = "";
  var passwordLength = initiatePasswordLengthPrompt();
  if (passwordLength) {
    /* GENERATE PASSWORD
    The index of the following arrays corresponds to the options for character types provided to the visitor.
    This pattern needs to be replaced once the developer learns how to instantiate objects.
    0 = lowercase
    1 = uppercase
    2 = numeric
    3 = special

    charTypeOptions - Strings representing the total characters for each option.
    charTypeSelections - Boolean array indicating which character types were selected from the confirm dialog boxes.
  */
    var charTypeSelections = [];
    charTypeSelections.push(initiateLowercaseCharacterConfirm());
    charTypeSelections.push(initiateUppercaseCharacterConfirm());
    charTypeSelections.push(initiateNumericCharacterConfirm());
    charTypeSelections.push(initiateSpecialCharacterConfirm());
    var totalSelections = charTypeSelections.filter(Boolean);
    if (totalSelections.length == 0) {
      alert(
        "You did not select any options....this application does not support the types of characters that you want."
      );
      return;
    }
    /*
      SPECIAL SAVE FOR PRETTIER CTRL + '
    */
    const charTypeOptions = [
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "0123456789",
      " !”#$%&’()*+,-./\\:;<=>?@[]^_`{|}~", //                                            PRETTTTIIIERRRR
    ];
    var tempPassword = "";
    var numCharsToSelect = Math.ceil(passwordLength / totalSelections.length);
    for (i = 0; i < charTypeSelections.length; i++) {
      if (charTypeSelections[i]) {
        tempPassword += randomlySelectChars(
          numCharsToSelect,
          charTypeOptions[i]
        );
      }
    }
    var passwordCharArray = tempPassword.split("");
    passwordCharArray.sort(function () {
      return Math.random() - 0.5;
    });
    tempPassword = passwordCharArray.join("");
    var passwordCharDifference = tempPassword.length - passwordLength;
    if (passwordCharDifference > 0) {
      passwordResult = tempPassword.slice(passwordCharDifference);
    } else if (passwordCharDifference == 0) {
      passwordResult = tempPassword;
    } else {
      alert(
        "Congrats, you found a bug because the developer doesn't know how to math or clean up characters!  NO PASSWORD FOR YOU!"
      );
      return;
    }
    return passwordResult;
    //GENERATE PASSWORD F() END
  }
}
function initiatePasswordLengthPrompt() {
  var rawPasswordLength = prompt(
    "What is the number of characters that your password should have?"
  );
  if (rawPasswordLength === null || rawPasswordLength === "") {
    return; //Assume the user hit cancel...even if they hit ok without entering a value.
  }
  var passwordLength = parseInt(rawPasswordLength);
  if (Number.isInteger(passwordLength)) {
    var maxAttempts = 5;
    var numAttempts = 0;
    while (
      !isPasswordLengthValid(passwordLength) &&
      numAttempts < maxAttempts
    ) {
      passwordLength = prompt(
        "The number of characters has to be at least 8 and less than 128."
      );
      numAttempts++;
    }
  } else {
    humorousSoberUpAlert();
    return;
  }
  if (isPasswordLengthValid(passwordLength)) {
    return passwordLength;
  } else {
    humorousSoberUpAlert();
  }
}
function isPasswordLengthValid(passLength) {
  return passLength >= 8 && passLength < 128;
}
function humorousSoberUpAlert() {
  alert(
    "Sober up, click 'Generate Password' again, and when prompted for the NUMBER of characters, THEN enter an integer (8, 9, 10...)"
  );
}
function initiateLowercaseCharacterConfirm() {
  return confirm("Does your password need lowercase characters?");
}
function initiateUppercaseCharacterConfirm() {
  return confirm("Does your password need uppercase characters?");
}
function initiateNumericCharacterConfirm() {
  return confirm("Does your password need numeric characters?");
}
function initiateSpecialCharacterConfirm() {
  return confirm("Does your password need special characters?");
}
function randomlySelectChars(numCharsToSelect, charDomain) {
  var resultChars = "";
  for (j = 0; j < numCharsToSelect; j++) {
    resultChars += charDomain.charAt(
      Math.floor(Math.random() * charDomain.length)
    );
  }
  return resultChars;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("why you fire on load");
  console.log(this);
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener(
  "click",
  function () {
    writePassword();
  },
  false
);
