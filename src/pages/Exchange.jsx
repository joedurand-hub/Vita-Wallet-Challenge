import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./styles/pages.module.css";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import arrow from "../assets/icons/arrow-left.png";
import { TransactionsContext } from "../context/TransactionsContext";

const Exchange = () => {
    const { userData, userPrices } = useContext(UserContext);
    const { createTransaction } = useContext(TransactionsContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [viewSummary, setViewSummary] = useState(false);
    const [currencyToBeExchanged, setCurrencyToBeExchanged] = useState('');
    const [amountToBeExchanged, setAmountToBeExchanged] = useState('');
    const [currencyToBeReceived, setCurrencyToBeReceived] = useState('');
    const [amountToBeReceived, setAmountToBeReceived] = useState(0);

    const newArrCoins = userPrices?.prices && Object.entries(userPrices?.prices).map(([coin, details]) => {
        return { coin, ...details };
    });

    const searchDataCotization = newArrCoins?.find((element) => element.coin === currencyToBeExchanged);
    const searchDataReceiveCotization = newArrCoins?.find((element) => element.coin === currencyToBeReceived);

    const handleTransaction = async () => {
        const { data } = await createTransaction({
            currency_sent: currencyToBeExchanged,
            currency_received: currencyToBeReceived,
            amount_sent: amountToBeReceived
        })
        if (data === null) setIsModalOpen(true)
    }

    useEffect(() => {
        if (!currencyToBeExchanged || !amountToBeExchanged || !currencyToBeReceived) {
            return;
        }
        const calcCotization = () => {
            const fee = searchDataCotization[currencyToBeExchanged + '_fee_send_external'];
            const exchangeRate = searchDataCotization[currencyToBeReceived];
            const amountWithFee = amountToBeExchanged - fee;
            const total = amountWithFee * exchangeRate;
            return total
        };
        setAmountToBeReceived(calcCotization());
    }, [currencyToBeExchanged, currencyToBeReceived, amountToBeExchanged, searchDataCotization]);

    return (
        <div className={styles.exchangeContainer}>
            {!viewSummary ? (
                <div className={styles.currencyAndButtonsContainer}>
                    <div>
                        <h1>¿Qué deseas intercambiar?</h1>
                        <h2 className={styles.available_balance}>Saldo disponible: $ {userData?.data.attributes.balances.usd} usd</h2>
                        <label>Monto a intercambiar</label>
                        <div className={styles.inputGroup}>
                            <select onChange={(e) => setCurrencyToBeExchanged(e.target.value)} className={styles.currencySelect}>
                                {userPrices?.prices && Object.entries(userPrices.prices).map(([currency], index) => (
                                    <option key={index} value={currency}>{currency}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="$ 0,00"
                                value={`$ ${amountToBeExchanged}`}
                                onChange={(e) => setAmountToBeExchanged(e.target.value.replace("$", "").trim())} />
                        </div>
                        <label>Quiero recibir</label>
                        <div className={styles.inputGroup}>
                            <select onChange={(e) => setCurrencyToBeReceived(e.target.value)} className={styles.currencySelect}>
                                {userPrices?.prices && Object.entries(userPrices.prices).map(([currency], index) => (
                                    <option key={index} value={currency}>{currency}</option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="0,00"
                                value={amountToBeReceived}
                                readOnly />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            onClick={() => setViewSummary(false)}
                            name={"Atrás"}
                            size='small'
                            backgroundType="outline"
                        />
                        <Button
                            onClick={() => setViewSummary(true)}
                            name={"Continuar"}
                            size='small'
                            backgroundType={amountToBeReceived === 0 ? "disabled" : "gradient"}
                        />
                    </div>
                </div>
            ) : (
                <div className={styles.summaryContainer}>
                    <div className={styles.summaryHeader}>
                        <img src={arrow} width={50} height={50} onClick={() => setViewSummary(false)} />
                        <h1>Resumen de la transacción</h1>
                    </div>
                    <div className={styles.summaryBox}>
                        <div className={styles.summaryRow}><p>Monto a intercambiar</p> <p>$ {amountToBeExchanged} {currencyToBeExchanged.toUpperCase()}</p></div>
                        <div className={styles.summaryRow}><p>Tasa de cambio</p> <p>1 {currencyToBeReceived.toUpperCase()} = {searchDataReceiveCotization[currencyToBeExchanged]} {currencyToBeExchanged.toUpperCase()}</p></div>
                        <div className={styles.summaryRow}><p>Total a recibir</p> <p className={styles.amountToBeReceived}>{amountToBeReceived} {currencyToBeReceived.toUpperCase()}</p></div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <Button
                            onClick={() => setViewSummary(false)}
                            name={"Atrás"}
                            size='small'
                            backgroundType="outline"
                        />
                        <Button
                            onClick={() => handleTransaction()}
                            name={"Intercambiar"}
                            size='small'
                            backgroundType={amountToBeReceived === 0 ? "disabled" : "gradient"}
                        />
                    </div>
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Exchange;