import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Je suis sur la page home</h1>
      {/* Lien vers la page Offers */}
      <Link to="/offers">
        <button>Naviguer vers offers</button>
      </Link>
    </div>
  );
};
export default Home;
