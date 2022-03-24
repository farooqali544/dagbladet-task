import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import Spinner from "../Spinner/Spinner";
import { getArticles } from "./Apis/getArticles";
import styles from "./Home.module.css";
export default function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [articles, setArticles] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const editArticle = (columnIndex, rowIndex, newValue) => {
    const temp = articles.map((article, index) => {
      if (index === rowIndex) {
        const column = article.columns.map((column, colIndex) => (colIndex === columnIndex ? { ...column, title: newValue } : column));

        return { ...article, columns: column };
      }

      return article;
    });

    setArticles(temp);
  };

  useEffect(() => {
    window.onresize = () => setScreenWidth(window.innerWidth);
    getArticles(setArticles, setLoaded);
  }, []);

  if (!loaded) return <Spinner />;

  return (
    <>
      <div className={styles.container}>
        {articles.map((item, index) => (
          <Row key={index} columns={item.columns} mobileView={screenWidth <= 800} editArticle={editArticle} rowIndex={index} />
        ))}
      </div>
    </>
  );
}
