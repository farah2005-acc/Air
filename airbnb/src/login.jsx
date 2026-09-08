
import { useState } from "react";
import logo from "../assets/airbnb.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("userEmail", email);

    navigate("/");
  };

  return (
    <div className="min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center p-3">

      {/* Airbnb Logo */}
      <img
        src={logo}
        alt="Airbnb"
        className="mb-4"
        style={{ width: "180px", height: "auto" }}
      />

      {/* Login Box */}
      <div
        className="bg-white rounded-4 shadow p-4"
        style={{ width: "100%", maxWidth: "560px" }}
      >

        {/* Header */}
        <div className="d-flex align-items-center justify-content-center border-bottom pb-3 mb-4 position-relative">
          <h6 className="fw-bold mb-0">
            Log in or sign up
          </h6>

          <button
            type="button"
            className="btn-close position-absolute start-0"
            aria-label="Close"
          ></button>
        </div>

        {/* Welcome */}
        <h4
          className="fw-bold mb-4"
          style={{ color: "#FF385C" }}
        >
          Welcome to Airbnb
        </h4>

        {/* Email */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-semibold">
              Email
            </label>

            <input
              type="email"
              className="form-control form-control-lg rounded-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Continue */}
          <button
            type="submit"
            className="btn btn-lg w-100 rounded-3 fw-semibold text-white"
            style={{
              backgroundColor: "#FF385C",
              borderColor: "#FF385C",
            }}
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center gap-3 my-4">
          <hr className="flex-grow-1" />
          <span className="text-secondary small">
            or
          </span>
          <hr className="flex-grow-1" />
        </div>

        {/* Google */}
        <button className="btn btn-outline-dark btn-lg w-100 mb-3 rounded-3 position-relative">
          <span className="position-absolute start-0 ms-3 fw-bold">
            G
          </span>
          Continue with Google
        </button>

        {/* Apple */}
        <button className="btn btn-outline-dark btn-lg w-100 mb-3 rounded-3 position-relative">
          <span className="position-absolute start-0 ms-3 fs-5">
            
          </span>
          Continue with Apple
        </button>

        {/* Facebook */}
        <button className="btn btn-outline-dark btn-lg w-100 rounded-3 position-relative">
          <span className="position-absolute start-0 ms-3 fw-bold">
            f
          </span>
          Continue with Facebook
        </button>

        {/* Terms */}
        <p className="text-secondary small mt-4 mb-0 text-center">
          By continuing, you agree to Airbnb's Terms of Service,
          Privacy Policy and Nondiscrimination Policy.
        </p>

      </div>
    </div>
  );
}

export default Login;

