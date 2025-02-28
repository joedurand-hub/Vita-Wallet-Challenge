import SidebarButton from "../SidebarButton/SidebarButton";
import styles from "./sidebar.module.css";

const Sidebar = () => {

    return (
        <aside className={styles.sidebar}>
            <div className={styles.content_buttons}>
                <SidebarButton label="Inicio" to="/inicio" />
                <SidebarButton label="Transferir" to="/transferir" />
                <SidebarButton label="Recargar" to="/recargar" />
                <SidebarButton label="Intercambiar" to="/intercambiar" />
                <SidebarButton label="Perfil" to="/perfil" />
                <SidebarButton label="Ayuda" to="/ayuda" />
            </div>
            <SidebarButton label="Cerrar sesión" to="/" />
        </aside>
    );
};

export default Sidebar;
