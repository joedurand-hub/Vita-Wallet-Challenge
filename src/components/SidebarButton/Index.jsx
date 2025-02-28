/* eslint-disable react/prop-types */
import styles from "./sidebar-button.module.css";

const SidebarButton = ({ label, onSubmit, onClick, type, disabled, }) => {
    return (
        <button
            className={styles.button}
            onSubmit={onSubmit}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default SidebarButton
