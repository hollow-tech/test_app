import React, { useRef, useEffect } from 'react';
import styles from './UserModal.module.css';
import closeIcon from './close-icon.svg';
import phoneIcon from '../Card/phone-icon.svg';
import emailIcon from '../Card/email-icon.svg';

const UserModal = ({ user, onClose }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalContentRef.current && !modalContentRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} ref={modalContentRef}>
        <div className={styles.closeIcon} onClick={onClose}>
          <img src={closeIcon} alt="Close" />
        </div>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.phone}>
          <img src={phoneIcon} alt="" /> {user.phone}
        </p>
        <p className={styles.email}>
          <img src={emailIcon} alt="" />
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserModal;
