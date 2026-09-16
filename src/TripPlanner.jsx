import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const destinations = {
  Cairo: {
    emoji: "🏛️",
    intro: "History, food, culture and unforgettable city views.",
    activities: [
      ["🏛️", "Visit the Pyramids & Sphinx", "Morning", "Iconic sights and great photos"],
      ["🕌", "Explore Historic Cairo", "Afternoon", "Mosques, old streets and local culture"],
      ["🍽️", "Try Egyptian cuisine", "Evening", "A local dinner experience"],
      ["🚤", "Nile experience", "Evening", "Relax by or on the Nile"],
      ["🛍️", "Khan El Khalili", "Afternoon", "Shopping and traditional souvenirs"],
      ["☕", "Café break", "Evening", "Coffee and dessert"],
    ],
  },
  "Sharm El Sheikh": {
    emoji: "🏖️",
    intro: "Beaches, sea activities, relaxation and desert adventures.",
    activities: [
      ["🏖️", "Beach day", "Morning", "Relax and enjoy the Red Sea"],
      ["🤿", "Snorkeling / diving", "Afternoon", "Discover the Red Sea"],
      ["🍽️", "Dinner by the sea", "Evening", "Enjoy a relaxed local dinner"],
      ["🏜️", "Desert safari", "Afternoon", "Adventure outside the city"],
      ["🌅", "Sunset experience", "Evening", "Watch the sunset and relax"],
      ["🛍️", "Local market", "Evening", "Shopping and souvenirs"],
    ],
  },
  Alexandria: {
    emoji: "🌊",
    intro: "Mediterranean views, history, seafood and relaxed city walks.",
    activities: [
      ["🌊", "Corniche walk", "Morning", "Enjoy the Mediterranean coastline"],
      ["📚", "Bibliotheca Alexandrina", "Afternoon", "Culture and architecture"],
      ["🐟", "Seafood lunch", "Afternoon", "Try fresh local seafood"],
      ["🏛️", "Historic Alexandria", "Morning", "Explore the city's history"],
      ["🌅", "Sunset by the sea", "Evening", "Relax with a Mediterranean view"],
      ["☕", "Café evening", "Evening", "Coffee and dessert"],
    ],
  },
};

const interests = [
  { id: "relax", label: "Relaxation", icon: "🧘" },
  { id: "culture", label: "Culture", icon: "🏛️" },
  { id: "food", label: "Food", icon: "🍽️" },
  { id: "adventure", label: "Adventure", icon: "🤿" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
];

function TripPlanner() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(3);
  const [guests, setGuests] = useState(2);
  const [budget, setBudget] = useState("medium");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [plan, setPlan] = useState(null);

  const toggleInterest = (id) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const generatePlan = () => {
    const selectedDestination = destination || "Cairo";
    const data = destinations[selectedDestination];
    const allActivities = data.activities;

    const preferred = allActivities.filter(([emoji, title]) => {
      const text = `${emoji} ${title}`.toLowerCase();
      return (
        (selectedInterests.includes("food") && text.includes("food")) ||
        (selectedInterests.includes("culture") && (text.includes("historic") || text.includes("pyramid") || text.includes("bibliotheca"))) ||
        (selectedInterests.includes("adventure") && (text.includes("diving") || text.includes("safari"))) ||
        (selectedInterests.includes("shopping") && text.includes("market")) ||
        (selectedInterests.includes("relax") && (text.includes("beach") || text.includes("sunset") || text.includes("café")))
      );
    });

    const pool = [...new Map([...preferred, ...allActivities].map((item) => [item[1], item])).values()];
    const dailyPlans = Array.from({ length: days }, (_, index) => {
      const first = pool[(index * 2) % pool.length];
      const second = pool[(index * 2 + 1) % pool.length];
      return {
        day: index + 1,
        items: [first, second],
      };
    });

    setPlan({ destination: selectedDestination, data, dailyPlans });
    setStep(4);
  };

  const budgetText = useMemo(() => {
    if (budget === "low") return "Budget friendly";
    if (budget === "high") return "Premium stay";
    return "Comfortable stay";
  }, [budget]);

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar bg-white border-bottom sticky-top">
        <div className="container py-2 d-flex align-items-center justify-content-between">
          <button
            className="btn btn-link text-decoration-none fw-bold fs-3 p-0"
            style={{ color: "#ff385c" }}
            onClick={() => navigate("/")}
          >
            airbnb
          </button>
          <button className="btn btn-light rounded-pill px-3" onClick={() => navigate(-1)}>
            ← Back
          </button>
        </div>
      </nav>

      <main className="container py-5" style={{ maxWidth: 980 }}>
        {step < 4 && (
          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-3" style={{ background: "#ffe4e9", color: "#d90429" }}>
              ✨ Smart Trip Planner
            </span>
            <h1 className="display-5 fw-bold mb-3">Not sure where to go?</h1>
            <p className="lead text-secondary mb-0">
              Answer a few questions and we’ll build a trip plan for you.
            </p>
          </div>
        )}

        {step === 1 && (
          <section className="bg-white rounded-4 shadow-sm p-4 p-md-5">
            <h2 className="fw-bold mb-2">Where do you want to go?</h2>
            <p className="text-secondary mb-4">Pick a destination or let us surprise you.</p>
            <div className="row g-3">
              {Object.entries(destinations).map(([name, data]) => (
                <div className="col-md-4" key={name}>
                  <button
                    className={`w-100 text-start border rounded-4 p-4 bg-white h-100 ${destination === name ? "border-dark border-2" : ""}`}
                    onClick={() => setDestination(name)}
                  >
                    <div className="fs-1 mb-2">{data.emoji}</div>
                    <h5 className="fw-bold mb-1">{name}</h5>
                    <small className="text-secondary">{data.intro}</small>
                  </button>
                </div>
              ))}
            </div>
            <button
              className="btn btn-dark rounded-pill px-4 py-2 mt-4"
              onClick={() => { if (!destination) setDestination("Cairo"); setStep(2); }}
            >
              Continue
            </button>
          </section>
        )}

        {step === 2 && (
          <section className="bg-white rounded-4 shadow-sm p-4 p-md-5">
            <h2 className="fw-bold mb-2">Tell us about your trip</h2>
            <p className="text-secondary mb-4">We’ll use this to shape your itinerary.</p>

            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Number of days</label>
                <div className="d-flex align-items-center gap-3">
                  <button className="btn btn-outline-secondary rounded-circle" onClick={() => setDays(Math.max(1, days - 1))}>−</button>
                  <strong className="fs-4">{days}</strong>
                  <button className="btn btn-outline-secondary rounded-circle" onClick={() => setDays(Math.min(14, days + 1))}>+</button>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Guests</label>
                <div className="d-flex align-items-center gap-3">
                  <button className="btn btn-outline-secondary rounded-circle" onClick={() => setGuests(Math.max(1, guests - 1))}>−</button>
                  <strong className="fs-4">{guests}</strong>
                  <button className="btn btn-outline-secondary rounded-circle" onClick={() => setGuests(Math.min(16, guests + 1))}>+</button>
                </div>
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Budget</label>
                <div className="row g-2">
                  {[['low', '💰', 'Budget friendly'], ['medium', '💰💰', 'Comfortable'], ['high', '💰💰💰', 'Premium']].map(([value, icon, label]) => (
                    <div className="col-md-4" key={value}>
                      <button className={`btn w-100 border rounded-4 p-3 text-start ${budget === value ? "border-dark border-2" : ""}`} onClick={() => setBudget(value)}>
                        <div>{icon}</div><strong>{label}</strong>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-flex gap-2 mt-4">
              <button className="btn btn-light rounded-pill px-4" onClick={() => setStep(1)}>Back</button>
              <button className="btn btn-dark rounded-pill px-4" onClick={() => setStep(3)}>Continue</button>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="bg-white rounded-4 shadow-sm p-4 p-md-5">
            <h2 className="fw-bold mb-2">What are you into?</h2>
            <p className="text-secondary mb-4">Choose as many as you like.</p>
            <div className="row g-3">
              {interests.map((interest) => {
                const selected = selectedInterests.includes(interest.id);
                return (
                  <div className="col-6 col-md-4" key={interest.id}>
                    <button
                      className={`btn w-100 text-start border rounded-4 p-3 ${selected ? "border-dark border-2" : ""}`}
                      onClick={() => toggleInterest(interest.id)}
                    >
                      <span className="fs-3 me-2">{interest.icon}</span>
                      <strong>{interest.label}</strong>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="d-flex gap-2 mt-4">
              <button className="btn btn-light rounded-pill px-4" onClick={() => setStep(2)}>Back</button>
              <button className="btn rounded-pill px-4 text-white" style={{ background: "#ff385c" }} onClick={generatePlan}>
                ✨ Create my trip
              </button>
            </div>
          </section>
        )}

        {step === 4 && plan && (
          <section>
            <div className="bg-white rounded-4 shadow-sm p-4 p-md-5 mb-4">
              <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                <div>
                  <span className="badge rounded-pill bg-dark mb-3">Your personalized plan</span>
                  <h1 className="fw-bold mb-2">{plan.data.emoji} {plan.destination}</h1>
                  <p className="text-secondary mb-0">{days} days · {guests} guests · {budgetText}</p>
                </div>
                <div className="text-md-end">
                  <div className="small text-secondary">Made for you</div>
                  <div className="fs-2">✨</div>
                </div>
              </div>
            </div>

            {plan.dailyPlans.map((day) => (
              <div className="bg-white rounded-4 shadow-sm p-4 mb-3" key={day.day}>
                <h4 className="fw-bold mb-3">Day {day.day}</h4>
                <div className="row g-3">
                  {day.items.map(([emoji, title, time, description]) => (
                    <div className="col-md-6" key={`${day.day}-${title}`}>
                      <div className="border rounded-4 p-3 h-100">
                        <div className="fs-2 mb-2">{emoji}</div>
                        <div className="small text-secondary">{time}</div>
                        <h5 className="fw-bold mb-1">{title}</h5>
                        <p className="text-secondary mb-0">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-white rounded-4 shadow-sm p-4 mt-4">
              <h4 className="fw-bold">🏠 Find your stay</h4>
              <p className="text-secondary">We’ve built the plan. Now choose a home that fits your trip.</p>
              <div className="d-flex flex-wrap gap-2">
                <button
                  className="btn text-white rounded-pill px-4"
                  style={{ background: "#ff385c" }}
                  onClick={() => navigate("/explore", { state: { destination: plan.destination, guests } })}
                >
                  Browse homes in {plan.destination}
                </button>
                <button className="btn btn-light rounded-pill px-4" onClick={() => { setPlan(null); setStep(1); }}>
                  Create another plan
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default TripPlanner;
