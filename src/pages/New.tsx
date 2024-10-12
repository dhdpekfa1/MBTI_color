import { useState } from "react";
import { Link } from "react-router-dom";
import MBTISelect from "../components/MBTISelect";
import generateColorCode from "../utils/generateColorCode";

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

  const handleRandomClick = () => {
    const nextColorCode = generateColorCode();
    handleChange("colorCode", nextColorCode);
  };

  const handleColorCodeBlur = () => {
    const isValidColorCode = /^#[a-f0-9]{6}$/i.test(formValue.colorCode);
    if (!isValidColorCode) {
      handleChange("colorCode", "#000000");
    }
  };

  return (
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to="/">
        <img src="../src/assets/icons/x.svg" alt="취소" />
      </Link>
      <h2>MBTI</h2>
      <MBTISelect
        value={formValue.mbti}
        onChange={(newMbti) => handleChange("mbti", newMbti)}
      />
      <h2>컬러</h2>
      <img
        src="../src/assets/icons/repeat.svg"
        alt="랜덤"
        onClick={handleRandomClick}
      />
      <input
        value={formValue.colorCode}
        onBlur={handleColorCodeBlur}
        onChange={(e) => handleChange("colorCode", e.target.value)}
      />
      <button>컬러 등록</button>
    </div>
  );
};

export default New;
