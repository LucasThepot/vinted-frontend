import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

//components
import InputPublish from "../components/InputPublish";

const Publish = ({ token }) => {
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
    event.preventDefault();
    try {
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
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
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

  return token ? (
    <form onSubmit={handleSubmit}>
      <h1>Vends ton Article</h1>
      <div>
        <label htmlFor="filePicker"></label>
        <input // a display none dans CSS pour styliser le label à la place
          id="filePicker"
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        {/* si une image est ajoutée on génére un URL pour visualiser cette image */}
        {picture && <img src={URL.createObjectURL(picture)} alt="product" />}
      </div>
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
      <input type="submit" value="Ajouter" />
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
