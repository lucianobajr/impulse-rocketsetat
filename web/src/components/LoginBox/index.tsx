import React, { useContext } from "react";

import { VscGithubInverted } from "react-icons/vsc";
import { AuthContext } from "../../contexts/auth";

import styles from "./styles.module.scss";

const LoginBox: React.FC = () => {
  const { signInUrl } = useContext(AuthContext);

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>

      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        Entrar com Github
      </a>
    </div>
  );
};

export default LoginBox;
