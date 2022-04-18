import Link from "next/link";
import styles from 'common/styles/Nav.module.css'
import style from 'common/styles/Layout.module.css'


export default function Nav() {
  return (
    <nav className={styles.nav}>
       
      <ul>
        <li className={style.code}><button onClick={ () => {history.back('/'); } } >뒤로가기</button>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/basic/components/Layout'>Basic</Link> </li>
          <li className={styles.li}> <Link href='/game/components/Layout'>Game</Link> </li>
          <li className={styles.li}> <Link href='/user/components/Layout'>회원</Link> </li>
              <li className={styles.li}> <Link href='/board/components/Layout'>게시판</Link></li>
      <li className={styles.li}> <Link href='/game/components/teamLayout'>팀 목록</Link></li>
      <li className={styles.li}> <Link href='/todo/components/Layout'>스케줄</Link></li>
 </li>
   
    
      </ul>
    </nav>
  );
};