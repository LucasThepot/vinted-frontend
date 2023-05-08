import logo from "../assets/vinted-logo.jpg";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ handleToken, token }) => {
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
        {token ? (
          <button
            onClick={() => {
              handleToken(null);
            }}
          >
            Déconnexion
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button>s'inscrire</button>
            </Link>
            <Link to="/login">
              <button>se connecter</button>
            </Link>
          </>
        )}

        <button className="lastButton">vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
