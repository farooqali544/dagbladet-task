import React, { useRef, useState } from "react";
import styles from "./Row.module.css";
export default function Row({ columns, mobileView, editArticle, rowIndex }) {
  const [editingTitle, setEditingTitle] = useState(null);

  const inputRef = useRef(null);

  const onEdit = (colIndex, rowIndex) => {
    editArticle(colIndex, rowIndex, inputRef.current.value);
    setEditingTitle(null);
  };

  const goToUrl = (url) => {
    window.open(url, "_blank").focus();
  };

  return (
    <>
      <div className={styles.row}>
        {columns.map((column, index) => (
          <figure className={styles.card}>
            <img
              src={`${column.imageUrl}&width=${column.width * 100}`}
              alt=''
              onClick={() => {
                goToUrl(column.url);
              }}
            />

            {editingTitle === index ? (
              <div className={styles.editingTitle}>
                <input ref={inputRef} type='text' placeholder='Enter Title' defaultValue={column.title} />

                <div>
                  <span
                    onClick={() => {
                      onEdit(index, rowIndex);
                    }}
                  >
                    ✔
                  </span>
                  <span
                    onClick={() => {
                      setEditingTitle(null);
                    }}
                  >
                    ❌
                  </span>
                </div>
              </div>
            ) : (
              <figcaption className={styles.articleTitle}>
                <span
                  onClick={() => {
                    goToUrl(column.url);
                  }}
                >
                  {column.title}
                </span>
                <span
                  onClick={() => {
                    setEditingTitle(index);
                  }}
                  className={styles.editTitle}
                >
                  Edit
                </span>
              </figcaption>
            )}

            {/* <div className={styles.editTitle}></div> */}
          </figure>
        ))}
      </div>
    </>
  );
}
