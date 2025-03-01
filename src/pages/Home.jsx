import { useContext } from "react"
import coin from "../assets/icons/coin.png"
import Card from "../components/Card/Card"
import History from "../components/History/History"
import { UserContext } from "../context/UserContext"
import styles from "./styles/pages.module.css"
import usdcIcon from "../assets/icons/usdc.png"
import bitcoinIcon from "../assets/icons/Bitcoin.png"
// import theterIcon from "../assets/icons/theter.png"
import chileIcon from "../assets/icons/Chile.png"

const icons = {
    usdc: usdcIcon,
    btc: bitcoinIcon,
    clp: chileIcon,
    // usdt: theterIcon,

}

const Home = () => {
    const { userData } = useContext(UserContext)
    const balances = userData?.data.attributes.balances
    return (
        <div className={styles.container_home}>
            <div className={styles.hi}>
                <img src={coin} width={45} height={45} />
                <h1>¡Hola <span className={styles.name}>{userData && userData.data.attributes.first_name}!</span> </h1>
            </div>
            <section style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                <h2>Mis saldos</h2>
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    {balances && Object.entries(balances).map(([currency, amount]) => (
                        <div key={currency} style={{ marginBottom: 10 }}>
                            <Card currency={"currency"} balance={amount} icon={icons[currency]} />
                        </div>
                    ))}
                </div>
                <h2>
                    Historial
                </h2>
                <History />
            </section>
        </div>
    )
}

export default Home