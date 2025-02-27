import TextField from "../components/TextField/Index"
import eyeOff from "../assets/icons/eye-off.png"
import Button from "../components/Button/Index"
import moneyIncome from "../assets/ilustrations/money-income.png"
const Login = () => {
    return (
        <section style={{ padding: 20 }}>
            <h1 style={{ fontSize: 48 }}>Iniciar sesión</h1>
            <div style={{ display: "flex", marginTop: 90, flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                <form style={{ width: 387 }}>

                    <TextField
                        type="email"
                        label={"Correo electrónico"}
                        placeholder={"juan@gmail.com"}
                    />
                    <TextField
                        type="password"
                        label={"Contraseña"}
                        placeholder={"Escribe tu contraseña"}
                        icon={eyeOff}
                    />
                    <p style={
                        { top: -10, margin: 0, marginBottom: 30, padding: 0, display: "flex", position: "relative", justifyContent: "end", }

                    }>¿Olvidaste tu contraseña?</p>
                    <Button backgroundType="disabled" size="large" name="Iniciar sesión" />
                </form>
                <img src={moneyIncome} width={662} height={640} />
            </div >
        </section>
    )
}

export default Login