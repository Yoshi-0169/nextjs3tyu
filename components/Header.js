import styles from './Header.module.css';
import Link from 'next/link';


export function Header() {
  return (
      <header className={styles.header}>
        <Link href="/" legacyBehavior>
            <a className={styles.anchor}>Index</a>
        </Link>
        
        <Link href="/koko" legacyBehavior>
            <a className={styles.anchor}>koko</a>
        </Link>
      </header>
  );
}