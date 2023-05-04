import { Link } from "react-router-dom"; // import de link pour pouvoir crée une navigation

const OfferCard = ({ offerData }) => {
  const { owner, product_image, product_price, product_details } = offerData; // destructuring des props

  return (
    // Je navigue vers /offer/l'id de l'offre au clique sur une offre
    <Link to={`/offer/${offerData._id}`}>
      <article>
        {/*  en dessous, on détermine la structure de notre composant OfferCard, qui est un "résumé" des offres sur notre page homme  */}
        <div>
          {/* Si le vendeur a un avatar, je l'affiche */}
          {owner.account.avatar && (
            <img src={owner.account.avatar.secure_url} alt="" />
          )}
          {/* j'affiche l'username du posteur d'offre */}
          <span>{owner.account.username}</span>
        </div>
        {/* j'affiche l'image du produit en vente */}
        <img src={product_image.secure_url} alt="" />
        {/* j'affiche son prix */}
        <p>{product_price} €</p>
        <div>
          {/* Je parcours product_detail pour afficher conditionner l'affichage des éléments*/}
          {product_details.map((detail, index) => {
            // Si l'objet a un clef MARQUE je l'affiche
            if (detail.MARQUE) {
              return <p key={index}>{detail.MARQUE}</p>;
              // Si l'objet detail a une clef TAILLE, je l'affiche
            } else if (detail.TAILLE) {
              return <p key={index}>{detail.TAILLE}</p>;
            } else {
              return null;
            }
          })}
        </div>
      </article>
    </Link>
  );
};
export default OfferCard;
