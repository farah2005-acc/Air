
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Cleaning",
      description:
        "Enjoy a fresh and spotless space with professional cleaning services.",
      icon: "🧹",
      rating: "4.9",
      reviews: "320",
      price: "From $25",
    },
    {
      id: 2,
      title: "Transportation",
      description:
        "Book comfortable transportation and airport transfer services.",
      icon: "🚗",
      rating: "4.8",
      reviews: "210",
      price: "From $30",
    },
    {
      id: 3,
      title: "Food & Dining",
      description:
        "Discover food delivery options and unique dining experiences.",
      icon: "🍽️",
      rating: "4.9",
      reviews: "450",
      price: "From $20",
    },
    {
      id: 4,
      title: "Travel Assistance",
      description:
        "Get help planning your trip, activities, and unforgettable experiences.",
      icon: "🧳",
      rating: "4.8",
      reviews: "180",
      price: "From $15",
    },
    {
      id: 5,
      title: "Laundry",
      description:
        "Save time with convenient laundry and clothes care services.",
      icon: "👕",
      rating: "4.7",
      reviews: "145",
      price: "From $18",
    },
    {
      id: 6,
      title: "Private Chef",
      description:
        "Enjoy delicious meals prepared specially for you by a private chef.",
      icon: "👨‍🍳",
      rating: "5.0",
      reviews: "95",
      price: "From $60",
    },
  ];

  const handleService = (service) => {
    alert(
      `${service.title} selected!\n\n${service.price}\n\nThis service will be available soon.`
    );
  };

  return (
    <div className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
        <div className="container py-2">
          <button
            className="btn btn-link text-decoration-none fw-bold fs-4"
            onClick={() => navigate("/")}
            style={{ color: "#ff385c" }}
          >
            airbnb
          </button>

          <button
            className="btn btn-outline-dark rounded-pill px-4"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #fff 0%, #fff5f6 50%, #f8f9fa 100%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span
                className="badge rounded-pill px-3 py-2 mb-3"
                style={{
                  backgroundColor: "#ffe4e9",
                  color: "#d90429",
                }}
              >
                ✨ Make your stay easier
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Services for a more
                <span style={{ color: "#ff385c" }}> comfortable stay</span>
              </h1>

              <p className="lead text-secondary mb-4">
                From airport transfers to private chefs, discover services
                designed to make your Airbnb experience even better.
              </p>

              <button
                className="btn btn-dark btn-lg rounded-pill px-4"
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore services ↓
              </button>
            </div>

            <div className="col-lg-5">
              <div
                className="rounded-4 shadow-sm p-4 bg-white"
                style={{ border: "1px solid #eee" }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "55px",
                      height: "55px",
                      backgroundColor: "#ffe4e9",
                      fontSize: "25px",
                    }}
                  >
                    ❤️
                  </div>

                  <div>
                    <h5 className="mb-1 fw-bold">Travel without the stress</h5>
                    <small className="text-secondary">
                      Everything you need in one place
                    </small>
                  </div>
                </div>

                <hr />

                <div className="row text-center">
                  <div className="col-4">
                    <h4 className="fw-bold mb-0">6+</h4>
                    <small className="text-secondary">Services</small>
                  </div>

                  <div className="col-4 border-start border-end">
                    <h4 className="fw-bold mb-0">4.9★</h4>
                    <small className="text-secondary">Rating</small>
                  </div>

                  <div className="col-4">
                    <h4 className="fw-bold mb-0">24/7</h4>
                    <small className="text-secondary">Support</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <main id="services" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Everything you need</h2>

          <p className="text-secondary">
            Choose a service and make your trip more comfortable.
          </p>
        </div>

        <div className="row g-4">
          {services.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div
                className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-7px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0.125rem 0.25rem rgba(0,0,0,.075)";
                }}
              >
                {/* Card Top */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: "150px",
                    background:
                      "linear-gradient(135deg, #fff1f3, #f8f9fa)",
                    fontSize: "65px",
                  }}
                >
                  {item.icon}
                </div>

                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h4 className="fw-bold mb-0">{item.title}</h4>

                    <span className="badge bg-light text-dark border rounded-pill">
                      ★ {item.rating}
                    </span>
                  </div>

                  <small className="text-secondary">
                    {item.reviews} reviews
                  </small>

                  <p className="text-secondary mt-3 mb-4">
                    {item.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-secondary d-block">
                        Available now
                      </small>

                      <strong>{item.price}</strong>
                    </div>

                    <button
                      className="btn btn-dark rounded-pill px-3"
                      onClick={() => handleService(item)}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Why choose us */}
      <section className="bg-white border-top border-bottom py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why book our services?</h2>
            <p className="text-secondary">
              Simple, convenient and designed around your trip.
            </p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="fs-1 mb-3">⚡</div>
              <h5 className="fw-bold">Easy & Fast</h5>
              <p className="text-secondary">
                Book the services you need quickly and easily.
              </p>
            </div>

            <div className="col-md-4">
              <div className="fs-1 mb-3">🛡️</div>
              <h5 className="fw-bold">Trusted Services</h5>
              <p className="text-secondary">
                Enjoy reliable services from trusted professionals.
              </p>
            </div>

            <div className="col-md-4">
              <div className="fs-1 mb-3">💬</div>
              <h5 className="fw-bold">24/7 Support</h5>
              <p className="text-secondary">
                We're here to help whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5">
        <div className="container">
          <div
            className="rounded-4 p-5 text-center text-white"
            style={{
              background:
                "linear-gradient(135deg, #ff385c 0%, #e31c5f 100%)",
            }}
          >
            <h2 className="fw-bold mb-3">Ready to make your trip better?</h2>

            <p className="mb-4 opacity-75">
              Explore our services and enjoy a smoother Airbnb experience.
            </p>

            <button
              className="btn btn-light rounded-pill px-4 py-2 fw-semibold"
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Browse services
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <strong style={{ color: "#ff385c" }}>airbnb</strong>
              <span className="text-secondary ms-2">
                © 2026 Airbnb Services
              </span>
            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <span className="text-secondary me-3">Privacy</span>
              <span className="text-secondary me-3">Terms</span>
              <span className="text-secondary">Help</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;

