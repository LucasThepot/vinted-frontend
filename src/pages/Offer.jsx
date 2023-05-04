import { useParams } from "react-router-dom"; // on importe useParams pour pouvoir récupérer l'id présent dans l'URL parent
import { useEffect, useState } from "react"; // import pour l'état de mes data
import axios from "axios"; // import d'axios pour faire la requete au back et récupérer la data

const Offer = () => {
  // State qui me sert à stocker la data
  const [data, setData] = useState({});
  // State qui me sert à savoir si la data a été récupérée
  const [isLoading, setIsLoading] = useState(true);
  // Je récupère l'id présent dans l'url
  const { id } = useParams();
  // La callback de mon useEffect va être appelée une seule fois au premier rendu de mon composant
  useEffect(() => {
    // Je déclare la fonction qui fait la requête (dans le seul but de la rendre async, car je ,ne pux pas le faire sur la callback du useEffect)
    const fetchData = async () => {
      // Ma requête peut échouer docn je la place dans un try catch
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data); // Je stocke le résultat dans data
        setIsLoading(false); // je fais passer isloading a false une fois la data récupérée
      } catch (error) {
        // mon erreur
        console.log(error.message);
      }
    };
    // J'appelle ma fonction
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="body">
      <img
        className="productImage"
        src={data.product_image.secure_url}
        alt=""
      />
      {/* j'affiche mon image */}
      <div className="description">
        <div className="descriptionInfos">
          <p className="offerPrice">{data.product_price} €</p>{" "}
          {/* j'affiche mon prix */}
          {/* Je parcours product_details */}
          {data.product_details.map((detail, index) => {
            // Je récupère le nom de la clef de detail
            const keyName = Object.keys(detail)[0];
            return (
              <div key={index}>
                {/* J'affiche le nom de la clef  */}
                <span className="detailName">{keyName} : </span>
                {/* et son contenu */}
                <span className="detail">{detail[keyName]}</span>
              </div>
            );
          })}
        </div>
        <button className="purchaseButton">Acheter</button>
      </div>
    </div>
  );
};

export default Offer;
