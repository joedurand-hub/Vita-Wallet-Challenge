/* eslint-disable react/prop-types */
import { colors } from "../../constants/index"
import styles from "./textfield.module.css"

const Index = ({ htmlFor, label, placeholder, type, onChange, value, name, icon, iconFunction }) => {
  return (
    <div style={{ display: "flex", height: 100, width: 387, flexDirection: "column", position: "relative" }}>
      <label htmlFor={htmlFor} style={{ fontFamily: "Nunito", fontSize: 14 }}>{label}</label>
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <input
          className={styles.input}
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          style={{ width: "100%", border: "1px solid", borderRadius: 6, borderWidth: 2, borderColor: colors.secondaryGrey, height: 54, paddingRight: "30px" }} // Espacio para el icono
        />
        {icon && (
          <img
            onClick={iconFunction}
            src={icon}
            alt="icon"
            style={{
              position: "absolute",
              right: "10px",
              width: "20px",
              height: "20px",
              cursor: "pointer"
            }}
          />
        )}
      </div>
    </div>
  )
}

export default Index