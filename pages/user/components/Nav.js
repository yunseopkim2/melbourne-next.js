import Link from "next/link";
import styles from 'user/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
        <li className={styles.li}> <Link href='/user/login'>Login</Link> </li>
        <li className={styles.li}> <Link href='/user/join'>Sign-in</Link> </li>
             <li className={styles.li}> <Link href='/user/user-list'>User-List</Link> </li>     
      </ul>
    </nav>
  );
};