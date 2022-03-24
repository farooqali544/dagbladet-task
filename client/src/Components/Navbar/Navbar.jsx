import React, { useState } from "react";
import styles from "./Navbar.module.css";

const links = ["Home", "About", "ETC"];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("Home");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* logo */}
        <div className={styles.logo}>
          <h1>Logo</h1>
        </div>

        <div className={styles.links}>
          {links.map((link) => (
            <a onClick={()=>{setActiveLink(link)}} href='#' id={activeLink === link?styles.activeLink:""} >{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
