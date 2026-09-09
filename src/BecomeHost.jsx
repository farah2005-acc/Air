import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExtraPages.css";

function BecomeHost() {
  const navigate = useNavigate();

  const [submitted, setSubmitted] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    property: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="extra-page">

      <header className="extra-header">

        <button
          onClick={() => navigate(-1)}
          className="extra-back"
        >
          ←
        </button>

        <h2>Become a host</h2>

      </header>

      <main className="host-container">

        <div className="host-intro">

          <span>🏡</span>

          <h1>
            Become a host on Airbnb
          </h1>

          <p>
            Share your space, meet new people,
            and earn money by hosting guests.
          </p>

        </div>

        {!submitted ? (
          <form
            className="host-form"
            onSubmit={handleSubmit}
          >

            <label>
              Full name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />

            <label>
              Property location
            </label>

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Cairo, Alexandria..."
              required
            />

            <label>
              Property type
            </label>

            <select
              name="property"
              value={form.property}
              onChange={handleChange}
              required
            >
              <option value="">
                Select property type
              </option>

              <option value="Apartment">
                Apartment
              </option>

              <option value="House">
                House
              </option>

              <option value="Villa">
                Villa
              </option>

              <option value="Room">
                Private room
              </option>
            </select>

            <button
              className="host-submit"
              type="submit"
            >
              Start hosting
            </button>

          </form>
        ) : (
          <div className="success-box">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              You're on your way!
            </h2>

            <p>
              Thanks {form.name}! Your hosting
              application has been submitted.
            </p>

            <button
              onClick={() => navigate("/")}
            >
              Back to home
            </button>

          </div>
        )}

      </main>
    </div>
  );
}

export default BecomeHost;