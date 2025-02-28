/* eslint-disable react/prop-types */
import styles from "./history.module.css";

const History = ({ type, amount }) => {
    const isNegative = type === "";

    return (
        <div className={styles.history}>
            <p>{type || "Recibiste"}</p>
            <div style={{ display: "flex" }}>

                <p className={isNegative ? styles.amountNegative : styles.amountPositive}>+</p>
                <p className={isNegative ? styles.amountNegative : styles.amountPositive}>
                    {amount || "$2.000,00 CLP"}
                </p>
            </div>
        </div>
    );
};

export default History;
