import Link from "next/link";
import styles from 'common/styles/Nav.module.css'
import style from 'common/styles/Layout.module.css'


export default function Nav() {
  return (
    <nav className={styles.nav}>
       
      <ul>
        <li className={style.code}><button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/basic/components/Layout'>basic</Link> </li>
        <li className={styles.li}> <Link href='/game'>Game</Link> </li>
        <li className={styles.li}> <Link href='/user/components/Layout'>User</Link></li>
              <li className={styles.li}> <Link href='/board/components/Layout'>BoardList</Link></li>
        <li className={styles.li}> <Link href='/game/game-list'>게임목록</Link></li>
      <li className={styles.li}> <Link href='/gmae/team-list'>팀목록</Link></li>
    <li className={styles.li}> <Link href='/todo/todo-list'>스케줄목록</Link></li>
    <li className={styles.li}> <Link href='/todo/todo'>스케줄등록</Link></li></li>
      </ul>
    </nav>
  );
};