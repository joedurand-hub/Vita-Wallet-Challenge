/* eslint-disable react/prop-types */
import styles from "./history.module.css";

const History = ({ transaction }) => {

    return (
        <div key={transaction.id} className={styles.history}>
            <p>{transaction.attributes.category_translate === "Cambios" && "Intercambiaste"}</p>
            <p>{transaction.attributes.category_translate === "Depósito" && "Recargaste"}</p>

            <div className={styles.container_transaction}>
                <p className={styles.history_transaction}>{transaction.attributes.amount} {transaction.attributes.currency}</p>
            </div>
        </div>
    );
};

export default History;
