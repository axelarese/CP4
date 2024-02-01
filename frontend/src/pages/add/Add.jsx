import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Add.module.css";
import carwash1 from "../../assets/images/carwash1.jpg";
import { useUserContext } from "../../context/userContext";

export default function Add() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const { token } = useUserContext();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/service`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, duration, description }),
          Authorization: `Bearer ${token}`,
        }
      );
      if (response.status === 201) {
        console.info("ajout réussi");
        navigate("/service");
      } else {
        console.error(`Failed add to service, status ${response.status}`);
      }
    } catch (err) {
      console.error("Error posting service:", err);
    }
  };

  return (
    <div className={styles.globalContainer}>
      <h2>NOUVEAU SERVICE</h2>
      <img className={styles.carwash1} src={carwash1} alt="carwash1" />
      <input
        onChange={handleNameChange}
        type="text"
        placeholder="Nom du service"
      />
      <input
        onChange={handleDurationChange}
        type="text"
        placeholder="Durée du service"
      />
      <input
        onChange={handleDescriptionChange}
        type="text"
        placeholder="Description"
      />
      <button onClick={handleSubmit} type="button">
        AJOUTER
      </button>
    </div>
  );
}
