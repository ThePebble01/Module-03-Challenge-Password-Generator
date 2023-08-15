export default function CheckboxInput({ label, handleOnChange }) {
  return (
    <div className="input-container">
      <label for="use-lowercase">{label}</label>
      <input id="use-lowercase" type="checkbox" onClick={handleOnChange} />
    </div>
  );
}
