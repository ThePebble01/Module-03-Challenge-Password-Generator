// Assignment code here
/*
    USE THIS FOR REAL DEAL.....
String.fromCharCode
*/
function handleWritePassword(event) {
  event.preventDefault();
  var password = generatePassword();
  if (password) {
    $("#password").val(password);
  }
}
const charTypeOptions = [
  new CharCodeRange(97, 122),
  new CharCodeRange(65, 90),
  new CharCodeRange(45, 57),
  [new CharCodeRange(32, 47), new CharCodeRange(58, 64)],
];
function generatePassword() {
  var passwordResult = "";
  var passwordLength = initiatePasswordLengthPrompt();
  if (passwordLength) {
    /*
    The index of the following arrays corresponds to the options for character types provided to the visitor.
    0 = lowercase
    1 = uppercase
    2 = numeric
    3 = special

    charTypeOptions - Array of objects representing the starting and ending decimal of UTF-16 characters.
    charTypeSelections - Boolean array indicating which character types were selected from the confirm dialog boxes.
  */
    var charTypeSelections = [];
    charTypeSelections.push(
      $("#use-lowercase")[0].checked
      // confirm("Does your password need lowercase characters?")
    );
    charTypeSelections.push(
      $("#use-uppercase")[0].checked
      //confirm("Does your password need uppercase characters?")
    );
    charTypeSelections.push(
      $("#use-numbers")[0].checked
      //confirm("Does your password need numeric characters?")
    );
    charTypeSelections.push(
      $("#use-special-chars")[0].checked
      //confirm("Does your password need special characters?")
    );
    var totalSelections = charTypeSelections.filter(Boolean);
    if (totalSelections.length == 0) {
      //render error
      $(".error")[0].style = "visibility: visible";
      $(".error").children()[0].textContent =
        "You did not select any options....this application does not support the types of characters that you want.";
      return;
    }
    var tempPassword = "";
    var numCharsToSelect = Math.ceil(passwordLength / totalSelections.length); //modify this instead of doing an even distro?
    for (i = 0; i < charTypeSelections.length; i++) {
      if (charTypeSelections[i]) {
        var charCodeRange = charTypeOptions[i];
        if (Array.isArray(charCodeRange)) {
          //split this further so that it grabs chars from both sets
          var randIndex = Number.parseInt(Math.random() * charCodeRange.length);
          console.log(randIndex);
          charCodeRange = charCodeRange[randIndex];
          console.log(charCodeRange);
        }
        tempPassword += randomlySelectChars(numCharsToSelect, charCodeRange);
        console.log(tempPassword);
      }
    }
    var tempPasswordCharArray = tempPassword.split("");
    tempPasswordCharArray.sort(function () {
      return Math.random() - 0.5;
    });
    tempPassword = tempPasswordCharArray.join("");
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
  }
}
function initiatePasswordLengthPrompt() {
  var rawPasswordLength = $("#password-length").val();
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
function randomlySelectChars(numCharsToSelect, charCodeRange) {
  var resultChars = "";
  for (j = 0; j < numCharsToSelect; j++) {
    resultChars += String.fromCharCode(
      Math.floor(
        Math.random() * (charCodeRange.secondNum - charCodeRange.firstNum) +
          charCodeRange.firstNum
      )
    );
  }
  return resultChars;
}
$("#generate").on("click", handleWritePassword);
function CharCodeRange(firstNum, secondNum) {
  this.firstNum = firstNum;
  this.secondNum = secondNum;
}
