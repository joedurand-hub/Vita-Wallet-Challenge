/* eslint-disable react/prop-types */
import styles from "./card.module.css";

const Card = ({ currency, icon, balance }) => {
    if (!currency || !balance) return

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.currency}>{currency}</h3>
                <img src={icon} width={24} height={24} alt="currency icon" />
            </div>
            <p className={styles.balance}>{balance}</p>
        </div>
    );
};

export default Card;
