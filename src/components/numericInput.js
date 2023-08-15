//This is just meant to showcase component re-use.
export default function PasswordLength({ label, handleOnBlur, lengthError }) {
  return (
    <div className="char-options">
      <label for="password-length">{label}</label>
      <input
        minLength={8}
        defaultValue={8}
        id="password-length"
        type="text"
        inputMode="numeric"
        required={true}
        onBlur={handleOnBlur}
      />
      {lengthError ? (
        <div className="error">
          <span id="error-message">{lengthError}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
