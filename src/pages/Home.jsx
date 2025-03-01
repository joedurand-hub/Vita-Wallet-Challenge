import { useContext } from "react"
import coin from "../assets/icons/coin.png"
import Card from "../components/Card/Card"
import History from "../components/History/History"
import { UserContext } from "../context/UserContext"
import styles from "./styles/pages.module.css"
import usdcIcon from "../assets/icons/usdc.png"
import bitcoinIcon from "../assets/icons/Bitcoin.png"
import usdIcon from "../assets/icons/coin.png"
import chileIcon from "../assets/icons/Chile.png"
import theterIcon from "../assets/icons/theter.jpg"
import { TransactionsContext } from "../context/TransactionsContext"

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
    const { userData } = useContext(UserContext)
    const { transactionsData } = useContext(TransactionsContext)
    const balances = userData?.data.attributes.balances
    return (
        <div className={styles.container_home}>
            <div className={styles.hi}>
                <img src={coin} width={45} height={45} alt="coin" />
                <h1>¡Hola <span className={styles.name}>{userData && userData.data.attributes.first_name}!</span> </h1>
            </div>
            <section style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                <h2>Mis saldos</h2>
                <div style={{
                    display: "flex", flexDirection: "row", gap: 15,
                    // overflowX: "scroll", overFlowY: "hidden", whiteSpace: "nowrap" 

                }}>
                    {balances && Object.entries(balances).map(([currency, amount]) => {
                        const currencyFullName = currencyNames[currency] || currency;
                        return (
                            <Card
                                key={currency}
                                currency={currencyFullName}
                                balance={amount}
                                icon={icons[currencyFullName]}
                            />
                        );
                    })}
                </div>
                <h2>
                    Historial
                </h2>
                {transactionsData?.map((object) => {
                    return (
                        < History key={object.id} transaction={object} />
                    )
                })}
            </section>
        </div>
    )
}

export default Home