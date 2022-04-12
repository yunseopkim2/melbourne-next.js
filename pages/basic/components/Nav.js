import Link from "next/link";
import styles from 'basic/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
        <li className={styles.li}> <Link href='/basic/calc'>calc</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/basic/login'>Login</Link></li>
              <li className={styles.li}> <Link href='/basic/grade'>Grade</Link></li>
              <li className={styles.li}> <Link href='/user/login'>SingUp</Link></li>
              <li className={styles.li}> <Link href='/user/login'>Grade</Link></li>
              
      </ul>
    </nav>
  );
};