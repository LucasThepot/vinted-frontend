import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <div className="wrapperForm">
      <h1>Se connecter</h1>
      <form
        className="inputStyle" // on englobe tous nos input dans le form
        onSubmit={async (event) => {
          event.preventDefault(); // on empêche le refresh de la page à l'envoi du form
          try {
            // requete à la BDD, avec envoi des query
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              {
                email: email,
                password: password,
              }
            );
            //si un token existe en BDD, redirection vers "/"
            if (response.data.token) {
              handleToken(response.data.token);
              navigate("/");
            }
            // console.log(response.data);
          } catch (error) {
            console.log(error.message);
            console.log(error.response.data);
          }
        }}
      >
        <input
          type="email"
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input className="loginButton" type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
