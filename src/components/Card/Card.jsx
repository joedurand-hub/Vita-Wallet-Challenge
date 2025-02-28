/* eslint-disable react/prop-types */
import styles from "./card.module.css";

const Card = ({ currency, icon, balance }) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.currency}>{currency || "Peso chileno"}</h3>
                <img src={icon} width={24} height={24} alt="currency icon" />
            </div>
            <p className={styles.balance}>{balance || "$ 900.000,00"}</p>
        </div>
    );
};

export default Card;
