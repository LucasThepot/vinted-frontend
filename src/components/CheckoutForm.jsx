import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = () => {
  // State qui sert à savoir si ma requête attend toujours une réponse
  const [isLoading, setIsLoading] = useState(false);
  //   State qui set à savoir si le paiement a été effectué
  const [completed, setCompleted] = useState(false);

  // Permetra de créer une requête vers stripe pour obtenir un token
  const stripe = useStripe();
  // Permetra de récupérer les données bancaires de l'utilisateur
  const elements = useElements();
  return;
};
export default CheckoutForm;
