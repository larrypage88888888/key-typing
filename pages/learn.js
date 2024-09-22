import Head from 'next/head'
import styles from '../styles/Learn.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Learn() {
  const router = useRouter()
  const [selectedPractice, setSelectedPractice] = useState(null)

  const handleBackToHome = () => {
    router.push('/')
  }

  const handlePracticeClick = (practice) => {
    setSelectedPractice(practice)
  }

  const handleBackToPractices = () => {
    setSelectedPractice(null)
  }

  const handleSubPracticeClick = (practice, subPractice) => {
    router.push(`/practice?type=${practice}&subType=${subPractice}`)
  }

  const renderSubMenu = (practice) => {
    // 这里根据不同的练习类型定义子菜单项
    const subMenuItems = {
      '指法练习': [
        'FJ', 'DK','FJDK', 'SL', 'A;','SLA;',
        'GH', 'TY', 'ER', 'UO',
        'WI', 'QP', 'VM', 'XN',

        'ZB', 'C,', '/.', '空格',
        '数字行', '符号键', '功能键'
      ],
      '编程练习': ['Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'Go'],
      '单词练习': ['初级词汇', '中级词汇', '高级词汇', '专业词汇', '俚语词汇'],
      '诗词歌赋': ['唐诗', '宋词', '元曲', '现代诗', '古文']
    }

    return (
      <div className={styles.subMenu}>
        <h2>{practice}</h2>
        <div className={styles.practiceTypes}>
          {subMenuItems[practice].map((item, index) => (
            <div key={index} className={styles.practiceBox} onClick={() => handleSubPracticeClick(practice, item)}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <button className={styles.backButton} onClick={handleBackToPractices}>返回</button>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>学习 - Key-Typing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>Key-Typing</div>
        <nav>
          <a href="/">首页</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <h1 className={styles.typewriter}>开始您的打字练习</h1>
          <p>在这里，您可以提高打字速度和准确性</p>
          {selectedPractice ? (
            renderSubMenu(selectedPractice)
          ) : (
            <div className={styles.practiceTypes}>
              {['指法练习', '编程练习', '单词练习', '诗词歌赋'].map((practice, index) => (
                <div key={index} className={styles.practiceBox} onClick={() => handlePracticeClick(practice)}>
                  <span>{practice}</span>
                </div>
              ))}
            </div>
          )}
          {!selectedPractice && (
            <button className={styles.backButton} onClick={handleBackToHome}>返回主页</button>
          )}
        </section>
      </main>
    </div>
  )
}