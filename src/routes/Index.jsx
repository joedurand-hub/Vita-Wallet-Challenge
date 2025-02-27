import { Routes, Route } from "react-router-dom";
import Layout from "../layout/index"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Transactions from "../pages/Transactions"
import Exchange from "../pages/Exchange"
import Profile from "../pages/Profile"

const Index = () => {
    return (
        <Routes>
            <Route index element={<Login />} path="/login" />

            <Route element={<Layout />}>
                <Route element={<Home />} path="/home" />
                <Route element={<Transactions />} path="/transactions" />
                <Route element={<Exchange />} path="/exchange" />
                <Route element={<Profile />} path="/profile" />
            </Route>
        </Routes>
    )
}

export default Index