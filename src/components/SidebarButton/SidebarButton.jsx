/* eslint-disable react/prop-types */
import styles from "./sidebar-button.module.css";
import { NavLink } from "react-router-dom";

const SidebarButton = ({ to, label }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `${styles.button} ${styles.active}` : styles.button
            }

        >
            {label}
        </NavLink>
    );
};

export default SidebarButton
