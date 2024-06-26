import cn from "classnames";
import styles from "./WorkflowDeleteRunLimit.module.sass";
import Modal from "../../../../components/Modal";

const WorkflowDeleteRunLimit = ({ onClose, open }) => {
  const activeTab = "Active";
  const description = "Are you sure you want to delete this step";
  return (
    <Modal onClose={onClose} visible={open}>
      <div className={styles.alertWrapper}>
        <div className={cn("title-primary", styles.title)}>Delete Step</div>
        <div className={styles.note}>{description}</div>

        <div className={styles.btns}>
          <button
            onClick={onClose}
            className={cn(
              "button-stroke",
              activeTab === "Active" ? styles.button_red : styles.button_green
            )}
          >
            <span>Delete</span>
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

export default WorkflowDeleteRunLimit;
