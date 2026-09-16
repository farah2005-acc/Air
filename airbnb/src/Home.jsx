import { useState } from "react";

function Home() {
  // =========================
  // STATES
  // =========================

  const [showPopup, setShowPopup] = useState(true);
  const [showHost, setShowHost] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSearch, setActiveSearch] = useState(null);

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  const userEmail = localStorage.getItem("userEmail") || "No email found";

  const userInitial = userEmail.charAt(0).toUpperCase();


  const openMenu = (menu) => {
    setActiveMenu(menu);
    setShowMenu(false);
  };

  const changeGuests = (type, value) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + value),
    }));
  };

  const totalGuests =
    guests.adults + guests.children + guests.infants;

  // =========================
  // TRANSLATIONS
  // =========================

  const text = {
    host:
      language === "Arabic"
        ? "كن مضيفًا"
        : language === "French"
          ? "Devenir hôte"
          : "Become a host",

    where:
      language === "Arabic"
        ? "إلى أين؟"
        : language === "French"
          ? "Où ?"
          : "Where",

    when:
      language === "Arabic"
        ? "متى؟"
        : language === "French"
          ? "Quand ?"
          : "When",

    who:
      language === "Arabic"
        ? "من؟"
        : language === "French"
          ? "Qui ?"
          : "Who",

    searchDest:
      language === "Arabic"
        ? "ابحث عن وجهات"
        : language === "French"
          ? "Rechercher des destinations"
          : "Search destinations",

    addDates:
      language === "Arabic"
        ? "أضف التواريخ"
        : language === "French"
          ? "Ajouter des dates"
          : "Add dates",

    addGuests:
      language === "Arabic"
        ? "أضف الضيوف"
        : language === "French"
          ? "Ajouter des voyageurs"
          : "Add guests",

    wishlist:
      language === "Arabic"
        ? "المفضلة"
        : language === "French"
          ? "Favoris"
          : "Wishlists",

    profile:
      language === "Arabic"
        ? "الملف الشخصي"
        : language === "French"
          ? "Profil"
          : "Profile",

    notifications:
      language === "Arabic"
        ? "الإشعارات"
        : language === "French"
          ? "Notifications"
          : "Notifications",

    language:
      language === "Arabic"
        ? "اللغة"
        : language === "French"
          ? "Langue"
          : "Language",

    logout:
      language === "Arabic"
        ? "تسجيل الخروج"
        : language === "French"
          ? "Se déconnecter"
          : "Log out",
  };

  return (
    <div className="bg-white min-vh-100">

      {/* NAVBAR */}
      <nav className="navbar bg-white px-4 py-3 border-bottom">
        <div className="container-fluid">

          {/* LOGO */}
          <div className="fw-bold fs-3">
            <span style={{ color: "#FF385C" }}>airbnb</span>
          </div>

          {/* NAV LINKS */}
          <div className="d-none d-md-flex align-items-center gap-4">

            <button className="btn border-0 fw-semibold">
              🌐 All
            </button>

            <button className="btn border-0 fw-semibold">
              🏠 Homes
            </button>

            <button className="btn border-0 fw-semibold">
              🪂 Experiences
            </button>

            <button className="btn border-0 fw-semibold">
              🛎️ Services
            </button>

          </div>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-2">

            {/* BECOME A HOST */}
            <button
              onClick={() => setShowHost(true)}
              className="btn border-0 bg-transparent fw-semibold"
            >
              {text.host}
            </button>

            {/* PROFILE */}
            <button
              onClick={() => openMenu("profile")}
              className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "42px",
                height: "42px",
              }}
            >
              {userInitial}
            </button>

            {/* HAMBURGER + DROPDOWN */}
            <div className="dropdown position-relative">

              <button
                type="button"
                onClick={() => setShowMenu(!showMenu)}
                className="btn btn-light border rounded-pill d-flex align-items-center justify-content-center"
                style={{
                  width: "52px",
                  height: "42px",
                }}
              >
                ☰
              </button>

              {showMenu && (
                <div
                  className="dropdown-menu dropdown-menu-end show shadow-lg border-0 rounded-4 p-2"
                  style={{
                    minWidth: "250px",
                    zIndex: 1050,
                  }}
                >

                  {/* WISHLIST */}
                  <button
                    type="button"
                    className="dropdown-item rounded-3 py-3 fw-semibold"
                    onClick={() => openMenu("wishlist")}
                  >
                    {text.wishlist}
                  </button>

                  {/* PROFILE */}
                  <button
                    type="button"
                    className="dropdown-item rounded-3 py-3 fw-semibold"
                    onClick={() => openMenu("profile")}
                  >
                    {text.profile}
                  </button>

                  {/* NOTIFICATIONS */}
                  <button
                    type="button"
                    className="dropdown-item rounded-3 py-3 fw-semibold"
                    onClick={() => openMenu("notifications")}
                  >
                    {text.notifications}
                  </button>

                  {/* LANGUAGE */}
                  <button
                    type="button"
                    className="dropdown-item rounded-3 py-3 fw-semibold"
                    onClick={() => openMenu("language")}
                  >
                    {text.language}
                  </button>

                </div>
              )}

            </div>

          </div>
        </div>
      </nav>

    </div>
  );



  <div
    className="p-3 rounded-3 fw-semibold text-danger"
    style={{ cursor: "pointer" }}
    onClick={() => {
      localStorage.clear();
      window.location.href = "/login";
    }}
  >
    {text.logout}
  </div>

        
      
}

{/* ================================================= */ }
{/* SEARCH BAR */ }
{/* ================================================= */ }

<div className="container my-4">

  <div
    className="d-flex flex-column flex-md-row align-items-stretch bg-white border shadow-sm rounded-pill"
    style={{
      minHeight: "70px",
    }}
  >

    {/* WHERE */}
    <div
      className="px-5 py-3 flex-grow-1 border-end position-relative"
      onClick={() => setActiveSearch("where")}
      style={{ cursor: "pointer" }}
    >
      <small className="fw-bold">
        {text.where}
      </small>

      <div className="text-secondary">
        {destination || text.searchDest}
      </div>

      {activeSearch === "where" && (
        <div
          className="position-absolute bg-white shadow rounded-4 p-4"
          style={{
            top: "75px",
            left: "0",
            width: "300px",
            zIndex: 100,
          }}
        >

          <h6 className="fw-bold mb-3">
            Where do you want to go?
          </h6>

          <div
            className="p-3 rounded-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDestination("nearby");
              setActiveSearch(null);
            }}
          >
            📍nearby
          </div>

          <div
            className="p-3 rounded-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDestination("Cairo");
              setActiveSearch(null);
            }}
          >
            🏙️ Cairo
          </div>

          <div
            className="p-3 rounded-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDestination("Alexandria");
              setActiveSearch(null);
            }}
          >
            🌊 Alexandria
          </div>

          <div
            className="p-3 rounded-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDestination("Hurghada");
              setActiveSearch(null);
            }}
          >
            🏖️ Hurghada
          </div>

          <div
            className="p-3 rounded-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDestination("Sharm El Sheikh");
              setActiveSearch(null);
            }}
          >
            🏝️ Sharm El Sheikh
          </div>

        </div>
      )}
    </div>

    {/* WHEN */}
    <div
      className="px-5 py-3 flex-grow-1 border-end position-relative"
      onClick={() => setActiveSearch("when")}
      style={{ cursor: "pointer" }}
    >
      <small className="fw-bold">
        {text.when}
      </small>

      <div className="text-secondary">
        {checkIn && checkOut
          ? `${checkIn} - ${checkOut}`
          : text.addDates}
      </div>

      {activeSearch === "when" && (
        <div
          className="position-absolute bg-white shadow rounded-4 p-4"
          style={{
            top: "75px",
            left: "0",
            width: "350px",
            zIndex: 100,
          }}
          onClick={(e) => e.stopPropagation()}
        >

          <h6 className="fw-bold mb-3">
            Select your dates
          </h6>

          <label className="fw-semibold mb-2">
            Check in
          </label>

          <input
            type="date"
            className="form-control mb-3"
            value={checkIn}
            onChange={(e) =>
              setCheckIn(e.target.value)
            }
          />

          <label className="fw-semibold mb-2">
            Check out
          </label>

          <input
            type="date"
            className="form-control mb-3"
            value={checkOut}
            onChange={(e) =>
              setCheckOut(e.target.value)
            }
          />

          <button
            className="btn btn-dark w-100 rounded-3"
            onClick={() => setActiveSearch(null)}
          >
            Done
          </button>

        </div>
      )}
    </div>

    {/* WHO */}
    <div
      className="px-5 py-3 flex-grow-1 position-relative"
      onClick={() => setActiveSearch("who")}
      style={{ cursor: "pointer" }}
    >
      <small className="fw-bold">
        {text.who}
      </small>

      <div className="text-secondary">
        {totalGuests > 0
          ? `${totalGuests} guests`
          : text.addGuests}
      </div>

      {activeSearch === "who" && (
        <div
          className="position-absolute bg-white shadow rounded-4 p-4"
          style={{
            top: "75px",
            right: "0",
            width: "330px",
            zIndex: 100,
          }}
          onClick={(e) => e.stopPropagation()}
        >

          {/* ADULTS */}
          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>
              <div className="fw-bold">
                Adults
              </div>
              <small className="text-secondary">
                Ages 13 or above
              </small>
            </div>

            <div className="d-flex align-items-center gap-3">

              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() =>
                  changeGuests("adults", -1)
                }
              >
                −
              </button>

              <span>
                {guests.adults}
              </span>

              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() =>
                  changeGuests("adults", 1)
                }
              >
                +
              </button>

            </div>

          </div>

          {/* CHILDREN */}
          <div className="d-flex justify-content-between align-items-center mb-4">

            <div>
              <div className="fw-bold">
                Children
              </div>
              <small className="text-secondary">
                Ages 2–12
              </small>
            </div>

            <div className="d-flex align-items-center gap-3">

              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() =>
                  changeGuests("children", -1)
                }
              >
                −
              </button>

              <span>
                {guests.children}
              </span>

              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() =>
                  changeGuests("children", 1)
                }
              >
                +
              </button>

            </div>

          </div>

          {/* INFANTS */}
          <div className="d-flex justify-content-between align-items-center">

            <div>
              <div className="fw-bold">
                Infants
              </div>
              <small className="text-secondary">
                Under 2
              </small>
            </div>

            <div className="d-flex align-items-center gap-3">

              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() =>
                  changeGuests("infants", -1)
                }
              >
                −
              </button>

              <span>
                {guests.infants}
              </span>

              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() =>
                  changeGuests("infants", 1)
                }
              >
                +
              </button>

            </div>

          </div>

          <button
            className="btn btn-dark w-100 mt-4 rounded-3"
            onClick={() => setActiveSearch(null)}
          >
            Done
          </button>

        </div>
      )}
    </div>

    {/* SEARCH BUTTON */}
    <div className="d-flex align-items-center justify-content-center px-3">

      <button
        className="btn text-white rounded-circle"
        style={{
          backgroundColor: "#FF385C",
          width: "50px",
          height: "50px",
        }}
      >
        🔍
      </button>

    </div>

  </div>
</div>

{/* ================================================= */ }
{/* CATEGORIES */ }
{/* ================================================= */ }

<div className="d-flex gap-4 px-4 py-3 border-bottom overflow-auto">

  {[
    ["🏡", "Amazing views"],
    ["🏖️", "Beach"],
    ["🏊", "Pools"],
    ["🏔️", "Mountains"],
    ["🏕️", "Cabins"],
    ["🌾", "Farms"],
    ["✨", "OMG!"],
    ["🎨", "Design"],
  ].map(([icon, title]) => (

    <div
      key={title}
      className="text-center text-nowrap"
      style={{
        minWidth: "90px",
        cursor: "pointer",
      }}
    >
      <div className="fs-4">
        {icon}
      </div>

      <small className="fw-semibold">
        {title}
      </small>

    </div>

  ))}

</div>

{/* ================================================= */ }
{/* HOME CONTENT */ }
{/* ================================================= */ }

<div className="container py-5">

  <div className="text-center py-5">

    <h1 className="fw-bold">
      Find your perfect stay
    </h1>

    <p className="text-secondary">
      Explore unique homes and experiences around the world.
    </p>

  </div>

</div>

{/* ================================================= */ }
{/* FOOTER */ }
{/* ================================================= */ }

<footer className="border-top mt-5 py-5">

  <div className="container">

    <div className="row">

      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">
          Support
        </h6>

        <p className="text-secondary">
          Help Center
        </p>

        <p className="text-secondary">
          AirCover
        </p>

        <p className="text-secondary">
          Cancellation options
        </p>
      </div>

      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">
          Hosting
        </h6>

        <p className="text-secondary">
          Airbnb your home
        </p>

        <p className="text-secondary">
          Hosting resources
        </p>

        <p className="text-secondary">
          Community forum
        </p>
      </div>

      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">
          Airbnb
        </h6>

        <p className="text-secondary">
          Newsroom
        </p>

        <p className="text-secondary">
          Careers
        </p>

        <p className="text-secondary">
          Investors
        </p>
      </div>

      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">
          Follow us
        </h6>

        <p className="text-secondary">
          Instagram
        </p>

        <p className="text-secondary">
          Facebook
        </p>

        <p className="text-secondary">
          Twitter
        </p>
      </div>

    </div>

    <hr />

    <div className="text-secondary small">
      © 2026 Airbnb Clone · Privacy · Terms · Sitemap
    </div>

  </div>

</footer>

{/* ================================================= */ }
{/* PRICE POPUP */ }
{/* ================================================= */ }

{
  showPopup && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 2000,
      }}
    >

      <div
        className="bg-white rounded-4 shadow-lg p-5"
        style={{
          width: "500px",
          maxWidth: "90%",
        }}
      >

        <h3 className="fw-bold">
          Now you’ll see one price for your trip
        </h3>

        <p className="text-secondary mt-3">
          You’ll see the total price including all fees
          before you book.
        </p>

        <button
          className="btn btn-dark w-100 mt-3 rounded-3"
          onClick={() => setShowPopup(false)}
        >
          Got it
        </button>

      </div>

    </div>
  )
}

{/* ================================================= */ }
{/* BECOME A HOST POPUP */ }
{/* ================================================= */ }

{
  showHost && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 2000,
      }}
    >

      <div
        className="bg-white rounded-4 shadow-lg p-5 position-relative"
        style={{
          width: "600px",
          maxWidth: "90%",
        }}
      >

        <button
          onClick={() => setShowHost(false)}
          className="btn btn-light rounded-circle position-absolute top-0 end-0 m-3"
        >
          ✕
        </button>

        <div className="text-center">

          <div style={{ fontSize: "65px" }}>
            🏡
          </div>

          <h2 className="fw-bold mt-3">
            Airbnb it
          </h2>

          <p className="text-secondary mt-3">
            Turn your home into a place people love to stay.
            Share your space and start earning as a host.
          </p>

          <div className="row mt-4">

            <div className="col-md-4">
              <div className="p-3">
                <div className="fs-2">
                  💰
                </div>

                <h6 className="fw-bold mt-2">
                  Earn money
                </h6>

                <small className="text-secondary">
                  Make extra income from your space.
                </small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3">
                <div className="fs-2">
                  🤝
                </div>

                <h6 className="fw-bold mt-2">
                  Welcome guests
                </h6>

                <small className="text-secondary">
                  Meet people from around the world.
                </small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3">
                <div className="fs-2">
                  🏠
                </div>

                <h6 className="fw-bold mt-2">
                  Be a host
                </h6>

                <small className="text-secondary">
                  Share your home your way.
                </small>
              </div>
            </div>

          </div>

          <button
            onClick={() => setShowHost(false)}
            className="btn text-white fw-bold w-100 mt-4 py-3 rounded-3"
            style={{
              backgroundColor: "#FF385C",
            }}
          >
            Get started
          </button>

        </div>

      </div>

    </div>
  )
}

{/* ================================================= */ }
{/* WISHLIST POPUP */ }
{/* ================================================= */ }

{
  activeMenu === "wishlist" && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 2000,
      }}
    >

      <div
        className="bg-white rounded-4 shadow-lg p-5 text-center"
        style={{
          width: "500px",
          maxWidth: "90%",
        }}
      >

        <div className="fs-1">
          ❤️
        </div>

        <h3 className="fw-bold mt-3">
          {text.wishlist}
        </h3>

        <p className="text-secondary">
          You haven't saved anything to your wishlists yet.
        </p>

        <button
          className="btn btn-dark w-100 mt-3 rounded-3"
          onClick={() => setActiveMenu(null)}
        >
          Explore stays
        </button>

      </div>

    </div>
  )
}

{/* ================================================= */ }
{/* PROFILE POPUP */ }
{/* ================================================= */ }

{
  activeMenu === "profile" && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 2000,
      }}
    >

      <div
        className="bg-white rounded-4 shadow-lg p-5 text-center"
        style={{
          width: "450px",
          maxWidth: "90%",
        }}
      >

        <div
          className="rounded-circle bg-dark text-white d-flex align-items-center justify-content-center mx-auto"
          style={{
            width: "80px",
            height: "80px",
            fontSize: "30px",
          }}
        >
          {userInitial}
        </div>

        <h3 className="fw-bold mt-3">
          {text.profile}
        </h3>

        <p className="text-secondary">
          {userEmail}
        </p>

        <button
          className="btn btn-dark w-100 mt-3 rounded-3"
          onClick={() => setActiveMenu(null)}
        >
          Close
        </button>

      </div>

    </div>
  )
}

{/* ================================================= */ }
{/* NOTIFICATIONS POPUP */ }
{/* ================================================= */ }

{
  activeMenu === "notifications" && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 2000,
      }}
    >

      <div
        className="bg-white rounded-4 shadow-lg p-5 text-center"
        style={{
          width: "450px",
          maxWidth: "90%",
        }}
      >

        <div className="fs-1">
          🔔
        </div>

        <h3 className="fw-bold mt-3">
          {text.notifications}
        </h3>

        <p className="text-secondary">
          No notification yet.
        </p>

        <button
          className="btn btn-dark w-100 mt-3 rounded-3"
          onClick={() => setActiveMenu(null)}
        >
          Close
        </button>

      </div>

    </div>
  )
}

{/* ================================================= */ }
{/* LANGUAGE POPUP */ }
{/* ================================================= */ }

{
  activeMenu === "language" && (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        zIndex: 2000,
      }}
    >

      <div
        className="bg-white rounded-4 shadow-lg p-5"
        style={{
          width: "450px",
          maxWidth: "90%",
        }}
      >

        <h3 className="fw-bold mb-4">
          {text.language}
        </h3>

        {/* ENGLISH */}
        <button
          onClick={() => {
            setLanguage("English");
            localStorage.setItem(
              "language",
              "English"
            );
            document.documentElement.dir = "ltr";
            setActiveMenu(null);
          }}
          className="btn btn-outline-dark w-100 p-3 mb-3 text-start"
        >
          🇬🇧 English
        </button>

        {/* ARABIC */}
        <button
          onClick={() => {
            setLanguage("Arabic");
            localStorage.setItem(
              "language",
              "Arabic"
            );
            document.documentElement.dir = "rtl";
            setActiveMenu(null);
          }}
          className="btn btn-outline-dark w-100 p-3 mb-3 text-start"
        >
          🇪🇬 العربية
        </button>

        {/* FRENCH */}
        <button
          onClick={() => {
            setLanguage("French");
            localStorage.setItem(
              "language",
              "French"
            );
            document.documentElement.dir = "ltr";
            setActiveMenu(null);
          }}
          className="btn btn-outline-dark w-100 text-start p-3"
        >
          🇫🇷 Français
        </button>

      </div>

    </div>
  )
}

    </div >
  );
}

export default Home;