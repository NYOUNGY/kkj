import React from "react";
import mainImageSrc from "../../assets/images/kkj-1.webp";
import styles from "./index.module.css";
// import mainImageSrc from "../../assets/images/kkj-1.webp";
// import ReactGoogleLogin from "react-google-login";

function Login() {
  return (
    <main className={styles.login}>
      <img className="login image" src={mainImageSrc} alt="kkj" />
      <div>
        <h1>김경진이 세상을 지배한다</h1>
        {/* <ReactGoogleLogin /> */}
      </div>
    </main>
  );
}

export default Login;
