import styles from "./Button.module.css";

const Button = ({ className = "", ...props }) => {
  const classNames = `${styles.button} ${className}`;
  return <button className={classNames} {...props} />;
};

export default Button;
