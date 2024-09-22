import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>联系我们 - Key-Typing</title>
        <meta name="description" content="通过Key-Typing联系我们。" />
        <meta name="keywords" content="联系我们, Key-Typing, 打字练习" />
        <meta name="author" content="Key-Typing" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Key-Typing</div>
        <nav>
          <a href="/" className={styles.navLink}>首页</a>
          <a href="/about" className={styles.navLink}>关于</a>
          <a href="/contact" className={styles.navLink}>联系</a>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.contactTitle}>联系我们</h1>
        <p className={styles.contactText}>如果您有任何问题或建议，请通过以下方式联系我们：</p>
        <ul className={styles.contactList}>
          <li className={styles.contactListItem}>电子邮件: support@key-typing.com</li>
          <li className={styles.contactListItem}>电话: 123-456-7890</li>
        </ul>
      </main>
    </div>
  );
}