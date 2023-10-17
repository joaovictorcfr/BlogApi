import styles from "./Footer.module.css";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

function Footer() {
  return (
    <div className={styles.container}>
      <h2>Contatos</h2>
      <div className={styles.links}>
        <ul>
          <li>
            <FiInstagram />
          </li>
          <li>
            <FiFacebook />
          </li>
          <li>
            <FiUser />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
