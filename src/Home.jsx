import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const properties = [
  {
    id: 1,
    title: "Tiny home in First New Cairo Qism",
    location: "New Cairo, Egypt",
    price: 3260,
    rating: 4.92,
    nights: 2,
    badge: "Guest favorite",
    images: [
      "/src/assets/apartment1.jpg",
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg",
    ],
  },
  {
    id: 2,
    title: "Apartment in First New Cairo Qism",
    location: "New Cairo, Egypt",
    price: 14667,
    rating: 4.93,
    nights: 2,
    badge: "Guest favorite",
    images: [
      "/src/assets/apartment4.jpg",
      "/src/assets/apartment5.jpg",
      "/src/assets/apartment6.jpg",
    ],
  },
  {
    id: 3,
    title: "Apartment in Second New Cairo Qism",
    location: "New Cairo, Egypt",
    price: 5986,
    rating: 4.95,
    nights: 2,
    badge: "Guest favorite",
    images: [
      "/src/assets/apartment7.jpg",
      "/src/assets/apartment8.jpg",
      "/src/assets/hero.png",
    ],
  },
  {
    id: 4,
    title: "Apartment in Sheraton",
    location: "Cairo, Egypt",
    price: 6390,
    rating: 4.98,
    nights: 2,
    badge: "Guest favorite",
    images: [
      "/src/assets/apartment2.jpg",
      "/src/assets/apartment3.jpg",
      "/src/assets/apartment4.jpg",
    ],
  },
];

const categories = [
  { id: "all", label: "All", icon: "🌍" },
  { id: "pools", label: "Amazing pools", icon: "🏊" },
  { id: "beach", label: "Beachfront", icon: "🏖️" },
  { id: "cabins", label: "Cabins", icon: "🏕️" },
  { id: "trending", label: "Trending", icon: "🔥" },
  { id: "mansions", label: "Mansions", icon: "🏰" },
];

function Home() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("all");
  const [openField, setOpenField] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const updateGuest = (key, delta) => {
    setGuests((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta),
    }));
  };

  const totalGuests = guests.adults + guests.children;

  const handleSearch = (homeCategory = "all") => {
    navigate("/explore", {
      state: {
        destination: destination.trim(),
        guests: totalGuests,
        checkIn,
        checkOut,
        homeCategory,
      },
    });
  };

  return (
    <div className="home">

      <header className="navbar">

        <div className="navbar-top">

          <div className="navbar-logo">
            <span className="logo-icon">🅰️</span>
            <span className="logo-text">airbnb</span>
          </div>

          <nav className="navbar-tabs">

            <button
              className={`tab ${
                activeTab === "all" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("all");
                handleSearch("all");
              }}
            >
              🌍 All
            </button>

            <button
              className={`tab ${
                activeTab === "homes" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("homes");
                handleSearch("all");
              }}
            >
              🏠 Homes
            </button>

            <button
              className={`tab ${
                activeTab === "experiences" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("experiences");
                navigate("/experiences");
              }}
            >
              🎈 Experiences
            </button>

            <button
              className={`tab ${
                activeTab === "services" ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab("services");
                navigate("/services");
              }}
            >
              🛎️ Services
            </button>

          </nav>

          <div className="navbar-right">

            <button
              className="host-link"
              onClick={() => navigate("/become-host")}
            >
              Become a host
            </button>

            <button
              className="icon-btn"
              onClick={() => navigate("/language-currency")}
            >
              🌐
            </button>

            <button
              type="button"
              className="icon-btn menu-btn"
              onClick={() =>
                setShowUserMenu((prev) => !prev)
              }
            >
              ☰
            </button>

            {showUserMenu && (
              <div className="user-menu">

                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate("/wishlist");
                  }}
                >
                  Wishlists
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    alert("Trips");
                  }}
                >
                  Trips
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    alert("Messages");
                  }}
                >
                  Messages
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate("/login");
                  }}
                >
                  Profile
                </button>

                <hr />

                <button
                  type="button"
                  onClick={() =>
                    alert("No new notifications")
                  }
                >
                  Notifications
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Account settings")
                  }
                >
                  Account settings
                </button>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/language-currency")
                  }
                >
                  Languages & currency
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert("Help Center")
                  }
                >
                  Help Center
                </button>

                <hr />

                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate("/login");
                  }}
                >
                  Log out
                </button>

              </div>
            )}

          </div>
        </div>

        <div className="search-pill">

          {/* WHERE */}

          <div
            className={`search-field ${
              openField === "where" ? "open" : ""
            }`}
            onClick={() =>
              setOpenField(
                openField === "where"
                  ? null
                  : "where"
              )
            }
          >

            <span className="field-label">
              Where
            </span>

            <input
              type="text"
              placeholder="Search destinations"
              value={destination}
              onChange={(e) =>
                setDestination(e.target.value)
              }
              onClick={(e) =>
                e.stopPropagation()
              }
            />

            {openField === "where" && (
              <div
                className="where-dropdown"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <div className="map-title">
                  <strong>
                    Search destinations
                  </strong>
                </div>

                <div className="fake-map">

                  <div className="map-water"></div>

                  <div className="map-road road-1"></div>
                  <div className="map-road road-2"></div>
                  <div className="map-road road-3"></div>
                  <div className="map-road road-4"></div>

                  <button
                    type="button"
                    className="map-pin pin-cairo"
                    onClick={() => {
                      setDestination("Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                  </button>

                  <button
                    type="button"
                    className="map-pin pin-new-cairo"
                    onClick={() => {
                      setDestination("New Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                  </button>

                  <button
                    type="button"
                    className="map-pin pin-alex"
                    onClick={() => {
                      setDestination("Alexandria");
                      setOpenField(null);
                    }}
                  >
                    📍
                  </button>

                  <span className="map-label cairo-label">
                    Cairo
                  </span>

                  <span className="map-label alex-label">
                    Alexandria
                  </span>

                </div>

                <div className="map-suggestions">

                  <button
                    type="button"
                    onClick={() => {
                      setDestination("Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                    <div>
                      <strong>Cairo</strong>
                      <small>Egypt</small>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDestination("New Cairo");
                      setOpenField(null);
                    }}
                  >
                    📍
                    <div>
                      <strong>New Cairo</strong>
                      <small>Cairo, Egypt</small>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDestination("Alexandria");
                      setOpenField(null);
                    }}
                  >
                    📍
                    <div>
                      <strong>Alexandria</strong>
                      <small>Egypt</small>
                    </div>
                  </button>

                </div>

              </div>
            )}

          </div>

          <div className="divider" />

          {/* WHEN */}

          <div
            className={`search-field when-field ${
              openField === "when" ? "open" : ""
            }`}
            onClick={() =>
              setOpenField(
                openField === "when"
                  ? null
                  : "when"
              )
            }
          >

            <span className="field-label">
              When
            </span>

            <span className="field-value">
              {checkIn && checkOut
                ? `${checkIn} - ${checkOut}`
                : checkIn
                ? checkIn
                : "Add dates"}
            </span>

            {openField === "when" && (
              <div
                className="date-dropdown"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <div className="date-title">
                  <strong>
                    Select your dates
                  </strong>
                </div>

                <div className="date-inputs">

                  <div className="date-box">
                    <label>Check-in</label>

                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) =>
                        setCheckIn(e.target.value)
                      }
                    />
                  </div>

                  <div className="date-box">
                    <label>Check-out</label>

                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || undefined}
                      onChange={(e) =>
                        setCheckOut(e.target.value)
                      }
                    />
                  </div>

                </div>

                <button
                  type="button"
                  className="done-date-btn"
                  onClick={() =>
                    setOpenField(null)
                  }
                >
                  Done
                </button>

              </div>
            )}

          </div>

          <div className="divider" />

          {/* WHO */}

          <div
            className={`search-field who-field ${
              openField === "who" ? "open" : ""
            }`}
            onClick={() =>
              setOpenField(
                openField === "who"
                  ? null
                  : "who"
              )
            }
          >

            <span className="field-label">
              Who
            </span>

            <span className="field-value">
              {totalGuests > 0
                ? `${totalGuests} guests`
                : "Add guests"}
            </span>

            <button
              type="button"
              className="search-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleSearch("all");
              }}
            >
              🔍 Search
            </button>

            {openField === "who" && (
              <div
                className="guests-dropdown"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <GuestRow
                  title="Adults"
                  subtitle="Ages 13 or above"
                  value={guests.adults}
                  onDecrease={() =>
                    updateGuest("adults", -1)
                  }
                  onIncrease={() =>
                    updateGuest("adults", 1)
                  }
                />

                <GuestRow
                  title="Children"
                  subtitle="Ages 2 – 12"
                  value={guests.children}
                  onDecrease={() =>
                    updateGuest("children", -1)
                  }
                  onIncrease={() =>
                    updateGuest("children", 1)
                  }
                />

                <GuestRow
                  title="Infants"
                  subtitle="Under 2"
                  value={guests.infants}
                  onDecrease={() =>
                    updateGuest("infants", -1)
                  }
                  onIncrease={() =>
                    updateGuest("infants", 1)
                  }
                />

                <GuestRow
                  title="Pets"
                  subtitle="Bringing a service animal?"
                  value={guests.pets}
                  onDecrease={() =>
                    updateGuest("pets", -1)
                  }
                  onIncrease={() =>
                    updateGuest("pets", 1)
                  }
                />

              </div>
            )}

          </div>

        </div>

      </header>

      {/* CATEGORIES */}

      <div className="categories">

        {categories.map((cat) => (
          <button
            key={cat.id}
            className="category-item"
            onClick={() => handleSearch(cat.id)}
          >
            <span className="category-icon">
              {cat.icon}
            </span>

            <span className="category-label">
              {cat.label}
            </span>
          </button>
        ))}

      </div>

      <section className="property-section">

        <h2 className="section-title">
          Popular homes in New Cairo
        </h2>

        <div className="property-grid">

          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}

        </div>

      </section>

      <section className="property-section">

        <h2 className="section-title">
          Available this weekend
        </h2>

        <div className="property-grid">

          {[...properties]
            .reverse()
            .map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}

        </div>

      </section>

      <footer className="footer">

        <div className="footer-columns">

          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Get help with a safety issue</li>
              <li>AirCover</li>
              <li>Cancellation options</li>
            </ul>
          </div>

          <div>
            <h4>Hosting</h4>
            <ul>
              <li>Airbnb your home</li>
              <li>Airbnb your experience</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
            </ul>
          </div>

          <div>
            <h4>Airbnb</h4>
            <ul>
              <li>Newsroom</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">

          <span>
            ©️ 2026 Airbnb Clone Project
          </span>

          <div className="footer-socials">
            <span>🌐 English (US)</span>
            <span>📘</span>
            <span>✖️</span>
            <span>📷</span>
          </div>

        </div>

      </footer>

    </div>
  );
}

function PropertyCard({ property }) {

  const [isFavorite, setIsFavorite] =
    useState(false);

  const [imageIndex, setImageIndex] =
    useState(0);

  /* =========================
     LOAD SAVED WISHLIST
  ========================= */

  useEffect(() => {
    const saved =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    const exists = saved.some(
      (item) => item.id === property.id
    );

    setIsFavorite(exists);
  }, [property.id]);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setImageIndex(
      (i) =>
        (i + 1) %
        property.images.length
    );
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setImageIndex(
      (i) =>
        (i - 1 + property.images.length) %
        property.images.length
    );
  };

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const saved =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    const exists = saved.some(
      (item) => item.id === property.id
    );

    let updated;

    if (exists) {
      updated = saved.filter(
        (item) => item.id !== property.id
      );
    } else {
      updated = [
        ...saved,
        {
          ...property,
          image: property.images[0],
        },
      ];
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );

    setIsFavorite(!exists);
  };

  return (
    <Link
      to={`/property/${property.id}`}
      className="property-card"
    >

      <div className="card-image-wrapper">

        {property.badge && (
          <span className="card-badge">
            {property.badge}
          </span>
        )}

        <button
          type="button"
          className={`favorite-btn ${
            isFavorite ? "active" : ""
          }`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

        <img
          src={property.images[imageIndex]}
          alt={property.title}
          className="card-image"
        />

        {property.images.length > 1 && (
          <>
            <button
              type="button"
              className="nav-arrow left"
              onClick={prevImage}
            >
              ‹
            </button>

            <button
              type="button"
              className="nav-arrow right"
              onClick={nextImage}
            >
              ›
            </button>
          </>
        )}

        <div className="dots">

          {property.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${
                i === imageIndex
                  ? "active"
                  : ""
              }`}
            />
          ))}

        </div>

      </div>

      <div className="card-info">

        <div className="card-title-row">

          <p className="card-title">
            {property.title}
          </p>

          <span className="card-rating">
            ★ {property.rating}
          </span>

        </div>

        <p className="card-location">
          {property.location}
        </p>

        <p className="card-price">
          <strong>
            {property.price.toLocaleString()} ج.م
          </strong>{" "}
          for {property.nights} nights
        </p>

      </div>

    </Link>
  );
}

function GuestRow({
  title,
  subtitle,
  value,
  onDecrease,
  onIncrease,
}) {
  return (
    <div className="guest-row">

      <div>
        <p className="guest-title">
          {title}
        </p>

        <p className="guest-subtitle">
          {subtitle}
        </p>
      </div>

      <div className="stepper">

        <button
          type="button"
          onClick={onDecrease}
          disabled={value === 0}
        >
          −
        </button>

        <span>{value}</span>

        <button
          type="button"
          onClick={onIncrease}
        >
          +
        </button>

      </div>

    </div>
  );
}

export default Home;