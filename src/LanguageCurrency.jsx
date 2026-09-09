import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExtraPages.css";

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
    <div className="extra-page">
      <header className="extra-header">
        <button className="extra-back" onClick={() => navigate(-1)}>
          ←
        </button>

        <h1>Language & Currency</h1>
      </header>

      <main className="settings-container">
        <div className="settings-card">
          <div className="settings-row">
            <div>
              <h3>Language</h3>
              <p>Choose your preferred language</p>
            </div>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
            </select>
          </div>

          <div className="settings-row">
            <div>
              <h3>Currency</h3>
              <p>Choose the currency used for prices</p>
            </div>

            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="EGP">EGP - Egyptian Pound</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
            </select>
          </div>

          <button className="save-settings" onClick={handleSave}>
            Save settings
          </button>
        </div>
      </main>
    </div>
  );
}

export default LanguageCurrency;