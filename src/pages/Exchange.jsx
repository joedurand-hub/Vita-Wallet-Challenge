import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import styles from "./styles/pages.module.css"
import ExchangeForm from "../components/ExchangeForm/ExchangeForm"

const Exchange = () => {
    const { userData, userPrices } = useContext(UserContext)
    return (
        <div style={{ padding: 50 }}>
            <h1 style={{ fontSize: 28 }}>¿Qué deseas intercambiar?</h1>
            <h2 className={styles.available_balance}>Saldo disponible: $ {userData?.data.attributes.balances.usd} usd </h2>
            <ExchangeForm exchangeValues={userPrices} />
        </div>
    )
}

export default Exchange