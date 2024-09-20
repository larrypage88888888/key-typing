import { useRouter } from 'next/router'
import styles from '../styles/Practice.module.css'

export default function Practice() {
  const router = useRouter()
  const { type, subType } = router.query

  const handleBackToLearn = () => {
    router.push('/learn')
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{type} - {subType}</h1>
      </header>

      <main className={styles.main}>
        {/* 这里可以添加新的内容 */}
      </main>

      <footer className={styles.footer}>
        <button className={styles.backButton} onClick={handleBackToLearn}>返回学习页面</button>
      </footer>
    </div>
  )
}