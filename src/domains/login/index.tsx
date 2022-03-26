import React, { useRef, useState } from "react";
import mainImageSrc from "../../assets/images/kkj-1.webp";
import LoginSuccssImageSrc from "../../assets/images/kkj-2.webp";
import styles from "./index.module.css";
// import mainImageSrc from "../../assets/images/kkj-1.webp";
// import ReactGoogleLogin from "react-google-login";

function Login() {
  const [id, setId] = useState<string>("");
  const [src, setSrc] = useState<string>(mainImageSrc);
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const passwordRef = useRef<HTMLInputElement>();

  return (
    <main className={styles.login}>
      <img className="login image" src={src} alt="kkj" />
      <div>
        <h1>김경진이 세상을 지배한다</h1>
        {/* <ReactGoogleLogin /> */}
        {!isLoginSuccessful && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const password = passwordRef?.current?.value;
              if (id === "김경진" || password === "김경진") {
                setSrc(LoginSuccssImageSrc);
                setIsLoginSuccessful(true);
              }
            }}
          >
            <input
              placeholder="아이디"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <input placeholder="비밀전호" type="password" />
            <button type="submit">로그인 하기</button>
          </form>
        )}
      </div>
    </main>
  );
}

export default Login;
