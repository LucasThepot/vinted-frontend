import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// Import CSS
import "./CSS/App.css";
import "./CSS/OfferPage.css";
import "./CSS/Header.css";
import "./CSS/HomePage.css";
import "./CSS/SignupPage.css";
import "./CSS/LoginPage.css";
import "./CSS/PublishPage.css";

// Import Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

// Components
import Header from "./components/Header";

function App() {
  // State dans lequel je stocke le token. Sa valeur de base sera :
  // - Si je trouve un cookie token, ce cookie
  // - Sinon, null
  const [token, setToken] = useState(Cookies.get("vintedToken") || null);
  // State correspondant à la recherche
  const [search, setSearch] = useState("");
  // Cette fonction permet de stocker le token dans le state et dans les cookies ou supprimer le token dans le state et dans les cookies
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("vintedToken", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("vintedToken");
    }
  };

  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Mon Header apparait sur toutes mes pages */}
      <Header
        handleToken={handleToken}
        token={token}
        search={search}
        setSearch={setSearch}
      />
      {/* Le composant Routes doit contenir toutes mes Route il affiche un composant à la fois */}
      <Routes>
        {/* Pour chaque route, je précise son chemin et le composant qu'elle doit afficher */}
        <Route path="/" element={<Home search={search} />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<SignUp handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
