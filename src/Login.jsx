import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../src/assets/airbnb.png";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only
    localStorage.setItem("userEmail", email);

    navigate("/");
  };

  return (
    <div className="login-page">

      {/* Logo */}
      <div className="login-logo">
        <img src={logo} alt="Airbnb" />
      </div>

      {/* Login Card */}
      <div className="login-card">

        {/* Header */}
        <div className="login-header">
          <button
            type="button"
            className="close-btn"
            onClick={() => navigate("/")}
          >
            ×
          </button>

          <h3>Log in or sign up</h3>
        </div>

        {/* Content */}
        <div className="login-content">

          <h2>Welcome to Airbnb</h2>

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Continue */}
            <button type="submit" className="continue-btn">
              Continue
            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          {/* Google */}
          <button className="social-btn">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          {/* Apple */}
          <button className="social-btn">
            <span className="apple-icon"></span>
            Continue with Apple
          </button>

          {/* Facebook */}
          <button className="social-btn">
            <span className="facebook-icon">f</span>
            Continue with Facebook
          </button>

          {/* Terms */}
          <p className="terms">
            By continuing, you agree to Airbnb's{" "}
            <span>Terms of Service</span>,{" "}
            <span>Privacy Policy</span> and{" "}
            <span>Nondiscrimination Policy</span>.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;