/* eslint-disable no-unused-vars */
import styles from "./styles/login.module.css"
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"
import TextField from "../components/TextField/TextField"
import eyeOff from "../assets/icons/eye-off.png"
import eye from "../assets/icons/eye.png"
import check from "../assets/icons/check.png"
import Button from "../components/Button/Button"
import moneyIncome from "../assets/ilustrations/money-income.png"

const Login = () => {
    const navigate = useNavigate()
    const { login, user, isAuthenticated } = useContext(AuthContext);
    const [emailIsCorrectIcon, setEmailIsCorrectIcon] = useState(false)
    const [viewPassword, setViewPassword] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm((prevFormState) => ({
            ...prevFormState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login({
            email: form.email,
            password: form.password,
            dev_mode: "true"
        });
    };

    useEffect(() => {
        if (isAuthenticated) {
            console.log(user.data)
            navigate("/inicio");
        }
    }, [isAuthenticated, navigate]);


    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Iniciar sesión</h1>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        name="email"
                        label={"Correo electrónico"}
                        onChange={handleInputChange}
                        value={form.email}
                        placeholder={"juan@gmail.com"}
                    // icon={ isAuthenticated === true ? }
                    />
                    <TextField
                        type={viewPassword ? "text" : "password"}
                        name="password"
                        label={"Contraseña"}
                        onChange={handleInputChange}
                        value={form.password}
                        placeholder={"Escribe tu contraseña"}
                        iconFunction={() => setViewPassword(!viewPassword)}
                        icon={viewPassword ? eye : eyeOff}
                    />
                    <p className={styles.forgotPassword}>¿Olvidaste tu contraseña?</p>
                    <Button
                        type="submit"
                        backgroundType="gradient"
                        size="large"
                        name="Iniciar sesión"
                    />
                </form>
                <img src={moneyIncome} width={662} height={640} />
            </div>
        </section>
    )
}

export default Login