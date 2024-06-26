import React from "react";
import cn from "classnames";
import styles from "./ActiveDeactivateAlert.module.sass";
import Modal from "../../../components/Modal";

const ActiveDeactivate = ({ onClose, open, item }) => {
  return (
    <Modal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Accept</div>
        <div className={styles.note}>Are you sure you want to Accept?</div>

        <div className={styles.btns}>
          <button
            onClick={onClose}
            className={cn("button-stroke", styles.button_green)}
          >
            <span>Accept</span>
          </button>
          <button
            onClick={onClose}
            className={cn("button-stroke", styles.button)}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ActiveDeactivate;
