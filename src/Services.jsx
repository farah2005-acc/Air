import { useNavigate } from "react-router-dom";
import "./ExtraPages.css";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Cleaning",
      description: "Get professional cleaning services for your stay.",
      icon: "🧹",
    },
    {
      id: 2,
      title: "Transportation",
      description: "Book transportation and airport transfer services.",
      icon: "🚗",
    },
    {
      id: 3,
      title: "Food & dining",
      description: "Enjoy food delivery and special dining experiences.",
      icon: "🍽️",
    },
    {
      id: 4,
      title: "Travel assistance",
      description: "Get help planning your trip and activities.",
      icon: "🧳",
    },
  ];

  return (
    <div className="extra-page">
      <header className="extra-header">
        <button className="extra-back" onClick={() => navigate(-1)}>
          ←
        </button>

        <h1>Services</h1>
      </header>

      <main className="extra-container">
        <div className="extra-hero">
          <h2>Services to make your stay easier</h2>
          <p>
            Choose useful services that can make your trip more comfortable.
          </p>
        </div>

        <div className="extra-grid">
          {services.map((item) => (
            <div className="extra-card" key={item.id}>
              <div className="extra-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button
                onClick={() =>
                  alert(
                    `${item.title} selected!\n\nThis service will be available soon.`
                  )
                }
              >
                Learn more
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Services;