import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ColorSurvey from "../components/ColorSurvey";
import { HomeList } from "../types/home";
import axios from "../apis/index";
import styles from "./Home.module.css";

const Home = () => {
  const [items, setItems] = useState<HomeList[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const nextPageRef = useRef<string | null>(null);
  const isLoadingRef = useRef(false);

  useEffect(() => {
    fetchData(filter);
  }, [filter]);

  useEffect(() => {
    async function handleScroll() {
      if (!nextPageRef.current || isLoadingRef.current) return;
      isLoadingRef.current = true;
      const maxScrollTop =
        document.documentElement.offsetHeight - window.innerHeight - 100;
      const currentScrollTop = document.documentElement.scrollTop;
      if (currentScrollTop >= maxScrollTop) {
        await handleLoadNext();
      }
      isLoadingRef.current = false;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchData = async (mbti: string | null) => {
    const res = await axios.get("/color-surveys/", {
      params: { mbti, limit: 20 },
    });
    nextPageRef.current = res.data.next;
    setItems(res.data.results);
  };

  const handleLoadNext = async () => {
    if (!nextPageRef.current) return;
    const res = await axios.get(nextPageRef.current);
    const data = res.data;
    setItems((prevItems) => [...prevItems, ...data.results]);
    nextPageRef.current = data.next;
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <h1 className={styles.heading}>
            MBTI 별<br />
            <span className={styles.accent}>좋아하는 컬러</span>
          </h1>
          <div>
            {filter && (
              <div className={styles.filter} onClick={() => setFilter(null)}>
                {filter}
                <img
                  className={styles.removeIcon}
                  src="../src/assets/icons/x.svg"
                  alt="필터 삭제"
                />
              </div>
            )}
          </div>
        </header>
      </div>
      <main className={styles.content}>
        <Link className={styles.addItem} to="/new">
          + 새 컬러 등록하기
        </Link>
        <ul className={styles.items}>
          {items.map((item: HomeList) => (
            <li key={item.id}>
              <ColorSurvey value={item} onClick={() => setFilter(item.mbti)} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
