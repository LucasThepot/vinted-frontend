import logo from "../assets/vinted-logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerstyle">
      <div className="headercontainer">
        <Link to="/">
          <img className="logo" alt="logo" src={logo} />
        </Link>
        <input
          className="researchBar"
          type="text"
          placeholder="Rechercher des articles"
        ></input>
        <button>s'inscrire</button>
        <button>se connecter</button>
        <button className="lastButton">vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
