export default function generatePassword({
  passwordLength,
  lowerCharCheckbox,
  upperCharCheckbox,
  numericCharCheckbox,
  specialCharCheckbox,
}) {
  //we will select an even distribution of characters based on the length.
  //Todo: Allow users to select the distribution of characters for each checkbox as a %
  //ie 20% lower, 30% upper, 50% special
  let unscrambledPassword = "";
  let numCharsToSelect = Math.ceil(
    passwordLength /
      (lowerCharCheckbox +
        upperCharCheckbox +
        numericCharCheckbox +
        specialCharCheckbox)
  );
  if (lowerCharCheckbox) {
    for (let i = 0; i < numCharsToSelect; i++) {
      unscrambledPassword += String.fromCharCode(
        Math.floor(Math.random() * (122 - 97)) + 97
      );
    }
  }
  if (upperCharCheckbox) {
    for (let i = 0; i < numCharsToSelect; i++) {
      unscrambledPassword += String.fromCharCode(
        Math.floor(Math.random() * (90 - 65)) + 65
      );
    }
  }
  if (numericCharCheckbox) {
    for (let i = 0; i < numCharsToSelect; i++) {
      unscrambledPassword += String.fromCharCode(
        Math.floor(Math.random() * (57 - 48)) + 48
      );
    }
  }
  if (specialCharCheckbox) {
    for (let i = 0; i < numCharsToSelect; i++) {
      //There are two ranges of the utf-16 codes for special characters: 32 to 47 and 58 to 64...
      const rangeToUse = Math.floor(Math.random() * 20) % 2;
      if (rangeToUse == 0) {
        unscrambledPassword += String.fromCharCode(
          Math.floor(Math.random() * (47 - 33)) + 33
        );
      } else {
        unscrambledPassword += String.fromCharCode(
          Math.floor(Math.random() * (64 - 58)) + 58
        );
      }
    }
  }
  var unscrambledPasswordArray = unscrambledPassword.split("");
  //"shuffle" algorithm: https://bost.ocks.org/mike/shuffle/compare.html
  unscrambledPasswordArray.sort(function () {
    return Math.random() - 0.5;
  });
  const password = unscrambledPasswordArray.join(""); //assigning this to a variable is more for semantics than anything..
  if (password - passwordLength > 0) {
    password = password.substring(0, passwordLength);
  }
  return password;
}
