import axios from "axios";
import { useState, useEffect } from "react";

// Components
import OfferCard from "../components/OfferCard";

const Home = () => {
  // State qui me sert à stocker la data
  const [data, setData] = useState({});
  // State qui me sert à savoir si la data a été récupérée
  const [isLoading, setIsLoading] = useState(true);

  // La callback de mon useEffect va être appelée une seule fois au premier rendu de mon composant
  useEffect(() => {
    // Je déclare la fonction qui fait la requête (dans le seul but de la rendre async, car je ,ne pux pas le faire sur la callback du useEffect)
    const fetchData = async () => {
      // Ma requête peut échouer docn je la place dans un try catch
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // Je stocke le résultat dans data
        setData(response.data);
        // Je fais paser isLoading à false
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    // J'appelle ma fonction
    fetchData();
  }, []);

  // Tant que isLoading vaut true, j'affiche un indicateur de chargement
  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <p>Nombre d'offres : {data.count}</p>
      {data.offers.map((offer) => {
        return <OfferCard key={offer._id} offerData={offer} />;
      })}
    </div>
  );
};
export default Home;
