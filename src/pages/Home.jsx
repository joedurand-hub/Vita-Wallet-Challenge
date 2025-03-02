import { useContext } from "react";
import coin from "../assets/icons/coin.png";
import usdcIcon from "../assets/icons/usdc.png";
import bitcoinIcon from "../assets/icons/Bitcoin.png";
import usdIcon from "../assets/icons/coin.png";
import chileIcon from "../assets/icons/Chile.png";
import theterIcon from "../assets/icons/theter.jpg";
import Card from "../components/Card/Card";
import History from "../components/History/History";
import { UserContext } from "../context/UserContext";
import { TransactionsContext } from "../context/TransactionsContext";
import styles from "./styles/pages.module.css";

const icons = {
    "US Dólar": usdIcon,
    "USD Coin": usdcIcon,
    "Bitcoin": bitcoinIcon,
    "Peso chileno": chileIcon,
    "Tether": theterIcon,
};

const currencyNames = {
    usd: "US Dólar",
    usdc: "USD Coin",
    btc: "Bitcoin",
    clp: "Peso chileno",
    usdt: "Tether",
};

const Home = () => {
    const { userData } = useContext(UserContext);
    const { transactionsData } = useContext(TransactionsContext);
    const balances = userData?.data.attributes.balances;

    return (
        <section className={styles.container_home}>
            <div className={styles.hi}>
                <img src={coin} width={45} height={45} alt="coin" />
                <h1>
                    ¡Hola{" "}
                    <span className={styles.name}>
                        {userData && userData.data.attributes.first_name}
                    </span>
                    !
                </h1>
            </div>
            <section className={styles.section}>
                <h2>Mis saldos</h2>
                <div className={styles.balancesContainer}>
                    {balances &&
                        Object.entries(balances).map(([currency, amount]) => {
                            const coinAndCurrencyName = currencyNames[currency] || currency;
                            return (
                                <Card
                                    key={currency}
                                    currency={coinAndCurrencyName}
                                    balance={amount}
                                    icon={icons[coinAndCurrencyName]}
                                />
                            );
                        })}
                </div>
                <h2>Historial</h2>
                {transactionsData?.map((object) => (
                    <History key={object.id} transaction={object} />
                ))}
            </section>
        </section>
    );
};

export default Home;
