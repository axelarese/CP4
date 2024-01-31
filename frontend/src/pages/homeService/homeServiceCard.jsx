import React from "react";
import PropTypes from "prop-types";
import styles from "./homeServiceCard.module.css";

export default function homeServiceCard({ service }) {
  return (
    <div className={styles.globalContainer}>
      <figure className={styles.container}>
        <div className={styles.serviceTitle}>
          <p className={styles.nameService}>{service.name}</p>
          <p className={styles.durationService}>{service.duration}</p>
        </div>
      </figure>
    </div>
  );
}

homeServiceCard.propTypes = {
  service: PropTypes.shape({
    image_url: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
};
