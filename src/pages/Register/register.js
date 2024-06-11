import Header from "../../components/Header/Header.js";
import style from "./register.module.css";

const Register = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.registerWrapper}>
          <h2>회원 가입</h2>
          <p>가입을 통해 더 다양한 서비스를 만나보세요!</p>
          <form method="post">
            <div className={style.idWrapper}>
              <input
                type="text"
                className={style.idForm}
                placeholder="아이디 입력(6 ~ 20자)"
              />
              <button>중복확인</button>
            </div>
            <input
              type="password"
              className={style.passwordForm}
              placeholder="비밀번호 입력(문자, 숫자, 특수문자 포함 8 ~ 20자)"
            />
            <input
              type="password"
              className={style.passwordForm}
              placeholder="비밀번호 재입력"
            />
            <div className={style.emailWrapper}>
              <input />
              <label>@</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
