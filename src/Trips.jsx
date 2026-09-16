import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Trips() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("trips") || "[]");
    setTrips(saved);
  }, []);

  const cancelTrip = (id) => {
    const updated = trips.filter((t) => t.id !== id);
    setTrips(updated);
    localStorage.setItem("trips", JSON.stringify(updated));
  };

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
        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>Trips</h2>
      </header>

      <div style={{ maxWidth: "1000px", margin: "40px auto", padding: "0 24px" }}>
        {trips.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>✈️</div>
            <h2>No trips booked...yet!</h2>
            <p style={{ color: "#717171", marginBottom: "24px" }}>
              Time to dust off your bags and start planning your next adventure.
            </p>
            <button
              onClick={() => navigate("/explore")}
              style={{
                background: "#222",
                color: "white",
                border: "none",
                padding: "14px 28px",
                borderRadius: "8px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Start searching
            </button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {trips.map((trip) => (
              <div
                key={trip.id}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={trip.property?.image || trip.property?.images?.[0]}
                  alt={trip.property?.title}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <div style={{ padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <h3 style={{ margin: 0, fontSize: "16px" }}>{trip.property?.title}</h3>
                    <span
                      style={{
                        background: "#e8f5e9",
                        color: "#2e7d32",
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        fontWeight: 600,
                      }}
                    >
                      {trip.status}
                    </span>
                  </div>
                  <p style={{ color: "#717171", margin: "0 0 8px", fontSize: "14px" }}>
                    {trip.property?.location}
                  </p>
                  <p style={{ margin: "4px 0", fontSize: "14px" }}>
                    <strong>Dates:</strong> {trip.checkIn} → {trip.checkOut}
                  </p>
                  <p style={{ margin: "4px 0", fontSize: "14px" }}>
                    <strong>Guests:</strong> {trip.guests}
                  </p>
                  <p style={{ margin: "4px 0 16px", fontSize: "14px" }}>
                    <strong>Total:</strong> ${trip.total}
                  </p>
                  <button
                    onClick={() => cancelTrip(trip.id)}
                    style={{
                      width: "100%",
                      background: "white",
                      color: "#FF385C",
                      border: "1px solid #FF385C",
                      padding: "10px",
                      borderRadius: "8px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Cancel trip
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Trips;