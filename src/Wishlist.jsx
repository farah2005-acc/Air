import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(saved);
    } catch {
      setWishlist([]);
    }
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="wishlist-page">
      <header className="wishlist-header">
        <button
          className="wishlist-back"
          onClick={() => navigate("/")}
        >
          ←
        </button>

        <h1>Wishlists</h1>
      </header>

      <main className="wishlist-container">
        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <div className="wishlist-empty-icon">♡</div>
            <h2>Your wishlist is empty</h2>
            <p>
              Save your favorite places and find them here whenever you
              want.
            </p>

            <button
              className="wishlist-explore-btn"
              onClick={() => navigate("/explore")}
            >
              Explore stays
            </button>
          </div>
        ) : (
          <>
            <h2>Saved places</h2>

            <div className="wishlist-grid">
              {wishlist.map((property) => (
                <div className="wishlist-card" key={property.id}>
                  <div
                    className="wishlist-image-wrapper"
                    onClick={() =>
                      navigate(`/property/${property.id}`, {
                        state: { property },
                      })
                    }
                  >
                    <img
                      src={property.image || property.images?.[0]}
                      alt={property.title}
                    />
                  </div>

                  <div className="wishlist-info">
                    <div className="wishlist-title-row">
                      <h3>{property.title}</h3>

                      <span>
                        ★ {property.rating}
                      </span>
                    </div>

                    <p>{property.location}</p>

                    <strong>
                      {property.price?.toLocaleString()}{" "}
                      {property.price > 1000 ? "ج.م" : "$"} / night
                    </strong>

                    <button
                      className="remove-wishlist"
                      onClick={() =>
                        removeFromWishlist(property.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Wishlist;