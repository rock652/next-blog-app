import React from "react";
import styles from "./authLnk.module.css";
import Link from "next/link";

const AuthLink = () => {
  //temperorwey
  const status = "authenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/writet">write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLink;
