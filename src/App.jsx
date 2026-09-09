import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Explore from "./Explore";
import PropertyDetails from "./PropertyDetails";
import Wishlist from "./Wishlist";

import Experiences from "./Experiences";
import Services from "./Services";
import BecomeHost from "./BecomeHost";
import LanguageCurrency from "./LanguageCurrency";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/explore" element={<Explore />} />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/experiences"
          element={<Experiences />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/become-host"
          element={<BecomeHost />}
        />

        <Route
          path="/language-currency"
          element={<LanguageCurrency />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;