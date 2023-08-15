export default function FormError({ errorMessage }) {
  return (
    <div className="error">
      <span id="error-message">{errorMessage}</span>
    </div>
  );
}
