import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import apartment1 from "./assets/apartment1.jpg";
import apartment2 from "./assets/apartment2.jpg";
import apartment3 from "./assets/apartment3.jpg";
import apartment4 from "./assets/apartment4.jpg";
import apartment5 from "./assets/apartment5.jpg";
import apartment6 from "./assets/apartment6.jpg";
import apartment7 from "./assets/apartment7.jpg";
import apartment8 from "./assets/apartment8.jpg";
import apartment9 from "./assets/images (1).jpeg";
import apartment10 from "./assets/images (2).jpeg";
import apartment11 from "./assets/images (3).jpeg";
import apartment12 from "./assets/images (4).jpeg"; 
import apartment13 from "./assets/images (5).jpeg";
import apartment14 from "./assets/images (6).jpeg";
import apartment15 from "./assets/images (7).jpeg";
import apartment16 from "./assets/images (13).jpeg";
import apartment17 from "./assets/images (15).jpeg";
import apartment18 from "./assets/images (16).jpeg";
import apartment19 from "./assets/images (19).jpeg";
import apartment20 from "./assets/images (11).jpeg";
import apartment21 from "./assets/images (12).jpeg";

import "./PropertyDetails.css";

const defaultProperties = {
  1: {
    id: 1,
    title: "Modern Apartment",
    location: "Alexandria, Egypt",
    rating: 4.9,
    price: 120,
    type: "Modern",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Kitchen",
      "Air conditioning",
    ],
    description:
      "Enjoy a comfortable and modern stay in this beautiful apartment. The property is perfect for couples, friends, and small families looking for a relaxing place close to the city and the sea.",
    host: "Sarah",
    hostYears: 4,
    images: [
      apartment1,
      apartment2,
      apartment3,
    ],
  },

  2: {
    id: 2,
    title: "Beautiful Apartment",
    location: "Cairo, Egypt",
    rating: 4.8,
    price: 95,
    type: "Modern",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Kitchen",
    ],
    description:
      "A stylish apartment located in Cairo with everything you need for a comfortable and enjoyable stay.",
    host: "Omar",
    hostYears: 5,
    images: [
      apartment2,
      apartment3,
      apartment4,
    ],
  },

  3: {
    id: 3,
    title: "Luxury Beach House",
    location: "North Coast, Egypt",
    rating: 4.9,
    price: 240,
    type: "Luxury",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Pool",
      "Kitchen",
      "Parking",
    ],
    description:
      "A luxurious beach house with spacious rooms, a private pool, and beautiful surroundings. Perfect for families and groups.",
    host: "Mariam",
    hostYears: 6,
    images: [
      apartment3,
      apartment4,
      apartment5,
    ],
  },

  4: {
    id: 4,
    title: "Luxury Stay",
    location: "Giza, Egypt",
    rating: 4.7,
    price: 180,
    type: "Luxury",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
    ],
    description:
      "A premium stay in Giza with spacious interiors, comfortable bedrooms, and modern facilities.",
    host: "Youssef",
    hostYears: 3,
    images: [
      apartment4,
      apartment5,
      apartment6,
    ],
  },

  5: {
    id: 5,
    title: "Cozy Apartment",
    location: "Alexandria, Egypt",
    rating: 4.9,
    price: 110,
    type: "Cozy",
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Air conditioning",
    ],
    description:
      "A cozy and peaceful apartment in Alexandria, ideal for a relaxing getaway near the sea.",
    host: "Nour",
    hostYears: 4,
    images: [
      apartment5,
      apartment6,
      apartment7,
    ],
  },

  6: {
    id: 6,
    title: "Cozy Home",
    location: "Cairo, Egypt",
    rating: 4.8,
    price: 85,
    type: "Cozy",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Kitchen",
    ],
    description:
      "A small cozy home with a warm atmosphere and all the basic amenities for a comfortable stay.",
    host: "Ahmed",
    hostYears: 2,
    images: [
      apartment6,
      apartment7,
      apartment8,
    ],
  },

  7: {
    id: 7,
    title: "Sea View Apartment",
    location: "Alexandria, Egypt",
    rating: 4.9,
    price: 150,
    type: "Sea View",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    amenities: [
      "Wi-Fi",
      "Kitchen",
      "Air conditioning",
    ],
    description:
      "Wake up to beautiful sea views in this bright and comfortable Alexandria apartment.",
    host: "Laila",
    hostYears: 7,
    images: [
      apartment7,
      apartment8,
      apartment1,
    ],
  },

  8: {
    id: 8,
    title: "Relaxing Sea View",
    location: "Hurghada, Egypt",
    rating: 4.8,
    price: 170,
    type: "Sea View",
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Pool",
      "Parking",
    ],
    description:
      "Relax in this beautiful sea-view property in Hurghada, perfect for families and friends.",
    host: "Karim",
    hostYears: 5,
    images: [
      apartment8,
      apartment1,
      apartment2,
    ],
  },
  9: {
    id: 9,
    title: "Luxury Apartment in sharm el sheikh",
    location: "Sharm el Sheikh, Egypt",
    rating: 4.9,
    price: 200,
    type: "Luxury",
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Pool",
      "Spa",
    ],
    description:
      "Experience luxury in this stunning apartment in Sharm el Sheikh, offering breathtaking views and top-notch amenities.",
    host: "Sara",
    hostYears: 6,
    images: [
      apartment9,
      apartment10,
      apartment11,
    ],
  },
  10: {
    id: 10,
    title: "Modern hotel in sharm el sheikh",
    location: "Sharm el Sheikh, Egypt",
    rating: 4.8,
    price: 180,
    type: "Modern",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Pool",
      "Gym",
    ],
    description:
      "Stay in this modern hotel in Sharm el Sheikh, offering comfortable rooms and excellent facilities.",
    host: "Mohamed",
    hostYears: 5,
    images: [
      apartment13,
      apartment12,
      apartment11,
      apartment13,
    ],
  },
  11: {
    id: 11,
    title: "Luxury villa in sharm el sheikh",
    location: "Sharm el Sheikh, Egypt",
    rating: 4.9,
    price: 300,
    type: "Luxury",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    amenities: [
      "Wi-Fi",
      "Pool",
      "Spa",
      "Gym",
    ],
    description:
      "Indulge in luxury at this stunning villa in Sharm el Sheikh, featuring panoramic views and world-class amenities.",
    host: "Layla",
    hostYears: 8,
    images: [
      apartment15,
      apartment12,
      apartment8,
    ],
  },
  12: {
    id: 12,
    title: "Modern apartment in sharm el sheikh",
    location: "Sharm el Sheikh, Egypt",
    rating: 4.8,
    price: 180,
    type: "Modern",
    guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    amenities: [
      "Wi-Fi",
      "Pool",
      "Gym",
    ],
    description:
      "Stay in this modern apartment in Sharm el Sheikh, offering comfortable rooms and excellent facilities.",
    host: "Mohamed",
    hostYears: 5,
    images: [
      apartment7,
      apartment12,
      apartment14,
      apartment13,
    ],
  },
  13: {
    id: 13,
    title: " in sharm el sheikh",
    location: "Sharm el Sheikh, Egypt",
    rating: 4.9,
    price: 300,
    type: "Luxury",
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    amenities: [
      "Wi-Fi",
      "Pool",
      "Spa",
      "Gym",
    ],
    description:
      "Indulge in luxury at this stunning villa in Sharm el Sheikh, featuring panoramic views and world-class amenities.",
    host: "Layla",
    hostYears: 8,
    images: [
      apartment9,
      apartment12,
      apartment8,
    ],
  },
};

function PropertyDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const passedProperty = location.state?.property;

  // A hosted listing may be opened directly (without router state),
  // so also resolve it from localStorage by id.
  let savedHostedProperty = null;
  try {
    const hostedProperties = JSON.parse(
      localStorage.getItem("hostProperties") || "[]"
    );

    savedHostedProperty = Array.isArray(hostedProperties)
      ? hostedProperties.find((item) => String(item.id) === String(id))
      : null;
  } catch {
    savedHostedProperty = null;
  }

  const property =
    passedProperty ||
    savedHostedProperty ||
    defaultProperties[id] ||
    defaultProperties[1];

  const images =
    property.images?.length
      ? property.images
      : [property.image];

  const [selectedImage, setSelectedImage] = useState(0);

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem("wishlist")
        ) || [];

      return saved.some(
        (item) => item.id === property.id
      );
    } catch {
      return false;
    }
  });

  const [guests, setGuests] = useState(1);

  const [showBooking, setShowBooking] =
    useState(false);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [reviewText, setReviewText] =
    useState("");

  const [reviews, setReviews] = useState([
    {
      name: "Mona",
      rating: 5,
      text: "Amazing place! Very clean and comfortable.",
    },
    {
      name: "Ahmed",
      rating: 5,
      text: "Great location and very helpful host.",
    },
    {
      name: "Salma",
      rating: 4,
      text: "Beautiful apartment and good experience.",
    },
  ]);

  function toggleWishlist() {
    try {
      const saved =
        JSON.parse(
          localStorage.getItem("wishlist")
        ) || [];

      const exists = saved.some(
        (item) => item.id === property.id
      );

      const updated = exists
        ? saved.filter(
          (item) => item.id !== property.id
        )
        : [...saved, property];

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updated)
      );

      setWishlist(!exists);
    } catch {
      setWishlist(!wishlist);
    }
  }

  function addReview(e) {
    e.preventDefault();

    if (!reviewText.trim()) return;

    setReviews([
      ...reviews,
      {
        name: "You",
        rating: 5,
        text: reviewText,
      },
    ]);

    setReviewText("");
  }

  const [error, setError] = useState("");
  function handleReserve() {
    if (!checkIn || !checkOut) {
      setError("Please select both check-in and check-out dates.");
      return;
    }

    setError("");

    navigate("/booking", {
      state: {
        property,
        checkIn,
        checkOut,
        guests,
      },
    });
  }


  const totalReviews = reviews.length;

  return (
    <div className="details-page">

      {/* HEADER */}

      <header className="details-header">

        <button
          className="details-back"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <h2>Property Details</h2>

        <button
          className={`details-heart ${wishlist ? "saved" : ""
            }`}
          onClick={toggleWishlist}
        >
          {wishlist ? "♥" : "♡"}
        </button>

      </header>

      <main className="details-container">

        {/* TITLE */}

        <div className="details-title-section">

          <div>
            <h1>{property.title}</h1>

            <p className="details-location">
              📍 {property.location}
            </p>

            <div className="details-rating">
              ★ {property.rating}
              <span>
                · {totalReviews} reviews
              </span>
            </div>
          </div>

          <button
            className="share-btn"
            onClick={() =>
              navigator.clipboard?.writeText(
                window.location.href
              )
            }
          >
            ↗ Share
          </button>

        </div>


        {/* GALLERY */}

        <section className="details-gallery">

          <div className="main-gallery-image">
            <img
              src={images[selectedImage]}
              alt={property.title}
            />
          </div>

          <div className="gallery-thumbnails">

            {images.map((image, index) => (
              <button
                key={index}
                className={
                  selectedImage === index
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() =>
                  setSelectedImage(index)
                }
              >
                <img
                  src={image}
                  alt={`View ${index + 1}`}
                />
              </button>
            ))}

          </div>

        </section>

        {/* CONTENT */}

        <div className="details-layout">

          <div className="details-main">

            {/* HOST */}

            <section className="host-section">

              <div className="host-avatar">
                {property.host
                  ?.charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <h2>
                  Hosted by {property.host}
                </h2>

                <p>
                  Host for {property.hostYears} years
                </p>
              </div>

            </section>

            {/* PROPERTY INFO */}

            <section className="property-facts">

              <div>
                <strong>👥</strong>
                <span>
                  {property.guests} guests
                </span>
              </div>

              <div>
                <strong>🛏</strong>
                <span>
                  {property.bedrooms} bedrooms
                </span>
              </div>

              <div>
                <strong>🛌</strong>
                <span>
                  {property.beds} beds
                </span>
              </div>

              <div>
                <strong>🚿</strong>
                <span>
                  {property.bathrooms} bathrooms
                </span>
              </div>

            </section>

            {/* DESCRIPTION */}

            <section className="details-section">

              <h2>About this place</h2>

              <p className="description">
                {property.description}
              </p>

            </section>

            {/* AMENITIES */}

            <section className="details-section">

              <h2>What this place offers</h2>

              <div className="amenities-grid">

                {property.amenities.map(
                  (amenity, index) => (
                    <div
                      className="amenity-item"
                      key={index}
                    >
                      <span>✓</span>
                      {amenity}
                    </div>
                  )
                )}

              </div>

            </section>

            {/* REVIEWS */}

            <section className="details-section reviews-section">

              <h2>
                ★ {property.rating} ·{" "}
                {totalReviews} reviews
              </h2>

              <div className="reviews-grid">

                {reviews.map(
                  (review, index) => (
                    <div
                      className="review-card"
                      key={index}
                    >
                      <div className="review-header">

                        <div className="review-avatar">
                          {review.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <strong>
                            {review.name}
                          </strong>

                          <div className="review-stars">
                            {"★".repeat(
                              review.rating
                            )}
                          </div>
                        </div>

                      </div>

                      <p>{review.text}</p>

                    </div>
                  )
                )}

              </div>

              {/* ADD REVIEW */}

              <form
                className="review-form"
                onSubmit={addReview}
              >
                <h3>Leave a review</h3>

                <textarea
                  value={reviewText}
                  onChange={(e) =>
                    setReviewText(
                      e.target.value
                    )
                  }
                  placeholder="Share your experience..."
                />

                <button type="submit">
                  Submit review
                </button>
              </form>

            </section>

          </div>

          {/* BOOKING CARD */}

          <aside className="booking-card">

            <div className="booking-price">

              <strong>
                ${property.price}
              </strong>

              <span> / night</span>

            </div>

            <div className="booking-rating">
              ★ {property.rating}
            </div>

            <div className="booking-fields">

              <div className="booking-field">

                <label>CHECK-IN</label>

                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) =>
                    setCheckIn(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="booking-field">

                <label>CHECK-OUT</label>

                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) =>
                    setCheckOut(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="booking-field">

                <label>GUESTS</label>

                <select
                  value={guests}
                  onChange={(e) =>
                    setGuests(
                      Number(e.target.value)
                    )
                  }
                >
                  {Array.from(
                    {
                      length:
                        property.guests,
                    },
                    (_, index) => (
                      <option
                        key={index + 1}
                        value={index + 1}
                      >
                        {index + 1} guest
                        {index > 0
                          ? "s"
                          : ""}
                      </option>
                    )
                  )}
                </select>

              </div>

            </div>
            {error && (
              <div
                className="alert alert-warning d-flex align-items-center gap-2 rounded-4 shadow-sm mt-3"
                role="alert"
              >
                <span className="fs-5">⚠️</span>
                <span>{error}</span>
              </div>
            )}
            <button
              className="reserve-btn"
              onClick={() =>
                setShowBooking(true)
              }
            >
              Reserve
            </button>

            <p className="no-charge">
              You won't be charged yet
            </p>

            <div className="price-breakdown">

              <div>
                <span>
                  ${property.price} × 1 night
                </span>

                <span>
                  ${property.price}
                </span>
              </div>

              <div>
                <span>Service fee</span>
                <span>$0</span>
              </div>

              <hr />

              <div className="total-price">
                <strong>Total</strong>

                <strong>
                  ${property.price}
                </strong>
              </div>

            </div>

          </aside>

        </div>

      </main>

      {/* RESERVATION MODAL */}

      {showBooking && (
        <div
          className="booking-overlay"
          onClick={() =>
            setShowBooking(false)
          }
        >

          <div
            className="booking-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setShowBooking(false)
              }
            >
              ×
            </button>

            <h2>Confirm your stay</h2>

            <div className="modal-property">

              <img
                src={images[0]}
                alt={property.title}
              />

              <div>
                <strong>
                  {property.title}
                </strong>

                <span>
                  {property.location}
                </span>
              </div>

            </div>

            <div className="modal-summary">

              <div>
                <span>Check-in</span>
                <strong>
                  {checkIn || "Not selected"}
                </strong>
              </div>

              <div>
                <span>Check-out</span>
                <strong>
                  {checkOut || "Not selected"}
                </strong>
              </div>

              <div>
                <span>Guests</span>
                <strong>
                  {guests}
                </strong>
              </div>

            </div>

            <button
              className="confirm-btn"
              onClick={handleReserve}
            >
              Confirm reservation
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default PropertyDetails;