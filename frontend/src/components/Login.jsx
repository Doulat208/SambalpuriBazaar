import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center text-success mb-4">Sambhalpuri Bazaar</h2>

        <form>
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

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label small" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <a href="#" className="text-success small text-decoration-none">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">
            Login
          </button>
        </form>

        <div className="text-center text-muted my-3">OR</div>

        <Link to="/signup" className="btn btn-outline-success w-100">
          Create an Account
        </Link>
      </div>
    </div>
  );
}
