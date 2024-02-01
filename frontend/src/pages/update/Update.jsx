import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Update.module.css";
import carwash1 from "../../assets/images/carwash1.jpg";

export default function Update() {
  const [dataService, setDataService] = useState({
    name: "",
    duration: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/allservice/${id}`
        );
        const data = await response.json();

        setDataService(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  // Pour la prise en compte des modifications des inputs (je me suis aidé de ChatGPT pour la logique car je n'arrivais pas à imaginer le code)

  const handleNameChange = (e) => {
    setDataService((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  };

  const handleDurationChange = (e) => {
    setDataService((prevData) => ({
      ...prevData,
      duration: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setDataService((prevData) => ({
      ...prevData,
      description: e.target.value,
    }));
  };

  // Redirection

  const navigate = useNavigate();

  // Handlesubmit logic

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/service/update/${id}`,
        {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataService),
        }
      );
      if (response.status === 200) {
        console.info("Modification succeed");
        navigate("/service");
      } else {
        console.error(`Failed to modify, status ${response.status}`);
      }
    } catch (err) {
      console.error("Error modify service:", err);
    }
  };

  return (
    <div className={styles.globalContainer}>
      <h2>MODIFIER SERVICE</h2>
      <img className={styles.carwash1} src={carwash1} alt="carwash1" />
      <input
        onChange={handleNameChange}
        value={dataService.name}
        type="text"
        placeholder="Nom du service"
      />
      <input
        onChange={handleDurationChange}
        value={dataService.duration}
        type="text"
        placeholder="Durée du service"
      />
      <input
        onChange={handleDescriptionChange}
        value={dataService.description}
        type="text"
        placeholder="Description"
      />
      <button onClick={handleSubmit} type="button">
        MODIFIER
      </button>
    </div>
  );
}
