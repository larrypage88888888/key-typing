import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>关于我们 - Key-Typing</title>
        <meta name="description" content="了解更多关于Key-Typing的信息。" />
        <meta name="keywords" content="关于我们, Key-Typing, 打字练习" />
        <meta name="author" content="Key-Typing" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Key-Typing</div>
        <nav>
          <a href="/">首页</a>
          <a href="/about">关于</a>
          <a href="/contact">联系</a>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>关于我们</h1>
        <p>Key-Typing是一个专注于提升打字速度和准确性的网站。我们提供多种打字练习和课程，帮助用户提高打字技能。</p>
      </main>
    </div>
  );
}