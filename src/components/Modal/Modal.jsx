/* eslint-disable react/prop-types */
import styles from "./modal.module.css";
import banknote from "../../assets/ilustrations/banknote.png"

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={onClose}>
                    &times;
                </button>
                <img
                    src={banknote}
                    alt="Intercambio exitoso"
                    className={styles.image}
                />
                <h2 className={styles.title}>¡Intercambio exitoso!</h2>
                <p className={styles.text}>Ya cuentas con los BTC en tu saldo.</p>
            </div>
        </div>
    );
};

export default Modal;
