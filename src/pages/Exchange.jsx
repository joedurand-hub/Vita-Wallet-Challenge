import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import styles from "./styles/pages.module.css"
import ExchangeForm from "../components/ExchangeForm/ExchangeForm"

const Exchange = () => {
    const { userData, userPrices } = useContext(UserContext)
    return (
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", paddingLeft: 50, marginTop: 20 }}>
            <div>
                <h1 style={{ fontSize: 28 }}>¿Qué deseas intercambiar?</h1>
                <h2 className={styles.available_balance}>Saldo disponible: $ {userData?.data.attributes.balances.usd} usd </h2>
            </div>
            <ExchangeForm exchangeValues={userPrices} />
        </div>
    )
}

export default Exchange