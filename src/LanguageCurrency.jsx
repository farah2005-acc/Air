import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LanguageCurrency() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );

  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "EGP"
  );

  const handleSave = () => {
    localStorage.setItem("language", language);
    localStorage.setItem("currency", currency);

    alert(
      `Settings saved!\nLanguage: ${language}\nCurrency: ${currency}`
    );

    navigate(-1);
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white border-bottom sticky-top">
        <div className="container py-3 d-flex align-items-center gap-3">
          <button
            className="btn btn-outline-secondary rounded-circle"
            style={{ width: "42px", height: "42px" }}
            onClick={() => navigate(-1)}
          >
            ←
          </button>

          <h1 className="h4 mb-0 fw-bold">
            Language & Currency
          </h1>
        </div>
      </header>

      {/* Settings */}
      <main className="container py-5">
        <div className="card shadow-sm border-0 rounded-4 mx-auto"
             style={{ maxWidth: "750px" }}>

          {/* Language */}
          <div className="card-body p-4 border-bottom">
            <div className="row align-items-center g-3">
              <div className="col-md">
                <h5 className="fw-semibold mb-1">
                  Language
                </h5>

                <p className="text-secondary mb-0 small">
                  Choose your preferred language
                </p>
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="English">English</option>
                  <option value="Arabic">Arabic</option>
                  <option value="French">French</option>
                </select>
              </div>
            </div>
          </div>

          {/* Currency */}
          <div className="card-body p-4 border-bottom">
            <div className="row align-items-center g-3">
              <div className="col-md">
                <h5 className="fw-semibold mb-1">
                  Currency
                </h5>

                <p className="text-secondary mb-0 small">
                  Choose the currency used for prices
                </p>
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option value="EGP">EGP - Egyptian Pound</option>
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save */}
          <div className="card-body p-4">
            <button
              className="btn btn-dark px-4 py-2 fw-semibold rounded-3"
              onClick={handleSave}
            >
              Save settings
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default LanguageCurrency;