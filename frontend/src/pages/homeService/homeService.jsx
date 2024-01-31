// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./homeService.module.css";
import HomeServiceCard from "./homeServiceCard";

export default function Header() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/allservice")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={styles.globalContainer}>
      <h2 className={styles.titleAllServices}>TOUS LES SERVICES</h2>
      <div className={styles.preview_bike_container}>
        {services.map((service) => (
          <HomeServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
