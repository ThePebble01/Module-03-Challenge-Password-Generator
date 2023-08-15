import CheckboxInput from "./checkboxInput";
import FormError from "./formError";
import { useState } from "react";
export default function FormContainer({ generatePassword }) {
  const [lengthError, setLengthError] = useState("");
  const [charSelectionError, setCharSelectionError] = useState("");
  function handleOnBlur(e) {
    e.preventDefault();
    if (e.currentTarget.value < 8) {
      setLengthError("The password length must be greater than 8 characters.");
    } else {
      setLengthError("");
    }
  }
  function clearCharErrorsOnClick() {
    setCharSelectionError("");
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const passwordLength = document.getElementById("password-length");
    const lowerCharCheckbox = document.getElementById("lower");
    const upperCharCheckbox = document.getElementById("upper");
    const numericCharCheckbox = document.getElementById("numeric");
    const specialCharCheckbox = document.getElementById("special");
    if (
      !lowerCharCheckbox.checked &&
      !upperCharCheckbox.checked &&
      !numericCharCheckbox.checked &&
      !specialCharCheckbox.checked
    ) {
      setCharSelectionError(
        "You must select at least one type of character in order for your password to be generated."
      );
    } else {
      setCharSelectionError("");
      generatePassword({
        passwordLength: passwordLength.value,
        lowerCharCheckbox: lowerCharCheckbox.checked,
        upperCharCheckbox: upperCharCheckbox.checked,
        numericCharCheckbox: numericCharCheckbox.checked,
        specialCharCheckbox: specialCharCheckbox.checked,
      });
    }
  }
  return (
    <div className="card">
      <form id="password-generator" onSubmit={handleOnSubmit}>
        <div className="char-options">
          <label for="password-length">"Password Length"</label>
          <input
            defaultValue={8}
            id="password-length"
            type="text"
            inputMode="numeric"
            required={true}
            onBlur={handleOnBlur}
          />
          {lengthError ? <FormError errorMessage={lengthError} /> : <></>}
          <CheckboxInput
            label="Use Lowercase Characters"
            idVal="lower"
            handleOnClick={clearCharErrorsOnClick}
          />
          <CheckboxInput
            label="Use Uppercase Characters"
            idVal="upper"
            handleOnClick={clearCharErrorsOnClick}
          />
          <CheckboxInput
            label="Use Numbers"
            idVal="numeric"
            handleOnClick={clearCharErrorsOnClick}
          />
          <CheckboxInput
            label="Use Special Characters"
            idVal="special"
            handleOnClick={clearCharErrorsOnClick}
          />
        </div>
        {charSelectionError ? (
          <FormError errorMessage={charSelectionError} />
        ) : (
          <></>
        )}
        <div className="card-footer">
          <button id="generate" className="btn">
            Generate Password
          </button>
        </div>
      </form>
    </div>
  );
}
