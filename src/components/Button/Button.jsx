/* eslint-disable react/prop-types */
import styles from "./button.module.css"

const Button = ({ name, size, onClick, type, disabled, backgroundType }) => {

    return (
        <button
            className={`${styles.button} 
        ${size === "large" ? styles.large : size === "small" && styles.small} 
        ${backgroundType === "gradient" ? styles.gradient
                    : backgroundType === "outline" ? styles.outline
                        : backgroundType === "disabled" && styles.disabled}`
            }
            type={type}
            onClick={onClick}
            disabled={disabled}
            name={name}

        >
            {name}
        </button>
    );
};

export default Button;