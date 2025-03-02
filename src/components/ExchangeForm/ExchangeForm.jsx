/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./exchange-form.module.css";
import { useEffect } from "react";

const ExchangeForm = ({ exchangeValues }) => {
    const [currencyToBeExchanged, setCurrencyToBeExchanged] = useState('');
    const [amountToBeExchanged, setAmountToBeExchanged] = useState('');

    const [currencyToBeReceived, setCurrencyToBeReceived] = useState('');
    const [amountToBeReceived, setAmountToBeReceived] = useState(0);

    const newArrCoins = exchangeValues?.prices && Object.entries(exchangeValues?.prices).map(([coin, details]) => {
        return { coin, ...details };
    });

    useEffect(() => {
        if (!currencyToBeExchanged || !amountToBeExchanged || !currencyToBeReceived) {
            return
        }

        const searchDataCotization = newArrCoins?.find((element) => element.coin === currencyToBeExchanged)
        console.log({ searchDataCotization })

        const searchCurrencyToReceive = newArrCoins?.find((element) => element.coin === currencyToBeReceived)
        console.log({ searchCurrencyToReceive })

        const calcCotization = () => {
            const fee = searchDataCotization[currencyToBeExchanged + '_fee_send_external']
            const exchangeRate = searchDataCotization[currencyToBeReceived]
            const amountWithFee = amountToBeExchanged - fee
            const total = amountWithFee * exchangeRate
            return total.toFixed(2).replace(".", ",");
        }
        setAmountToBeReceived(calcCotization())
    }, [currencyToBeExchanged, currencyToBeReceived, amountToBeExchanged, newArrCoins])


    return (
        <div className={styles.exchangeContainer}>
            <label>Monto a intercambiar</label>
            <div className={styles.inputGroup}>
                <select
                    onChange={(e) => setCurrencyToBeExchanged(e.target.value)}
                    className={styles.currencySelect}
                >
                    {exchangeValues?.prices && Object.entries(exchangeValues.prices).map(([currency], index) => (
                        <option key={index} value={currency}>{currency}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="$ 0,00"
                    value={`$ ${amountToBeExchanged}`}
                    onChange={(e) => {
                        const value = e.target.value.replace("$", "").trim();
                        setAmountToBeExchanged(value);
                    }}
                />
            </div>

            <label>Quiero recibir</label>
            <div className={styles.inputGroup}>
                <select
                    onChange={(e) => setCurrencyToBeReceived(e.target.value)}
                    className={styles.currencySelect}
                >
                    {exchangeValues?.prices && Object.entries(exchangeValues.prices).map(([currency], index) => (
                        <option key={index} value={currency}>{currency}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="0,00"
                    value={amountToBeReceived}
                    readOnly
                />
            </div>
        </div>
    );
};

export default ExchangeForm;