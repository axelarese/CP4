import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "../../context/userContext";
import styles from "./Login.module.css";
import Header from "../header/Header";
import logo from "../../assets/images/logoCW.jpeg";
import Navbar from "../navBar/NavBar";

export default function Login() {
  // États pour le mot de passe et la confirmation du mot de passe
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUserContext();

  // Hook pour la navigation
  const navigate = useNavigate();

  // Gestionnaire de changement de l'email
  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  // Gestionnaire de changement du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const notify = () => {
    toast.success("🚀 Connexion réussi !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        notify();
        const auth = await response.json();
        login(auth);
        navigate("/service");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.globalContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.svgLogo} src={logo} alt="profile" />
        </div>
        <div className={styles.loginLogic}>
          <h2>CONNEXION</h2>
          <input onChange={handleMailChange} type="email" placeholder="Email" />
          <input
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
          <button
            disabled={password === "" || email === ""}
            onClick={handleSubmit}
            type="button"
          >
            SE CONNECTER
          </button>
        </div>
      </div>
      <Navbar />
    </>
  );
}
