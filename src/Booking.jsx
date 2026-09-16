import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Booking() {
  const navigate = useNavigate();
  const location = useLocation();

  // لو جالي بيانات من صفحة Property Details
  const propertyFromState = location.state?.property;

  const [property] = useState(
    propertyFromState || {
      id: 1,
      title: "Luxury Apartment in Zamalek",
      location: "Zamalek, Cairo",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      price: 85,
    }
  );

  const [checkIn, setCheckIn] = useState("2026-09-20");
  const [checkOut, setCheckOut] = useState("2026-09-25");
  const [guests, setGuests] = useState(2);

  const nights = Math.max(
    1,
    Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
  );

  const pricePerNight = property.price || 85;
  const cleaningFee = 25;
  const serviceFee = Math.round(pricePerNight * nights * 0.14);
  const subtotal = pricePerNight * nights;
  const total = subtotal + cleaningFee + serviceFee;

  const handleConfirm = () => {
    const booking = {
      id: Date.now(),
      property,
      checkIn,
      checkOut,
      guests,
      nights,
      total,
      status: "Upcoming",
    };

    const existing = JSON.parse(localStorage.getItem("trips") || "[]");
    existing.push(booking);
    localStorage.setItem("trips", JSON.stringify(existing));

    
    navigate("/trips");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      {/* Header */}
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
          style={{
            border: "none",
            background: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ←
        </button>
        <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
          Confirm and pay
        </h2>
      </header>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "48px",
        }}
      >
        {/* Left side */}
        <div>
          <section
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Your trip</h3>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>Dates</div>
                <div style={{ color: "#717171" }}>
                  {checkIn} → {checkOut}
                </div>
              </div>
              <button
                onClick={() => {
                  const n1 = prompt("Check-in (YYYY-MM-DD)", checkIn);
                  const n2 = prompt("Check-out (YYYY-MM-DD)", checkOut);
                  if (n1) setCheckIn(n1);
                  if (n2) setCheckOut(n2);
                }}
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Edit
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontWeight: 600 }}>Guests</div>
                <div style={{ color: "#717171" }}>{guests} guests</div>
              </div>
              <button
                onClick={() => {
                  const n = prompt("Number of guests", guests);
                  if (n) setGuests(Number(n));
                }}
                style={{
                  background: "none",
                  border: "none",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Edit
              </button>
            </div>
          </section>

          <section
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              marginBottom: "24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Pay with</h3>
            <select
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginBottom: "12px",
                fontSize: "16px",
              }}
            >
              <option>Credit or debit card</option>
              <option>PayPal</option>
            </select>
            <input
              placeholder="Card number"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                marginBottom: "12px",
                fontSize: "16px",
              }}
            />
            <div style={{ display: "flex", gap: "12px" }}>
              <input
                placeholder="Expiration"
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              />
              <input
                placeholder="CVV"
                style={{
                  flex: 1,
                  padding: "14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "16px",
                }}
              />
            </div>
          </section>

          <button
            onClick={handleConfirm}
            style={{
              width: "100%",
              background: "#FF385C",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Confirm and pay
          </button>
        </div>

        {/* Right side - Price summary */}
        <div>
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              position: "sticky",
              top: "24px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", marginBottom: "20px" }}>
              <img
                src={property.image || property.images?.[0]}
                alt={property.title}
                style={{
                  width: "120px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>{property.title}</div>
                <div style={{ color: "#717171", fontSize: "14px" }}>
                  {property.location}
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #eee" }} />

            <h3>Price details</h3>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span>
                ${pricePerNight} × {nights} nights
              </span>
              <span>${subtotal}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}
            >
              <span>Cleaning fee</span>
              <span>${cleaningFee}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <span>Service fee</span>
              <span>${serviceFee}</span>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #eee" }} />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;