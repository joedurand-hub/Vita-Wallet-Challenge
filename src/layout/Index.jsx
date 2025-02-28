import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar/Sidebar"

const Index = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", height: "auto" }}>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Index