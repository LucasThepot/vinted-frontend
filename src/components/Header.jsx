import logo from "../assets/vinted-logo.jpg";
import { Link } from "react-router-dom";
// passage de props au composent Header
const Header = ({ handleToken, token, search, setSearch }) => {
  return (
    <header className="headerstyle">
      <div className="headercontainer">
        {/* Logo : est un lien pour la route "/" */}
        <Link to="/">
          <img className="logo" alt="logo" src={logo} />
        </Link>
        {/* search bar, dont le state est lié à l'input */}
        <input
          className="researchBar"
          type="text"
          placeholder="Rechercher des articles..."
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {/* Si Token existe, on affiche un bouton déco, sinon on affiche signup et login */}
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
        <Link to={token ? "/publish" : "login"}>
          <button className="lastButton">vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
