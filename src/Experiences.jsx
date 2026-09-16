
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Experiences() {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      title: "Cooking experiences",
      description:
        "Learn how to cook delicious local dishes with talented local hosts.",
      icon: "🍳",
      rating: "4.9",
      reviews: "520",
      location: "Cairo, Egypt",
      price: "From $35 / guest",
    },
    {
      id: 2,
      title: "Photography",
      description:
        "Discover beautiful places and capture amazing photos with a local photographer.",
      icon: "📸",
      rating: "4.8",
      reviews: "340",
      location: "Alexandria, Egypt",
      price: "From $40 / guest",
    },
    {
      id: 3,
      title: "Adventure",
      description:
        "Enjoy exciting outdoor activities and unforgettable adventures.",
      icon: "🏔️",
      rating: "4.9",
      reviews: "275",
      location: "Sinai, Egypt",
      price: "From $55 / guest",
    },
    {
      id: 4,
      title: "Art & Culture",
      description:
        "Explore art, history, museums and the unique culture of the city.",
      icon: "🎨",
      rating: "4.8",
      reviews: "410",
      location: "Cairo, Egypt",
      price: "From $25 / guest",
    },
    {
      id: 5,
      title: "Boat Trips",
      description:
        "Relax on the water and enjoy beautiful views with an unforgettable boat trip.",
      icon: "⛵",
      rating: "4.9",
      reviews: "190",
      location: "Red Sea, Egypt",
      price: "From $60 / guest",
    },
    {
      id: 6,
      title: "Desert Experience",
      description:
        "Explore the desert, enjoy the sunset and experience local Bedouin culture.",
      icon: "🐪",
      rating: "5.0",
      reviews: "230",
      location: "Siwa, Egypt",
      price: "From $50 / guest",
    },
  ];

  const handleExperience = (experience) => {
    alert(
      `${experience.title} selected!\n\n${experience.location}\n${experience.price}\n\nMore experiences will be available soon.`
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

      {/* Hero Section */}
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
                ✨ Airbnb Experiences
              </span>

              <h1 className="display-4 fw-bold mb-3">
                Find something
                <span style={{ color: "#ff385c" }}> memorable</span> to do
              </h1>

              <p className="lead text-secondary mb-4">
                Discover unique experiences hosted by local people.
                Explore new places, learn something new and create
                unforgettable memories.
              </p>

              <button
                className="btn btn-dark btn-lg rounded-pill px-4"
                onClick={() =>
                  document
                    .getElementById("experiences")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore experiences ↓
              </button>

            </div>

            <div className="col-lg-5">

              <div
                className="rounded-4 shadow-sm p-4 bg-white"
                style={{
                  border: "1px solid #eee",
                }}
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
                    🌍
                  </div>

                  <div>
                    <h5 className="mb-1 fw-bold">
                      Experience something new
                    </h5>

                    <small className="text-secondary">
                      Local experiences made for you
                    </small>
                  </div>

                </div>

                <hr />

                <div className="row text-center">

                  <div className="col-4">
                    <h4 className="fw-bold mb-0">6+</h4>
                    <small className="text-secondary">
                      Experiences
                    </small>
                  </div>

                  <div className="col-4 border-start border-end">
                    <h4 className="fw-bold mb-0">4.9★</h4>
                    <small className="text-secondary">
                      Average rating
                    </small>
                  </div>

                  <div className="col-4">
                    <h4 className="fw-bold mb-0">100+</h4>
                    <small className="text-secondary">
                      Hosts
                    </small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Experiences */}
      <main
        id="experiences"
        className="container py-5"
      >

        <div className="text-center mb-5">

          <h2 className="fw-bold">
            Explore experiences
          </h2>

          <p className="text-secondary">
            Book unique activities and discover the destination like a local.
          </p>

        </div>

        <div className="row g-4">

          {experiences.map((item) => (

            <div
              className="col-12 col-md-6 col-lg-4"
              key={item.id}
            >

              <div
                className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden"
                style={{
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}

                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-7px)";

                  e.currentTarget.style.boxShadow =
                    "0 15px 35px rgba(0,0,0,0.12)";
                }}

                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.boxShadow =
                    "0 0.125rem 0.25rem rgba(0,0,0,.075)";
                }}
              >

                {/* Image / Icon Area */}
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    height: "170px",
                    background:
                      "linear-gradient(135deg, #fff1f3, #f8f9fa)",
                    fontSize: "70px",
                  }}
                >
                  {item.icon}
                </div>

                {/* Card Body */}
                <div className="card-body p-4">

                  <div className="d-flex justify-content-between align-items-start mb-2">

                    <h4 className="fw-bold mb-0">
                      {item.title}
                    </h4>

                    <span className="badge bg-light text-dark border rounded-pill">
                      ★ {item.rating}
                    </span>

                  </div>

                  <small className="text-secondary">
                    {item.reviews} reviews
                  </small>

                  <div className="text-secondary small mt-2">
                    📍 {item.location}
                  </div>

                  <p className="text-secondary mt-3 mb-4">
                    {item.description}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">

                    <div>

                      <small className="text-secondary d-block">
                        Available now
                      </small>

                      <strong>
                        {item.price}
                      </strong>

                    </div>

                    <button
                      className="btn btn-dark rounded-pill px-3"
                      onClick={() => handleExperience(item)}
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

      {/* How it works */}
      <section className="bg-white border-top border-bottom py-5">

        <div className="container">

          <div className="text-center mb-5">

            <h2 className="fw-bold">
              How experiences work
            </h2>

            <p className="text-secondary">
              Finding something amazing to do is easy.
            </p>

          </div>

          <div className="row g-4 text-center">

            <div className="col-md-4">

              <div className="fs-1 mb-3">
                🔎
              </div>

              <h5 className="fw-bold">
                1. Find an experience
              </h5>

              <p className="text-secondary">
                Browse unique activities hosted by local people.
              </p>

            </div>

            <div className="col-md-4">

              <div className="fs-1 mb-3">
                📅
              </div>

              <h5 className="fw-bold">
                2. Choose your date
              </h5>

              <p className="text-secondary">
                Pick the experience and time that works best for you.
              </p>

            </div>

            <div className="col-md-4">

              <div className="fs-1 mb-3">
                ❤️
              </div>

              <h5 className="fw-bold">
                3. Make memories
              </h5>

              <p className="text-secondary">
                Enjoy your experience and create unforgettable memories.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Become a Host */}
      <section className="py-5">

        <div className="container">

          <div
            className="rounded-4 p-5 text-center text-white"
            style={{
              background:
                "linear-gradient(135deg, #ff385c 0%, #e31c5f 100%)",
            }}
          >

            <h2 className="fw-bold mb-3">
              Have a special experience to share?
            </h2>

            <p className="mb-4 opacity-75">
              Become a host and share your passion with travelers
              from around the world.
            </p>

            <button
              className="btn btn-light rounded-pill px-4 py-2 fw-semibold"
              onClick={() =>
                alert(
                  "Become a Host\n\nHost registration will be available soon."
                )
              }
            >
              Become a host
            </button>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-4">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <strong
                style={{
                  color: "#ff385c",
                }}
              >
                airbnb
              </strong>

              <span className="text-secondary ms-2">
                © 2026 Airbnb Experiences
              </span>

            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">

              <span className="text-secondary me-3">
                Privacy
              </span>

              <span className="text-secondary me-3">
                Terms
              </span>

              <span className="text-secondary">
                Help
              </span>

            </div>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Experiences;

