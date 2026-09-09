import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [method, setMethod] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/");
    }
  };

  return (
    <div className="login-page">

      <button
        className="back-to-home"
        onClick={() => navigate("/")}
      >
        ← Back to Airbnb
      </button>

      <div className="login-container">

        <div className="login-box">

          <div className="login-header">
            <h1>🅰️ airbnb</h1>

            <h2>
              {isSignUp
                ? "Create your account"
                : "Log in or sign up"}
            </h2>
          </div>

          {!method ? (
            <div className="method-selector">

              <button
                className="method-btn"
                onClick={() => setMethod("email")}
              >
                Continue with email
              </button>

              <button
                className="method-btn social"
                onClick={() => setMethod("google")}
              >
                Continue with Google
              </button>

              <button
                className="method-btn social"
                onClick={() => setMethod("apple")}
              >
                Continue with Apple
              </button>

            </div>
          ) : (
            <>
              <button
                className="back-method"
                onClick={() => setMethod(null)}
              >
                ← Change method
              </button>

              <form
                className="login-form"
                onSubmit={handleSubmit}
              >

                <label>Email</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="your@email.com"
                  required
                />

                <label>Password</label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  required
                />

                <button
                  type="submit"
                  className="submit-btn"
                >
                  {isSignUp ? "Sign up" : "Log in"}
                </button>

              </form>

              <div className="auth-toggle">

                {isSignUp ? (
                  <p>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsSignUp(false)}
                      className="toggle-btn"
                    >
                      Log in
                    </button>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{" "}
                    <button
                      onClick={() => setIsSignUp(true)}
                      className="toggle-btn"
                    >
                      Sign up
                    </button>
                  </p>
                )}

              </div>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Login;