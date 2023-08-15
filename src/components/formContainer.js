import NumericInput from "./numericInput";
import CheckboxInput from "./checkboxInput";
import { useState } from "react";
export default function FormContainer() {
  const [lengthError, setlengthError] = useState("");
  function handleOnBlur(e) {
    e.preventDefault();
    if (e.currentTarget.value < 8) {
      setlengthError("The password length must be greater than 8 characters.");
    } else {
      setlengthError("");
    }
  }
  function handleOnChange(e) {
    e.preventDefault();
    console.log("on change val", e.currentTarget.checked);
  }
  return (
    <div className="card">
      <form id="password-generator">
        <NumericInput
          label="Password Length"
          handleOnBlur={handleOnBlur}
          lengthError={lengthError}
        />
        <div className="char-options">
          <CheckboxInput
            label="Use Lowercase Characters"
            handleOnChange={handleOnChange}
          />
          <div className="input-container">
            <label for="use-uppercase">Use Uppercase Characters</label>
            <input id="use-uppercase" type="checkbox" />
          </div>
          <div className="input-container">
            <label for="use-numbers">Use Numbers</label>
            <input id="use-numbers" type="checkbox" />
          </div>
          <div className="input-container">
            <label for="use-special-chars">Use Special Characters</label>
            <input id="use-special-chars" type="checkbox" />
          </div>
        </div>
        <div className="card-footer">
          <button id="generate" className="btn">
            Generate Password
          </button>
        </div>
      </form>
    </div>
  );
}
