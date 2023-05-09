import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ handleToken }) => {
  // States qui gèrent mes inputs
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  //   State qui gère le message d'erreur
  const [errorMessage, setErrorMessage] = useState("");
  //   Permet de naviguer
  const navigate = useNavigate();

  return (
    <div className="container">
      <p>S'inscrire</p>
      <form
        className="formContainer"
        onSubmit={async (event) => {
          event.preventDefault();
          //   Je fais disparaitre le message d'erreur
          setErrorMessage("");
          try {
            //   Requête axios :
            // - Premier argument : l'url que j'interroge
            // - deuxième : le body que j'envoie
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                email: email,
                username: username,
                password: password,
                newsletter: newsletter,
              }
            );
            //   Si je reçois bien un token
            if (response.data.token) {
              // Je l'enregistre dans mon state et mes cookies
              handleToken(response.data.token);
              // Et je redirige vers Home
              navigate("/");
            }
            // console.log(response.data);
          } catch (error) {
            //   Si je reçois un status 409
            if (error.response.status === 409) {
              setErrorMessage(
                "Cet email est déjà utilisé, veuillez en choisir un autre :)"
              );
              //   Si je reçois un message d'erreur "Missing parameters"
            } else if (error.response.data.message === "Missing parameters") {
              setErrorMessage("Veuillez remplir tous les champs :)");
            }
          }
        }}
      >
        <input
          className="champs"
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className="champs"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          className="champs"
          placeholder="Password"
          type="password"
          //value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="checkboxstyle">
          <input
            className="champs"
            id="newsletter"
            type="checkbox"
            onChange={() => {
              setNewsletter(!newsletter);
            }}
            checked={newsletter}
          />
          {/* Label pour lier mon input a son text */}
          <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
        </div>
        <input
          className="signupbutton"
          type="submit"
          value="S'inscrire"
        ></input>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <Link className="linktologinstyle" to="/login">
        Tu as déjà un compte ? Connecte-toi !
      </Link>
    </div>
  );
};

export default SignUp;
