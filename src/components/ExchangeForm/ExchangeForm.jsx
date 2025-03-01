import { useState } from "react";
import styles from "./exchange-form.module.css";

const ExchangeForm = () => {
    const [amount, setAmount] = useState("");
    const [receiveAmount, setReceiveAmount] = useState("");

    return (
        <div className={styles.exchangeContainer}>
            <label>Monto a intercambiar</label>
            <div className={styles.inputGroup}>
                <select className={styles.currencySelect}>
                    <option value="clp">🇨🇱 CLP</option>
                    <option value="usd">🇺🇸 USD</option>
                </select>
                <input
                    type="text"
                    placeholder="$ 0,00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <label>Quiero recibir</label>
            <div className={styles.inputGroup}>
                <select className={styles.currencySelect}>
                    <option value="btc">₿ Bitcoin</option>
                    <option value="usdc">💲 USDC</option>
                    <option value="usdt">💲 USDT</option>
                </select>
                <input
                    type="text"
                    placeholder="0,00"
                    value={receiveAmount}
                    onChange={(e) => setReceiveAmount(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ExchangeForm;
