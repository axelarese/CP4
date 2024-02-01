// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./homeService.module.css";
import HomeServiceCard from "./homeServiceCard";
import allservice from "../../assets/images/allservice.jpg";
import { useUserContext } from "../../context/userContext";

export default function Header() {
  const [services, setServices] = useState([]);
  const { token } = useUserContext();
  const navigate = useNavigate();

  const handleGetService = async () => {
    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(`http://localhost:3310/api/allservice`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Inclusion du jeton JWT
        },
      });

      // Recharger la page si la création réussit
      if (response.status === 200) {
        const data = await response.json();
        setServices(data);
      } else {
        // Log des détails de la réponse en cas d'échec
        navigate("/login");
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetService();
  }, [token]); // Quand token change d'état ? À voir si judicieux

  return (
    <div className={styles.globalContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.titleAllServices}>TOUS LES SERVICES</h2>
        <img className={styles.allservices} src={allservice} alt="all" />
      </div>
      <div>
        <div className={styles.globalCardContainer}>
          {services.length > 0 &&
            services.map((service) => (
              <HomeServiceCard key={service.id} service={service} />
            ))}
        </div>
      </div>
    </div>
  );
}
