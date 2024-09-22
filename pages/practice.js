import { useRouter } from 'next/router'
import { useState, useEffect, useRef, useCallback } from 'react'
import styles from '../styles/Practice.module.css'

export default function Practice() {
  const router = useRouter()
  const { type, subType } = router.query
  const [targetWord, setTargetWord] = useState('')
  const [userInput, setUserInput] = useState('')
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const inputRef = useRef(null)
  const dialogRef = useRef(null)
  const [pressedKeys, setPressedKeys] = useState([])

  const generateTargetWord = useCallback((subType) => {
    let word;




    if (type === '编程练习' || type === '单词练习') {
      const wordLists = {
        'Python': ['def', 'import', 'print', 'from', 'as', 'if', 'else', 'elif', 'for', 'while', 'break', 'continue', 'return', 'class', 'try', 'except', 'finally', 'with', 'lambda', 'yield', 'global'],
        'JavaScript': ['function', 'var', 'let', 'const', 'if', 'else', 'for', 'while', 'break', 'continue', 'return', 'class', 'try', 'catch', 'finally', 'switch', 'case', 'default', 'async', 'await'],
        'Java': ['public', 'static', 'void', 'main', 'String', 'args', 'if', 'else', 'for', 'while', 'break', 'continue', 'return', 'class', 'try', 'catch', 'finally', 'switch', 'case', 'default'],
        'C++': ['include', 'int', 'main', 'cout', 'cin', 'if', 'else', 'for', 'while', 'break', 'continue', 'return', 'class', 'try', 'catch', 'switch', 'case', 'default', 'template', 'namespace'],
        'Ruby': ['def', 'end', 'if', 'else', 'elsif', 'for', 'while', 'break', 'next', 'redo', 'retry', 'return', 'class', 'begin', 'rescue', 'ensure', 'module', 'yield', 'super', 'self'],
        'Go': ['package', 'import', 'func', 'if', 'else', 'for', 'range', 'break', 'continue', 'return', 'type', 'struct', 'interface', 'map', 'chan', 'go', 'defer', 'select', 'case', 'default'],
        '初级词汇': ['apple', 'banana', 'orange', 'cat', 'dog', 'fish', 'bird', 'tree', 'house', 'car', 'book', 'pen', 'school', 'friend', 'family', 'water', 'food', 'sun', 'moon', 'star'],
        '中级词汇': ['elephant', 'giraffe', 'kangaroo', 'pineapple', 'strawberry', 'computer', 'telephone', 'television', 'refrigerator', 'university', 'government', 'environment', 'technology', 'culture', 'society'],
        '高级词汇': ['photosynthesis', 'mitochondria', 'chlorophyll', 'ecosystem', 'biodiversity', 'quantum', 'relativity', 'philosophy', 'psychology', 'economics', 'anthropology', 'linguistics', 'archaeology'],
        '专业词汇': ['algorithm', 'data structure', 'binary search', 'tree', 'linked list', 'graph', 'database', 'network', 'encryption', 'artificial intelligence', 'machine learning', 'neural network'],
        '俚语词汇': ['cool', 'awesome', 'chill', 'dude', 'bro', 'fam', 'lit', 'yolo', 'flex', 'salty', 'sus', 'cap', 'no cap', 'bet', 'vibe', 'slay', 'goat', 'fire', 'lowkey', 'highkey']
      };

      const words = wordLists[subType];
      const selectedWords = [];
      for (let i = 0; i < 8; i++) {
        if (words) {
          const randomIndex = Math.floor(Math.random() * words.length);
          selectedWords.push(words[randomIndex]);
        }
      }
      word = selectedWords.join(' ');
    } else {
      let chars;
      switch (subType) {
        case 'FJ':
          chars = 'fj'
          break
        case 'DK':
          chars = 'dk'
          break
        case 'FJDK':
          chars = 'fjdk'
          break
        case 'SL':
          chars = 'sl'
          break
        case 'A;':
          chars = 'a;'
          break
        case 'SLA;':
          chars = 'sla;'
          break
        case 'GH':
          chars = 'gh'
          break
        case 'TY':
          chars = 'ty'
          break
        case 'GHTY':
          chars = 'ghty'
          break
        case 'ER':
          chars = 'er'
          break
        case 'UO':
          chars = 'uo'
          break
        case 'ERUO':
          chars = 'eruo'
          break
        case 'WI':
          chars = 'wi'
          break
        case 'QP':
          chars = 'qp'
          break
        case 'WIQP':
          chars = 'wiqp'
          break
        case 'VM':
          chars = 'vm'
          break
        case 'XN':
          chars = 'xn'
          break
        case 'VMXN':
          chars = 'vmxn'
          break
        case 'ZB':
          chars = 'zb'
          break
        case 'C,':
          chars = 'c,'
          break
        case 'C,ZB':
          chars = 'c,zb'
          break
        case '/.':
          chars = '/.'
          break
        case '空格':
          chars = ' '
          break
        case '数字行':
          chars = '1234567890'
          break
        case '符号键':
          chars = '!@#$%^&*()_+{}|:"<>?`~[]\\;\',./'
          break
        case '功能键':
          chars = 'f1f2f3f4f5f6f7f8f9f10f11f12'
          break
        case 'Python':
          chars = 'def import print from as if else elif for while break continue return'
          break
        case 'JavaScript':
          chars = 'function var let const if else for while break continue return'
          break
        case 'Java':
          chars = 'public static void main String args if else for while break continue return'
          break
        case 'C++':
          chars = 'include int main cout cin if else for while break continue return'
          break
        case 'Ruby':
          chars = 'def end if else elsif for while break next redo retry return'
          break
        case 'Go':
          chars = 'package import func if else for range break continue return'
          break
        case '初级词汇':
          chars = 'apple banana orange cat dog fish bird tree house car'
          break
        case '中级词汇':
          chars = 'elephant giraffe kangaroo pineapple strawberry computer telephone television refrigerator'
          break
        case '高级词汇':
          chars = 'photosynthesis mitochondria chlorophyll photosynthesis ecosystem biodiversity'
          break
        case '专业词汇':
          chars = 'algorithm data structure binary search tree linked list graph'
          break
        case '俚语词汇':
          chars = 'cool awesome chill dude bro fam lit'
          break
        case '唐诗':
          chars = '床前明月光疑是地上霜举头望明月低头思故乡'
          break
        case '宋词':
          chars = '明月几时有把酒问青天不知天上宫阙今夕是何年'
          break
        case '元曲':
          chars = '天净沙秋思枯藤老树昏鸦小桥流水人家古道西风瘦马'
          break
        case '现代诗':
          chars = '面朝大海春暖花开从明天起做一个幸福的人喂马劈柴周游世界'
          break
        case '古文':
          chars = '大道之行也天下为公选贤与能讲信修睦'
          break
        default:
          chars = 'abcdefghijklmnopqrstuvwxyz,./'
      }
      if (type === '诗词歌赋') {
        word = chars
      } else {
        word = Array(15).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
      }

    }

    setTargetWord(word)
  }, [type])

  useEffect(() => {
    if (router.isReady && type && subType) {
      generateTargetWord(subType)
      setUserInput('')
      setCorrectCount(0)
      setIncorrectCount(0)
      setTotalCount(0)
      setAccuracy(0)
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    // 添加键盘事件监听器
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('keydown', handleKeyboardShortcuts)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('keydown', handleKeyboardShortcuts)
    }
  }, [type, subType, router.isReady])

  const handleKeyDown = (e) => {
    setPressedKeys(prev => [...new Set([...prev, e.key.toLowerCase()])])
  }

  const handleKeyUp = (e) => {
    setPressedKeys(prev => prev.filter(key => key !== e.key.toLowerCase()))
  }

  const handleKeyboardShortcuts = useCallback((e) => {
    const dialogVisible = dialogRef.current && window.getComputedStyle(dialogRef.current).display !== 'none'
    const inputFocused = document.activeElement !== inputRef.current

    if (dialogVisible && inputFocused) {
      if (e.key === 'r' || e.key === 'R') {
        e.preventDefault()
        handleRestart()
      } else if (e.key === 'Enter') {
        handleNextLevel()
        e.preventDefault()
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const input = e.target.value
    setUserInput(input)
    setTotalCount(input.length)

    let correct = 0
    for (let i = 0; i < input.length; i++) {
      if (input[i] === targetWord[i]) {
        correct++
      }
    }
    setCorrectCount(correct)
    setIncorrectCount(input.length - correct)

    if (input.length === targetWord.length) {
      const accuracyValue = (correct / targetWord.length) * 100
      setAccuracy(accuracyValue.toFixed(2))
      inputRef.current.blur()
      dialogRef.current.style.display = 'block'
    }
  }

  const handleRestart = () => {
    dialogRef.current.style.display = 'none'
    setUserInput('')
    setCorrectCount(0)
    setIncorrectCount(0)
    setTotalCount(0)
    generateTargetWord(subType)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleNextLevel = () => {
    const currentIndex = subTypes.findIndex(st => st === subType)
    console.log(1111)
    console.log("currentIndex", currentIndex)
    console.log("subTypes", subTypes)
    console.log("subType", subType)
    dialogRef.current.style.display = 'none'
    setUserInput('')

    setCorrectCount(0)
    setIncorrectCount(0)
    setTotalCount(0)
    setAccuracy(0)

    if (currentIndex < subTypes.length - 1) {
      const nextSubType = subTypes[currentIndex + 1]
      subType = nextSubType

      router.push(`/practice?type=${encodeURIComponent(type)}&subType=${encodeURIComponent(nextSubType)}`, undefined, { shallow: true }).then(() => {
        generateTargetWord(nextSubType)
      })
    } else {
      router.push('/learn')
    }

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleBackToLearn = () => {
    router.push('/learn')
  }

  const renderKeyboard = () => {
    const rows = [
      ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      [' '] // 添加空格键
    ]

    return (
      <div className={styles.keyboard}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.keyboardRow}>
            {row.map(key => (
              <div
                key={key}
                className={`
                  ${styles.key} 
                  ${key === ' ' ? styles.spaceKey : ''}
                  ${pressedKeys.includes(key) ? styles.keyPressed : ''}
                  ${key === targetWord[userInput.length]?.toLowerCase() ? styles.keyHighlighted : ''}
                `}
              >
                {key === ' ' ? 'Space' : key}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }

  const getFingerInstruction = (char) => {
    const fingerMap = {
      'q': '左手小指', 'a': '左手小指', 'z': '左手小指',
      'w': '左手无名指', 's': '左手无名指', 'x': '左手无名指',
      'e': '左手中指', 'd': '左手中指', 'c': '左手中指',
      'r': '左手食指', 'f': '左手食指', 'v': '左手食指', 't': '左手食指', 'g': '左手食指', 'b': '左手食指',
      'y': '右手食指', 'h': '右手食指', 'n': '右手食指', 'u': '右手食指', 'j': '右手食指', 'm': '右手食指',
      'i': '右手中指', 'k': '右手中指', ',': '右手中指',
      'o': '右手无名指', 'l': '右手无名指', '.': '右手无名指',
      'p': '右手小指', ';': '右手小指', '/': '右手小指',
      ' ': '右手或左手拇指'
    }
    return fingerMap[char.toLowerCase()] || '未知'
  }

  const handlePreviousLevel = () => {
    const currentIndex = subTypes.findIndex(st => st === subType)
    if (currentIndex > 0) {
      const previousSubType = subTypes[currentIndex - 1]
      router.push(`/practice?type=${encodeURIComponent(type)}&subType=${encodeURIComponent(previousSubType)}`, undefined, { shallow: true }).then(() => {
        generateTargetWord(previousSubType)
      })
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{type} - {subType}</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.fingerInstruction}>
          {targetWord[userInput.length] ? getFingerInstruction(targetWord[userInput.length]) : ''}
        </div>
        <div className={styles.targetWordContainer}>
          请输入：
          {targetWord.split('').map((char, index) => (
            <span
              key={index}
              className={`
                ${styles.targetChar}
                ${char === ' ' ? styles.spaceChar : ''}
                ${index < userInput.length
                  ? userInput[index] === char
                    ? styles.correct
                    : styles.incorrect
                  : index === userInput.length
                    ? styles.current
                    : ''
                }
                ${index === userInput.length ? styles.cursor : ''}
              `}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className={styles.inputField}
          maxLength={targetWord.length}
        />
        <div className={styles.stats}>
          <p>正确: {correctCount}</p>
          <p>错误: {incorrectCount}</p>
          <p>总数: {totalCount}</p>
        </div>

        {renderKeyboard()}
      </main>

      <footer className={styles.footer}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePreviousLevel}
          disabled={subTypes.findIndex(st => st === subType) === 0}
        >
          上一关
        </button>
        <button className={styles.backButton} onClick={handleBackToLearn}>返回</button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNextLevel}
          disabled={subTypes.findIndex(st => st === subType) === subTypes.length - 1}
        >
          下一关
        </button>
      </footer>

      <div ref={dialogRef} className={styles.dialog} style={{ display: 'none' }}>
        <h2>恭喜完成！</h2>
        <p>正确率: {accuracy}%</p>
        <div className={styles.dialogButtons}>
          <button onClick={handleRestart}>重新开始 (R)</button>
          <button onClick={handleNextLevel}>下一关 (Enter)</button>
        </div>
      </div>
    </div>
  )
}

// 定义所有可能的 subTypes
const subTypes = ['FJ', 'DK', 'FJDK', 'SL', 'A;', 'SLA;', 'GH', 'TY', 'GHTY', 'ER', 'UO','ERUO', 'WI', 'QP','WIQP', 'VM', 'XN','VMXN', 'ZB', 'C,','C,ZB', '/.', '空格', '数字行', '符号键','全键盘', 'Python', 'JavaScript', 'Java', 'C++', 'Ruby', 'Go', '初级词汇', '中级词汇', '高级词汇', '专业词汇', '俚语词汇', '唐诗', '宋词', '元曲', '现代诗', '古文']