import logo from "../assets/vinted-logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="headerstyle">
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
      <button>s'inscrire</button>
      <button>se connecter</button>
      <button>vends tes articles</button>
    </header>
  );
};

export default Header;
