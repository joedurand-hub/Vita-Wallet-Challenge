/* eslint-disable react/prop-types */
import styles from "./textfield.module.css";

const Index = ({ htmlFor, label, placeholder, type, onChange, value, name, icon, iconFunction }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={htmlFor} className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
        />
        {icon && (
          <img
            onClick={iconFunction}
            src={icon}
            alt="icon"
            className={styles.icon}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
