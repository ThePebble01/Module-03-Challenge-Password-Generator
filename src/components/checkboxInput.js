export default function CheckboxInput({ label, idVal, handleOnClick }) {
  return (
    <div className="input-container">
      <label for={idVal}>{label}</label>
      <input id={idVal} type="checkbox" onClick={handleOnClick} />
    </div>
  );
}
