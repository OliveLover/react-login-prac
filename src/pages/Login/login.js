import { Link } from "react-router-dom";
import style from "./login.module.css";

const login = () => {
  return (
    <div className={style.container}>
      <div className={style.loginWrapper}>
        <h2>Login</h2>
        <form method="post" className={style.loginForm}>
          <input type="text" name="userName" placeholder="Email"></input>
          <input type="password" name="password" placeholder="Password"></input>
          <input type="submit"></input>
        </form>
        <div className={style.registerWrapper}>
          <Link to="/register">회원가입</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
