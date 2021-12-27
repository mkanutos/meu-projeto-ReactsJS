import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <ul clssName={styles.list}>
        <li clssName={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li clssName={styles.item}>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li clssName={styles.item}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    )
}

export default Navbar