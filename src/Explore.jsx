import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Explore.css";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    title: "Modern Luxury Apartment",
    location: "Cairo, Egypt",
    rating: 4.9,
    price: 120,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Pool", "Kitchen", "AC"],
    category: "Trending",
    top: "35%",
    left: "43%",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
    title: "Beautiful Beach Villa",
    location: "North Coast, Egypt",
    rating: 4.8,
    price: 250,
    type: "Villa",
    guests: 8,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    top: "55%",
    left: "68%",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    title: "Cozy Mountain Cabin",
    location: "Sinai, Egypt",
    rating: 4.7,
    price: 95,
    type: "Cabin",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "AC"],
    category: "Cabins",
    top: "25%",
    left: "30%",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    title: "Elegant Downtown Home",
    location: "Cairo, Egypt",
    rating: 4.6,
    price: 140,
    type: "House",
    guests: 5,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    amenities: ["WiFi", "Kitchen", "AC"],
    category: "Trending",
    top: "45%",
    left: "48%",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    title: "Luxury Private Mansion",
    location: "New Cairo, Egypt",
    rating: 5.0,
    price: 450,
    type: "Mansion",
    guests: 10,
    bedrooms: 5,
    beds: 7,
    bathrooms: 4,
    amenities: ["WiFi", "Pool", "Kitchen", "AC", "Parking"],
    category: "Mansions",
    top: "40%",
    left: "55%",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&w=900&q=80",
    title: "Sea View Apartment",
    location: "Alexandria, Egypt",
    rating: 4.8,
    price: 180,
    type: "Apartment",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    top: "62%",
    left: "25%",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
    title: "Amazing Pool House",
    location: "Giza, Egypt",
    rating: 4.9,
    price: 210,
    type: "House",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: ["WiFi", "Pool", "Kitchen", "AC", "Parking"],
    category: "Trending",
    top: "30%",
    left: "38%",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    title: "Luxury Villa With Pool",
    location: "Hurghada, Egypt",
    rating: 4.9,
    price: 320,
    type: "Villa",
    guests: 7,
    bedrooms: 4,
    beds: 5,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Beachfront", "Kitchen", "AC"],
    category: "Beachfront",
    top: "70%",
    left: "75%",
  },
];

const homeCategories = [
  { id: "all", label: "All", icon: "🌍" },
  { id: "pools", label: "Amazing pools", icon: "🏊" },
  { id: "beach", label: "Beachfront", icon: "🏖️" },
  { id: "cabins", label: "Cabins", icon: "🏕️" },
  { id: "trending", label: "Trending", icon: "🔥" },
  { id: "mansions", label: "Mansions", icon: "🏰" },
];

function Explore() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchData = location.state || {};

  const [search, setSearch] = useState(searchData.destination || "");
  const [guests, setGuests] = useState(searchData.guests || 0);

  const [category, setCategory] = useState("All");
  const [activeHomeCategory, setActiveHomeCategory] = useState(
    searchData.homeCategory || "all"
  );

  const [maxPrice, setMaxPrice] = useState(500);
  const [bedrooms, setBedrooms] = useState("All");
  const [beds, setBeds] = useState("All");
  const [bathrooms, setBathrooms] = useState("All");
  const [amenity, setAmenity] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");

  const [view, setView] = useState("list");
  const [selectedMapProperty, setSelectedMapProperty] = useState(null);

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
      setWishlist(saved);
    } catch {
      setWishlist([]);
    }
  }, []);

  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  function toggleWishlist(property) {
    let updated;

    if (isWishlisted(property.id)) {
      updated = wishlist.filter((item) => item.id !== property.id);
    } else {
      updated = [...wishlist, property];
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  }

  function handleHomeCategory(categoryId) {
    setActiveHomeCategory(categoryId);
    setCategory("All");

    if (categoryId === "pools") {
      setAmenity("Pool");
    } else {
      setAmenity("All");
    }
  }

  const filteredProperties = useMemo(() => {
    let result = properties.filter((property) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        property.title.toLowerCase().includes(searchText) ||
        property.location.toLowerCase().includes(searchText);

      const matchesGuests =
        !guests || property.guests >= Number(guests);

      const matchesType =
        category === "All" || property.type === category;

      const matchesPrice = property.price <= maxPrice;

      const matchesBedrooms =
        bedrooms === "All" || property.bedrooms >= Number(bedrooms);

      const matchesBeds =
        beds === "All" || property.beds >= Number(beds);

      const matchesBathrooms =
        bathrooms === "All" ||
        property.bathrooms >= Number(bathrooms);

      const matchesAmenity =
        amenity === "All" ||
        property.amenities.includes(amenity);

      const matchesHomeCategory =
        activeHomeCategory === "all" ||
        (activeHomeCategory === "pools" &&
          property.amenities.includes("Pool")) ||
        (activeHomeCategory === "beach" &&
          property.category === "Beachfront") ||
        (activeHomeCategory === "cabins" &&
          property.category === "Cabins") ||
        (activeHomeCategory === "trending" &&
          property.category === "Trending") ||
        (activeHomeCategory === "mansions" &&
          property.category === "Mansions");

      return (
        matchesSearch &&
        matchesGuests &&
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBeds &&
        matchesBathrooms &&
        matchesAmenity &&
        matchesHomeCategory
      );
    });

    if (sortBy === "Top Rated") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "Price low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Price high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [
    search,
    guests,
    category,
    maxPrice,
    bedrooms,
    beds,
    bathrooms,
    amenity,
    sortBy,
    activeHomeCategory,
  ]);

  return (
    <div className="explore-page">

      {/* TOP NAV */}

      <nav className="explore-nav">
        <div className="explore-nav-left">
          <button
            className="nav-link nav-active"
            onClick={() => {
              setActiveHomeCategory("all");
              setCategory("All");
              setAmenity("All");
            }}
          >
            All
          </button>

          <button
            className="nav-link"
            onClick={() => {
              setActiveHomeCategory("all");
              setCategory("All");
              setAmenity("All");
            }}
          >
            Homes
          </button>

          <button
            className="nav-link"
            onClick={() => navigate("/experiences")}
          >
            Experiences
          </button>

          <button
            className="nav-link"
            onClick={() => navigate("/services")}
          >
            Services
          </button>
        </div>

        <div className="explore-nav-right">
          <button
            className="host-btn"
            onClick={() => navigate("/become-host")}
          >
            Become a host
          </button>

          <button
            className="globe-btn"
            onClick={() => navigate("/language-currency")}
          >
            🌐
          </button>

          <button
            className="menu-btn"
            onClick={() => navigate("/wishlist")}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* SEARCH BAR */}

      <div className="explore-search">
        <div>
          <label>Where</label>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destinations"
          />
        </div>

        <div>
          <label>Guests</label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value={0}>Any</option>
            <option value={1}>1 guest</option>
            <option value={2}>2 guests</option>
            <option value={3}>3 guests</option>
            <option value={4}>4 guests</option>
            <option value={5}>5+ guests</option>
            <option value={6}>6+ guests</option>
            <option value={8}>8+ guests</option>
          </select>
        </div>

        <button
          className="search-btn"
          onClick={() => {
            setActiveHomeCategory("all");
            setCategory("All");
            setAmenity("All");
          }}
        >
          🔍 Search
        </button>
      </div>

      {/* CATEGORIES */}

      <div className="home-category-bar">
        {homeCategories.map((item) => (
          <button
            key={item.id}
            className={`home-category ${
              activeHomeCategory === item.id ? "active" : ""
            }`}
            onClick={() => handleHomeCategory(item.id)}
          >
            <span>{item.icon}</span>
            <small>{item.label}</small>
          </button>
        ))}
      </div>

      {/* FILTERS */}

      <div className="filters-bar">

        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setActiveHomeCategory("all");
          }}
        >
          <option value="All">Property type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="House">House</option>
          <option value="Cabin">Cabin</option>
          <option value="Mansion">Mansion</option>
        </select>

        <select
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        >
          <option value={500}>Any price</option>
          <option value={100}>Up to $100</option>
          <option value={150}>Up to $150</option>
          <option value={200}>Up to $200</option>
          <option value={300}>Up to $300</option>
          <option value={500}>Up to $500</option>
        </select>

        <select
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="All">Bedrooms</option>
          <option value="1">1+ bedroom</option>
          <option value="2">2+ bedrooms</option>
          <option value="3">3+ bedrooms</option>
          <option value="4">4+ bedrooms</option>
        </select>

        <select
          value={beds}
          onChange={(e) => setBeds(e.target.value)}
        >
          <option value="All">Beds</option>
          <option value="1">1+ bed</option>
          <option value="2">2+ beds</option>
          <option value="3">3+ beds</option>
          <option value="4">4+ beds</option>
          <option value="5">5+ beds</option>
        </select>

        <select
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        >
          <option value="All">Bathrooms</option>
          <option value="1">1+ bathroom</option>
          <option value="2">2+ bathrooms</option>
          <option value="3">3+ bathrooms</option>
        </select>

        <select
          value={amenity}
          onChange={(e) => setAmenity(e.target.value)}
        >
          <option value="All">Amenities</option>
          <option value="Pool">Pool</option>
          <option value="WiFi">WiFi</option>
          <option value="Kitchen">Kitchen</option>
          <option value="AC">AC</option>
          <option value="Beachfront">Beachfront</option>
          <option value="Parking">Parking</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>Recommended</option>
          <option>Top Rated</option>
          <option>Price low-high</option>
          <option>Price high-low</option>
        </select>

        <button
          className="wishlist-top-btn"
          onClick={() => navigate("/wishlist")}
        >
          ♡ Wishlist
        </button>
      </div>

      {/* RESULT HEADER */}

      <div className="explore-result-header">
        <div>
          <h2>
            {filteredProperties.length} stays available
          </h2>

          {search && (
            <p>
              Results for <strong>{search}</strong>
            </p>
          )}
        </div>

        <div className="view-buttons">
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            ☷ List
          </button>

          <button
            className={view === "map" ? "active" : ""}
            onClick={() => setView("map")}
          >
            🗺️ Map
          </button>
        </div>
      </div>

      {/* CONTENT */}

      {view === "list" ? (
        <main className="explore-content">
          <div className="properties-grid">
            {filteredProperties.map((property) => (
              <article
                className="property-card"
                key={property.id}
              >
                <div
                  className="property-image-wrapper"
                  onClick={() =>
                    navigate(`/property/${property.id}`, {
                      state: { property },
                    })
                  }
                >
                  <img
                    src={property.image}
                    alt={property.title}
                  />

                  <button
                    className={`heart-btn ${
                      isWishlisted(property.id)
                        ? "saved"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(property);
                    }}
                  >
                    {isWishlisted(property.id) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="property-info">
                  <div className="property-title-row">
                    <h3>{property.title}</h3>
                    <span>★ {property.rating}</span>
                  </div>

                  <p>{property.location}</p>

                  <small>
                    {property.guests} guests ·{" "}
                    {property.bedrooms} bedrooms ·{" "}
                    {property.beds} beds ·{" "}
                    {property.bathrooms} bathrooms
                  </small>

                  <div className="property-bottom">
                    <strong>
                      ${property.price}
                      <span> night</span>
                    </strong>

                    <button
                      onClick={() =>
                        navigate(`/property/${property.id}`, {
                          state: { property },
                        })
                      }
                    >
                      View details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="no-results">
              <div>🔎</div>
              <h2>No stays found</h2>
              <p>
                Try changing your search or filters.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setGuests(0);
                  setCategory("All");
                  setMaxPrice(500);
                  setBedrooms("All");
                  setBeds("All");
                  setBathrooms("All");
                  setAmenity("All");
                  setActiveHomeCategory("all");
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </main>
      ) : (
        <div className="explore-map-section">
          <div className="fake-explore-map">
            <div className="map-title">
              Explore stays on map
            </div>

            <div className="map-water">
              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>

              {filteredProperties.map((property) => (
                <button
                  key={property.id}
                  className="explore-map-pin"
                  style={{
                    top: property.top,
                    left: property.left,
                  }}
                  onClick={() =>
                    setSelectedMapProperty(property)
                  }
                >
                  ${property.price}
                </button>
              ))}

              {selectedMapProperty && (
                <div className="map-property-popup">
                  <button
                    className="popup-close"
                    onClick={() =>
                      setSelectedMapProperty(null)
                    }
                  >
                    ×
                  </button>

                  <img
                    src={selectedMapProperty.image}
                    alt={selectedMapProperty.title}
                  />

                  <h3>{selectedMapProperty.title}</h3>

                  <p>
                    {selectedMapProperty.location}
                  </p>

                  <strong>
                    ${selectedMapProperty.price} / night
                  </strong>

                  <button
                    className="popup-details"
                    onClick={() =>
                      navigate(
                        `/property/${selectedMapProperty.id}`,
                        {
                          state: {
                            property: selectedMapProperty,
                          },
                        }
                      )
                    }
                  >
                    View property
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Explore;