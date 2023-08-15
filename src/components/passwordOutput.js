export default function PasswordOutput({ password }) {
  return (
    <div className="card-body">
      <textarea
        readOnly
        id="password"
        placeholder="Your Secure Password"
        aria-label="Generated Password"
        value={password}
      ></textarea>
    </div>
  );
}
