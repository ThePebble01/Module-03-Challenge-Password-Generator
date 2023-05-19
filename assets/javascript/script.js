// Assignment code here
function handleGeneratePasswordOnClick() {
  var passwordLength = initiatePasswordLengthPrompt();
  if (passwordLength) {
    /* GENERATE PASSWORD F()
    The index of the following arrays corresponds to the options for character types provided to the visitor.
    0 = lowercase
    1 = uppercase
    2 = numeric
    3 = special

    charTypeOptions - Strings representing the total characters for each option.
    charTypeSelections - Boolean array indicating which character types were selected.
  */
    var charTypeSelections = [];
    charTypeSelections.push(initiateLowercaseCharacterConfirm());
    charTypeSelections.push(initiateUppercaseCharacterConfirm());
    charTypeSelections.push(initiateNumericCharacterConfirm());
    charTypeSelections.push(initiateSpecialCharacterConfirm());
    var totalSelections = charTypeSelections.filter(Boolean);
    console.log("total selections! " + totalSelections);
    if (totalSelections.length == 0) {
      alert(
        "You did not select any options....this application does not support the characters you want."
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
      "!@#$%^&*", //                                            PRETTTTIIIERRRR
    ];
    var passwordResult = "";
    var tempPassword = "";
    var numCharsToSelect = Math.ceil(passwordLength / totalSelections.length);
    for (i = 0; i < charTypeSelections.length; i++) {
      if (charTypeSelections[i]) {
        console.log("skerp " + passwordLength);
        console.log("skerp " + totalSelections.length);
        console.log("char options " + charTypeOptions[i]);
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
        "Congrats, you found a bug because the developer doesn't know how to math!  NO PASSWORD FOR YOU!"
      );
      return;
    }
    console.log(passwordResult);
    return passwordResult;
    //GENERATE PASSWORD F() END
  }
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
function randomlySelectLowercaseChars(numCharsToSelect) {
  const allLowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var resultLowerCaseChars;
  for (i = 0; i < numCharsToSelect; i++) {
    resultLowerCaseChars = allLowercaseChars.charAt(
      Math.floor(Math.random() * numCharsToSelect)
    );
  }
  return resultLowerCaseChars;
}
function randomlySelectUppercaseChars() {
  const allUppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
function randomlySelectUppercaseChars() {
  const numericChars = "0123456789";
}
function randomlySelectSpecialChars() {
  const numericChars = "!@#$%^&*";
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
function isPasswordLengthValid(pLength) {
  return pLength >= 8 && pLength < 128;
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

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  /* 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  */
}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword());
