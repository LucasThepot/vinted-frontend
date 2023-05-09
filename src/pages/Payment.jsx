import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// Components
import CheckoutForm from "../components/CheckoutForm";

// Je me connecte au compte stripe en front en fournissant la clef publique du réacteur
const stripePromise = loadStripe(
  "51IpvphDqQKb3lCIT3UU1fIPnAXyyG57gLns831kNwLVGCFo1a3MtSucuiIwEijgip8fL85zUlKZKTK0a2JAhSWHt00ZWSjTErF"
);

const Payment = () => {
  return (
    <div>
      {/* Elements va devoir englober toute la logique de paiement. Je lui donne une prosp stripe qui contient ma stripePromise, pour montrer à Elements que j'ai bine un compte sur Stripe */}
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
export default Payment;
