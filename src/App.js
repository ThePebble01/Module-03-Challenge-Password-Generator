import FormContainer from "./components/formContainer.js";
import PasswordOutput from "./components/passwordOutput.js";
import "./assets/css/style.css";
export default function App() {
  //fragment password form; generalize inputs into components that are imported
  //
  return (
    <>
      <FormContainer />
      <PasswordOutput />
    </>
  );
}
