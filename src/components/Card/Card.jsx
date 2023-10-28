import React from "react";
import styles from './Card.module.css';
import PropTypes from 'prop-types';
import phoneIcon from './phone-icon.svg'
import emailIcon from './email-icon.svg'

export const Card = ({ name, phone, email }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.name}>{name}</div>
        <div className={styles.phone}>
          <div><img src={phoneIcon} alt="phone_icon" /></div>
          <div>{phone}</div>
	      </div>
        <div className={styles.email}>
          <div><img src={emailIcon} alt="email_icon" /></div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
