import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import styles from '../styles/Practice.module.css'
import Image from 'next/image'

export default function Practice() {
  const router = useRouter()
  const { type, subType } = router.query
  const [currentKey, setCurrentKey] = useState('')
  const [targetWord, setTargetWord] = useState('')
  const [userInput, setUserInput] = useState('')
  const [pressedKeys, setPressedKeys] = useState([])
  const [progress, setProgress] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!type || !subType) {
      router.push('/learn')
      return
    }
    generateTargetWord(subType)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [type, subType, router])

  const generateTargetWord = (subType) => {
    let keys
    switch (subType) {
      case 'FJ':
        keys = 'fjfjfjfjfjfjfjf'
        break
      case 'DK':
        keys = 'dkdkdkdkdkdkdkd'
        break
      case 'SL':
        keys = 'slslslslslslsls'
        break
      case 'A;':
        keys = 'a;a;a;a;a;a;a;a'
        break
      // ... 添加其他所有子类型的键位组合
      default:
        keys = 'abcdefghijklmno'
    }
    setTargetWord(keys)
    setUserInput('')
    setProgress(0)
  }

  const handleKeyDown = (e) => {
    e.preventDefault()
    setCurrentKey(e.key)
    setPressedKeys(prev => [...new Set([...prev, e.key.toLowerCase()])])
  }

  const handleKeyUp = (e) => {
    e.preventDefault()
    const inputChar = e.key.toLowerCase()
    setPressedKeys(prev => prev.filter(key => key !== inputChar))
    
    if (userInput.length < targetWord.length) {
      const newUserInput = userInput + inputChar
      setUserInput(newUserInput)
      setProgress(newUserInput.length)
      setTotalCount(prev => prev + 1)

      if (inputChar === targetWord[userInput.length].toLowerCase()) {
        setCorrectCount(prev => prev + 1)
      } else {
        setIncorrectCount(prev => prev + 1)
      }

      if (newUserInput.length === targetWord.length) {
        handlePracticeComplete()
      }
    }
    
    setCurrentKey('')
  }

  const handlePracticeComplete = () => {
    alert(`练习完成！正确：${correctCount}，错误：${incorrectCount}，总数：${totalCount}`)
    generateTargetWord(subType)
    setUserInput('')
    setProgress(0)
    setCorrectCount(0)
    setIncorrectCount(0)
    setTotalCount(0)
  }

  const handleBackToLearn = () => {
    router.push('/learn')
  }

  return (
    <div className={styles.container}>
      <h1>{type} - {subType}</h1>
      <div className={styles.practiceArea}>
        <p className={styles.practiceText}>
          请输入：
          {targetWord.split('').map((char, index) => (
            <span 
              key={index} 
              className={
                index < userInput.length
                  ? userInput[index].toLowerCase() === char.toLowerCase()
                    ? styles.correctChar
                    : styles.incorrectChar
                  : index === userInput.length
                  ? styles.currentChar
                  : ''
              }
            >
              {char}
            </span>
          ))}
        </p>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={() => {}} // 空函数，因为我们通过键盘事件来更新
          style={{ position: 'absolute', left: '-9999px' }} // 隐藏输入框
        />
        <p className={styles.practiceText}>当前按下: {currentKey}</p>
        <p className={styles.practiceText}>
          正确: {correctCount} | 错误: {incorrectCount} | 总数: {totalCount}
        </p>
      </div>
      <div className={styles.keyboardArea}>
        <Image
          src="/keyboard.png"
          alt="Keyboard"
          width={800}
          height={300}
          className={styles.keyboardImage}
        />
        {pressedKeys.map(key => (
          <div key={key} className={styles.highlightKey} style={{ left: `${getKeyPosition(key).x}px`, top: `${getKeyPosition(key).y}px` }}></div>
        ))}
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{width: `${(progress / targetWord.length) * 100}%`}}></div>
      </div>
      <p>进度: {progress} / {targetWord.length}</p>
      <button className={styles.backButton} onClick={handleBackToLearn}>返回学习页面</button>
    </div>
  )
}

function getKeyPosition(key) {
  const positions = {
    'a': { x: 65, y: 115 },
    's': { x: 115, y: 115 },
    'd': { x: 165, y: 115 },
    'f': { x: 215, y: 115 },
    'g': { x: 265, y: 115 },
    'h': { x: 315, y: 115 },
    'j': { x: 365, y: 115 },
    'k': { x: 415, y: 115 },
    'l': { x: 465, y: 115 },
    ';': { x: 515, y: 115 },
    // ... 添加其他键的位置
  }
  return positions[key.toLowerCase()] || { x: 0, y: 0 }
}