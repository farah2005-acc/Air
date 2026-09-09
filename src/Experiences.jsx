import { useNavigate } from "react-router-dom";
import "./ExtraPages.css";

function Experiences() {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      title: "Cooking experiences",
      description: "Learn how to cook delicious local dishes.",
      icon: "🍳",
    },
    {
      id: 2,
      title: "Photography",
      description: "Discover beautiful places and capture amazing photos.",
      icon: "📸",
    },
    {
      id: 3,
      title: "Adventure",
      description: "Enjoy exciting outdoor activities and adventures.",
      icon: "🏔️",
    },
    {
      id: 4,
      title: "Art & culture",
      description: "Explore art, history and local culture.",
      icon: "🎨",
    },
  ];

  return (
    <div className="extra-page">
      <header className="extra-header">
        <button className="extra-back" onClick={() => navigate(-1)}>
          ←
        </button>

        <h1>Experiences</h1>
      </header>

      <main className="extra-container">
        <div className="extra-hero">
          <h2>Find something memorable to do</h2>
          <p>
            Discover experiences hosted by local people and create
            unforgettable memories.
          </p>
        </div>

        <div className="extra-grid">
          {experiences.map((item) => (
            <div className="extra-card" key={item.id}>
              <div className="extra-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button
                onClick={() =>
                  alert(
                    `${item.title} selected!\n\nMore experiences will be available soon.`
                  )
                }
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Experiences;