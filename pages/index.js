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
        <meta name="description" content="提升打字速度和准确性的网站" />
        <meta name="keywords" content="打字练习, 提升打字速度, 提高打字准确性" />
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
        <h1>欢迎来到 Key-Typing</h1>
        <p>这里是一个简洁而有趣的打字练习网站，提升您的打字速度和准确性</p>
      </main>
    </div>
  )
}