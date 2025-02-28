import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Index"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Exchange from "../pages/Exchange"
import Profile from "../pages/Profile"
import Transfer from "../pages/Transfer";
import Recharge from "../pages/Recharge";
import Help from "../pages/Help";

const Index = () => {
    return (
        <Routes>
            <Route index element={<Login />} path="/" />

            <Route element={<Layout />}>
                <Route element={<Home />} path="/inicio" />
                <Route element={<Transfer />} path="/transferir" />
                <Route element={<Recharge />} path="/recargar" />
                <Route element={<Exchange />} path="/intercambiar" />
                <Route element={<Profile />} path="/perfil" />
                <Route element={<Help />} path="/ayuda" />
            </Route>
        </Routes>
    )
}

export default Index