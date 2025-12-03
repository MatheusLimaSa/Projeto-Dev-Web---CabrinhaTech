import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>CabrinhaTech</h2>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Placas de Vídeo</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </nav>
  );
}

export default Navbar;