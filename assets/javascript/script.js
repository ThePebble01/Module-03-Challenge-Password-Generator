// Assignment code here

//LEGIT USE
function handleGeneratePasswordOnClick() {
  var passwordLength = initiatePasswordLengthPrompt();
  console.log("in handle!");
  console.log(passwordLength);
  if (passwordLength) {
    /*
    The index of the following arrays corresponds to the options for character types provided to the visitor.
    0 = lowercase
    1 = uppercase
    2 = numeric
    3 = special

    charTypeDistribution - used to control the distribution of character types in the password.
    charTypeSelections - boolean array indicating which character types were selected.
  */
    var charTypeSelections = [];
    charTypeSelections.push(initiateLowercaseCharacterConfirm());
    charTypeSelections.push(initiateUppercaseCharacterConfirm());
    charTypeSelections.push(initiateNumericCharacterConfirm());
    charTypeSelections.push(initiateSpecialCharacterConfirm());
    console.log(charTypeSelections);
    if (!charTypeSelections.every()) {
      alert(
        "You did not select any options....this application does not support the characters you want."
      );
      return;
    }
    /*
      SPECIAL SAVE FOR PRETTIER
    */
    const charTypeOptions = [
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "0123456789",
      "!@#$%^&*"
    ];
    // given a value x and n segments, build [] s.t. [][0-n]+ = x
    for (i = 0; i < charTypeSelections.length; i++) {
      if (charTypeSelections[i]) {
      }
    }
  }
  //password cleanup to add characters
}
function randomlySelectChars(numCharsToSelect, charDomain) {
  var resultChars;
  for (i = 0; i < numCharsToSelect; i++) {
    resultChars = charDomain.charAt(
      Math.floor(Math.random() * numCharsToSelect)
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
generateBtn.addEventListener("click", writePassword());
