import FormContainer from "./components/formContainer.js";
import PasswordOutput from "./components/passwordOutput.js";
import { useState } from "react";
import generatePassword from "./assets/javascript/generatePassword.js";
import "./assets/css/style.css";
export default function App() {
  const [password, setPassword] = useState("");
  function handleGeneratePassword({
    passwordLength,
    lowerCharCheckbox,
    upperCharCheckbox,
    numericCharCheckbox,
    specialCharCheckbox,
  }) {
    setPassword(
      generatePassword({
        passwordLength,
        lowerCharCheckbox,
        upperCharCheckbox,
        numericCharCheckbox,
        specialCharCheckbox,
      })
    );
  }
  return (
    <div className="char-options form-container">
      <FormContainer generatePassword={handleGeneratePassword} />
      <PasswordOutput password={password} />
    </div>
  );
}
