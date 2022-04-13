import Link from "next/link";
import styles from 'common/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
        <li className={styles.li}> <Link href='/board/board-list'>BoardList</Link> </li>
        <li className={styles.li}> <Link href='/board/board'>게시판</Link> </li>
    
              
      </ul>
    </nav>
  );
};