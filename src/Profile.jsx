import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("userEmail") || "");
    setName(localStorage.getItem("userName") || "");
  }, []);

  const handleSave = () => {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    alert("Profile updated!");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const initial = (name || email || "U").charAt(0).toUpperCase();

  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      <header
        style={{
          background: "white",
          borderBottom: "1px solid #ddd",
          padding: "16px 32px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{ border: "none", background: "none", fontSize: "20px", cursor: "pointer" }}
        >
          ←
        </button>
        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Profile</h2>
      </header>

      <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 24px" }}>
        {/* Avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "#FF385C",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            {initial}
          </div>
          <div>
            <h3 style={{ margin: 0 }}>{name || "Guest"}</h3>
            <p style={{ margin: 0, color: "#717171" }}>{email || "No email"}</p>
          </div>
        </div>

        {/* Form */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "24px",
            marginBottom: "24px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Personal info</h3>

          <label style={{ display: "block", fontWeight: 600, marginBottom: "6px" }}>
            Full name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              marginBottom: "16px",
              fontSize: "16px",
            }}
          />

          <label style={{ display: "block", fontWeight: 600, marginBottom: "6px" }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              marginBottom: "20px",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleSave}
            style={{
              background: "#222",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Save
          </button>
        </div>

        {/* Quick links */}
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "8px",
            marginBottom: "24px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          <div
            onClick={() => navigate("/trips")}
            style={{
              padding: "16px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
            }}
          >
            <span style={{ fontWeight: 600 }}>My Trips</span>
            <span>→</span>
          </div>
          <div
            onClick={() => navigate("/wishlist")}
            style={{
              padding: "16px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontWeight: 600 }}>Wishlists</span>
            <span>→</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            background: "white",
            color: "#FF385C",
            border: "1px solid #FF385C",
            padding: "14px",
            borderRadius: "8px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default Profile;