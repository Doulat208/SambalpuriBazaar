import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateAccount() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center text-success mb-4">Sambhalpuri Bazaar</h2>

        <form>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
            required
          />

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label htmlFor="terms" className="form-check-label small">
              I agree to the <a href="#" className="text-success text-decoration-none">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">
            Sign Up
          </button>
        </form>

        <div className="text-center text-muted my-3">OR</div>

        <Link to="/login" className="btn btn-outline-success w-100">
          Back to Login
        </Link>
      </div>
    </div>
  );
}
