/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./homeServiceCard.module.css";

export default function homeServiceCard({ service }) {
  const { id } = service;
  const navigate = useNavigate();

  const handleDeleteService = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/service/delete/${id}`,
        {
          method: "delete",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        }
      );
      if (response.status === 201) {
        console.info("service retiré avec succès!");
        window.location.reload();
        navigate("/service");
      } else {
        console.error(`failed add to favorite, status ${response.status}`);
      }
    } catch (err) {
      console.error("Error posting favorite:", err);
    }
  };

  return (
    <div className={styles.globalContainer}>
      <figure className={styles.container}>
        <div className={styles.serviceTitle}>
          <p className={styles.nameService}>{service.name}</p>
          <p className={styles.durationService}>{service.duration}</p>
          <p className={styles.descriptionService}>{service.description}</p>
        </div>
        <div className={styles.serviceLogo}>
          <svg
            onClick={handleDeleteService}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"
            />
          </svg>
          <Link to={`/service/update/${id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="white"
                d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
              />
            </svg>
          </Link>
        </div>
      </figure>
    </div>
  );
}

homeServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
};
