import Link from 'next/link';
import styles from '../styles/Home.module.css'


function Navbar({ title }) {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Key-Typing</div>
            <nav>
            <a href="/">首页</a>
            <a href="/about">关于</a>
            <a href="/contact">联系</a>
            </nav>
        </header>
    );
}

export default Navbar;