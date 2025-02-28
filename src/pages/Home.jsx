import coin from "../assets/icons/coin.png"
import Card from "../components/Card/Card"
import History from "../components/History/History"

const Home = () => {
    return (
        <div style={{ padding: 50 }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <img src={coin} width={45} height={45} />
                <h1>¡Hola David! </h1>
            </div>
            <section style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
                <h2>Mis saldos</h2>
                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                    <Card icon={coin} />
                    <Card icon={coin} />
                    <Card icon={coin} />
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