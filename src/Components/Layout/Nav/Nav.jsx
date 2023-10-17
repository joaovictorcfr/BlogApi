import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.container_nav}>
      <h3>Blog</h3>
      <div className={styles.links}>
        <ul>
          <Link to={"/"}>Home</Link>
          <Link to={"/admin"}>Gerenciar</Link>
          <button className={styles.btn_post}>
            <Link to={"/posts"}>New Posts</Link>
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
