import { useParams } from "react-router-dom";

const Offer = () => {
  //   Je récupère le params dans l'URL avec useParams

  //   const params = useParams();
  const { id } = useParams();
  console.log(id);
  return <div>Je suis sur la page Offer</div>;
};

export default Offer;
