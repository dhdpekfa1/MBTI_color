import { Link } from "react-router-dom";

const New = () => {
  return (
    <div>
      <h1>새 컬러 등록하기</h1>
      <Link to="/">
        <img src="../src/assets/icons/x.svg" alt="취소" />
      </Link>
      <h2>MBTI</h2>
      <h2>컬러</h2>
      <img src="../src/assets/icons/repeat.svg" alt="랜덤" />
      <input name="colorCode" />
      <button>컬러 등록</button>
    </div>
  );
};

export default New;
