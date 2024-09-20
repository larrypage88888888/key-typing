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
        <title>Key-Typing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Key-Typing</div>
        <nav>
          <a href="#home">首页</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
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