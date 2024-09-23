import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()

  const handleStartLearning = () => {
    router.push('/learn')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>打字练习，提升打字速度和准确性</title>
        <meta name="description" content="打字练习，提升打字速度和准确性" />
        <meta name="keywords" content="打字, typing, key-typing" />
        <meta name="author" content="typing" />
        <meta property="og:title" content="key-typing - 一个打字练习网站" />
        <meta property="og:description" content="这是一个关于打字练习, 提高打字速度和准确性的网站。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://key-typing.com" />
        <meta property="og:image" content="//public/logo93.png" />

        <meta name="twitter:title" content="打字练习，提升打字速度和准确性" />

        <meta name="twitter:description" content="这是一个关于打字练习, 提高打字速度和准确性的网站。" />
        <meta name="twitter:image" content="//public/logo93.png" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Key-Typing</div>
        <nav>
          <a href="/">首页</a>
          <a href="/about">关于</a>
          <a href="/contact">联系</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <h1 className={styles.typewriter}>欢迎来到 Key-Typing</h1>
          <p>这里是一个简洁而有趣的打字练习网站，提升您的打字速度和准确性</p>
          <button className={styles.startButton} onClick={handleStartLearning}>开始学习</button>
        </section>
      </main>
    </div>
  )
}