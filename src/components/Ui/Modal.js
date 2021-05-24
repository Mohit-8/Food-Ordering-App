import React from 'react';
import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portal = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </React.Fragment>
  );
};

export default Modal;
