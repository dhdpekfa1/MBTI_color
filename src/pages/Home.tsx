import { useState } from "react";
import { Link } from "react-router-dom";
import mockData from "../../mock.json";
import styles from "./Home.module.css";

const Home = () => {
  const [filter, setFilter] = useState(null);

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.titleWrapper}>
          <p className={styles.title1}>MBTI별</p>
          <p className={styles.title2}>좋아하는 컬러</p>
        </div>

        {filter && (
          <div className={styles.filterBox} onClick={() => setFilter(null)}>
            {filter}
            <img src="../src/assets/icons/x.svg" alt="필터 삭제" />
          </div>
        )}
      </header>

      <div>
        <Link to="/new" className={styles.newColorButton} style={{}}>
          + 새 컬러 등록하기
        </Link>

        <ul className={styles.colorList}>
          {mockData.results.map((item) => (
            <li key={item.id}>
              <p className={styles.colorId}>{item.id}</p>
              <p className={styles.colorMbti}>{item.mbti}</p>
              <p className={styles.colorId}>- - - &gt;</p>
              <div
                className={styles.colorBox}
                style={{ backgroundColor: item.colorCode }}
              />
              <p className={styles.colorCode}>{item.colorCode}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
