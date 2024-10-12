import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorInput from "../components/ColorInput";
import Button from "../components/Button";
import MBTISelect from "../components/MBTISelect";
import generateColorCode from "../utils/generateColorCode";
import axios from "../apis/index";
import styles from "./New.module.css";

const New = () => {
  const [formValue, setFormValue] = useState({
    mbti: "ESTJ",
    colorCode: "#000000",
  });

  const handleChange = (name: string, value: string) => {
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  const handleRandomClick = () => {
    const nextColorCode = generateColorCode();
    handleChange("colorCode", nextColorCode);
  };

  async function handleSubmit() {
    await axios.post("/color-surveys/", {
      ...formValue,
      password: "0000",
    });
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerHeading}>새 컬러 등록하기</h1>
        <Link className={styles.cancel} to="/">
          <img
            className={styles.cancelIcon}
            src="src/assets/icons/x.svg"
            alt="취소"
          />
        </Link>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>MBTI</h2>
        <MBTISelect
          value={formValue.mbti}
          onChange={(newMbti) => handleChange("mbti", newMbti)}
        />
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>
          컬러
          <button className={styles.random} onClick={handleRandomClick}>
            <img
              className={styles.repeatIcon}
              src="src/assets/icons/repeat.svg"
              alt="랜덤"
            />
          </button>
        </h2>
        <ColorInput
          value={formValue.colorCode}
          onChange={(newColorCode) => handleChange("colorCode", newColorCode)}
        />
      </section>
      <Button className={styles.submit} onClick={handleSubmit}>
        컬러 등록
      </Button>
    </div>
  );
};

export default New;
