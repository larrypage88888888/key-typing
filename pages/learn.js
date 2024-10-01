import Head from 'next/head'
import styles from '../styles/Learn.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Navbar from '../components/Navbar.js'; // 引入 Navbar 组件


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
        'FJ', 'DK','FJDK', 
        'SL', 'A;','SLA;',
        'GH', 'TY', 'GHTY',
        'ER', 'UO', 'ERUO',
        'WI', 'QP', 'WIQP',
        'VM', 'XN', 'VMXN',
        'ZB', 'C,', 'C,ZB',
        '/.', '空格',
        '数字行', '符号键','全键盘'
      ],
      '编程练习': ['Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'Go'],
      '单词练习': ['初级词汇', '中级词汇', '高级词汇', '专业词汇', '俚语词汇'],
      '打字游戏': ['唐诗', '宋词', '元曲', '现代诗', '古文'] // 修改这里
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
        <title>学习打字 - 提升打字技能</title>
        <meta name="description" content="通过我们的课程学习打字，提升您的打字技能。" />
        <meta name="keywords" content="学习打字, 打字课程, 提升打字技能" />
        <meta name="author" content="typing" />
        <meta property="og:title" content="学习打字 - 提升打字技能" />
        <meta property="og:description" content="通过我们的课程学习打字，提升您的打字技能。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://key-typing.com/learn" />
        <meta property="og:image" content="//public/logo93.png" />
        <meta name="twitter:title" content="学习打字 - 提升打字技能" />
        <meta name="twitter:description" content="通过我们的课程学习打字，提升您的打字技能。" />
        <meta name="twitter:image" content="//public/logo93.png" />
      </Head>

      <Navbar></Navbar>

      <main>
        <section className={styles.hero}>
          <h1 className={styles.typewriter}>开始您的打字练习</h1>
          <p>在这里，您可以提高打字速度和准确性</p>
          {selectedPractice ? (
            renderSubMenu(selectedPractice)
          ) : (
            <div className={styles.practiceTypes}>
              {['指法练习', '编程练习', '单词练习', '打字游戏'].map((practice, index) => (
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