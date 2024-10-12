import styles from "./ColorInput.module.css";
import { MBTISelectProps } from "../types/new";

// 색상 코드 유효성 확인
const isValidColorCode = (value: string) => {
  return /^#[a-fA-F0-9]{6}$/.test(value);
};

const ColorInput: React.FC<MBTISelectProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = () => {
    if (value && !isValidColorCode(value)) {
      onChange("#000000");
    }
  };

  return (
    <div className={styles.colorInput}>
      <input
        className={styles.input}
        value={value}
        maxLength={7}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isValidColorCode(value ?? "") && (
        <span
          className={styles.chip}
          style={{
            backgroundColor: value ?? "#000000",
          }}
        ></span>
      )}
    </div>
  );
};

export default ColorInput;
