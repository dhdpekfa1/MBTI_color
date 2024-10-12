import styles from "./ColorSurvey.module.css";
import { ColorSurveyProps } from "../types/new";

const ColorSurvey: React.FC<ColorSurveyProps> = ({ value, onClick }) => {
  return (
    <div className={styles.colorSurvey} onClick={onClick}>
      <div className={styles.id}>{value.id}</div>
      <div className={styles.mbti}>{value.mbti}</div>
      <div className={styles.arrow}>
        <img
          className={styles.arrowIcon}
          src="src/assets/icons/arrow.svg"
          alt="우측 화살표"
        />
      </div>
      <div
        className={styles.colorChip}
        style={{
          backgroundColor: value.colorCode,
        }}
      ></div>
      <div className={styles.colorCode}>{value.colorCode}</div>
    </div>
  );
};
export default ColorSurvey;
