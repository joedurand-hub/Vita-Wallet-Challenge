import { useState } from "react";
import SidebarButton from "../SidebarButton/Index";
import styles from "./sidebar.module.css";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState("Inicio");

    return (
        <aside className={styles.sidebar}>
            <div>
                <SidebarButton label="Inicio" active={activeTab === "Inicio"} onClick={() => setActiveTab("Inicio")} />
                <SidebarButton label="Transferir" active={activeTab === "Transferir"} onClick={() => setActiveTab("Transferir")} />
                <SidebarButton label="Recargar" active={activeTab === "Recargar"} onClick={() => setActiveTab("Recargar")} />
                <SidebarButton label="Intercambiar" active={activeTab === "Intercambiar"} onClick={() => setActiveTab("Intercambiar")} />
                <SidebarButton label="Perfil" active={activeTab === "Perfil"} onClick={() => setActiveTab("Perfil")} />
                <SidebarButton label="Ayuda" active={activeTab === "Ayuda"} onClick={() => setActiveTab("Ayuda")} />

            </div>
            <div >
                <SidebarButton label="Cerrar sesión" />
            </div>
        </aside>
    );
};

export default Sidebar;
