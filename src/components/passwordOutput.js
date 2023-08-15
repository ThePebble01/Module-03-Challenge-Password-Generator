export default function PasswordOutput({ password }) {
  return (
    <div className="card-body">
      <textarea
        readOnly
        id="password"
        placeholder="Your Secure Password"
        value={password}
      ></textarea>
    </div>
  );
}
