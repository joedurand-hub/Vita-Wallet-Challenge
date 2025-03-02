/* eslint-disable no-unused-vars */
import Cookies from "js-cookie";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"
import TextField from "../components/TextField/TextField"
import eyeOff from "../assets/icons/eye-off.png"
import eye from "../assets/icons/eye.png"
import check from "../assets/icons/check.png"
import moneyIncome from "../assets/ilustrations/money-income.png"
import Button from "../components/Button/Button"
import styles from "./styles/pages.module.css"

const Login = () => {
    const navigate = useNavigate()
    const { login, user, isAuthenticated, error } = useContext(AuthContext);
    const [loginIsValid, setLoginIsValid] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        await login({
            email: form.email,
            password: form.password,
            dev_mode: "true"
        });
        setIsLoading(false)
    };

    useEffect(() => {
        if (!form.email) {
            setEmailIsCorrectIcon(false);
            setLoginIsValid(false);
            return;
        }

        if (form.email.includes('@') && form.email.includes('.')) {
            setEmailIsCorrectIcon(true);
        } else {
            setEmailIsCorrectIcon(false);
            setLoginIsValid(false);
            return;
        }

        if (form.password && form.password.length > 3) {
            setLoginIsValid(true);
        } else {
            setLoginIsValid(false);
        }
    }, [form]);

    useEffect(() => {
        const accessToken = Cookies.get("access-token");
        if (accessToken) {
            navigate("/inicio");
        }
    }, [navigate]);

    useEffect(() => {
        if (isAuthenticated && user !== null) {
            navigate("/inicio");
        }
    }, [isAuthenticated, navigate, user]);

    console.log(Cookies.get("access-token"))
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
                        icon={emailIsCorrectIcon === true ? check : null}
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
                        disabled={loginIsValid ? false : true}
                        type="submit"
                        backgroundType={loginIsValid ? "gradient" : "disabled"}
                        size="large"
                        name={isLoading ? "Cargando..." : "Iniciar sesión"}
                    />
                    {error && <p style={{ color: "red" }}>¡Ups! {error.response.data.message}</p>}
                </form>
                <img src={moneyIncome} width={662} height={640} alt="Money - background image" />
            </div>
        </section>
    )
}

export default Login