import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

//components
import InputPublish from "../components/InputPublish";
// on passe token en props à la func publish
const Publish = ({ token }) => {
  // on défini les states de tous nos input
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (event) => {
    // on empêche le rafraichissement de la page à l'envoi du form
    event.preventDefault();
    try {
      // on crée un new formdata on lui donne les pairs clés valeurs suivantes
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", place);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);
      // on stock la réponse de l'API dans response
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        // en 2eme argu on envoi notre formdata et en 3eme le token pour s'authentifier
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // si Token existe on retourne notre page, sinon on est redirigé vers /login
  return token ? (
    <form className="publishFormWrapper" onSubmit={handleSubmit}>
      <h1>Vends ton Article</h1>
      <div>
        <label className="fileZone" htmlFor="filePicker">
          Ajoute une photo
        </label>
        <input
          className="hide"
          id="filePicker"
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        {/* si une image est ajoutée on génére un URL pour visualiser cette image */}
        {picture && <img src={URL.createObjectURL(picture)} alt="product" />}
      </div>
      {/* on appelle notre composant InputPublish autant de fois que necessaire et on leur donne les props adaptés */}
      <InputPublish
        label="Titre"
        id="title"
        type="text"
        state={title}
        setState={setTitle}
      />
      <InputPublish
        label="Décris ton article"
        id="description"
        state={description}
        setState={setDescription}
        textArea
      />
      <InputPublish
        label="Marque"
        id="brand"
        type="text"
        state={brand}
        setState={setBrand}
      />
      <InputPublish
        label="Taille"
        id="size"
        type="text"
        state={size}
        setState={setSize}
      />
      <InputPublish
        label="Couleur"
        id="color"
        type="text"
        state={color}
        setState={setColor}
      />
      <InputPublish
        label="État"
        id="condition"
        type="text"
        state={condition}
        setState={setCondition}
      />
      <InputPublish
        label="Lieu"
        id="place"
        type="text"
        state={place}
        setState={setPlace}
      />
      <InputPublish
        label="Prix"
        id="price"
        type="number"
        state={price}
        setState={setPrice}
      />
      <input className="addbutton" type="submit" value="Ajouter" />
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
