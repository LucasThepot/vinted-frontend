import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./OfferPage.css";
import "./Header.css";
import "./HomePage.css";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Components
import Header from "./components/Header";

function App() {
  return (
    // Router doit contenir tout mon site
    <Router>
      {/* Mon Header apparait sur toutes mes pages */}
      <Header />
      {/* Le composant Routes doit contenir toutes mes Route il affiche un composant à la fois */}
      <Routes>
        {/* Pour chaque route, je précise son chemin et le composant qu'elle doit afficher */}
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
