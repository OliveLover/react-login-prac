import style from "./header.module.css";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className={style.container}>
      <div className={style.gridItem}>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};

export default header;
