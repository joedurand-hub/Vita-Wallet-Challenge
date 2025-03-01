import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import styles from "./styles/pages.module.css"

const Exchange = () => {
    const { userData, userPrices } = useContext(UserContext)
    console.log(userData)
    console.log(userPrices)
    return (
        <div style={{ padding: 50 }}>
            <h1 style={{ fontSize: 28 }}>¿Qué deseas intercambiar?</h1>
            <h2 className={styles.available_balance}>Saldo disponible: </h2>
        </div>
    )
}

export default Exchange