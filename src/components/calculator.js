import React, { useState, useEffect } from 'react'

const Calculator = () => {
  const [display, setDisplay] = useState('') // Ekranda gösterilen değer

  // Tuş takımındaki geçerli tuşlar
  const validKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '-',
    '*',
    '/',
    '.',
    '(',
    ')',
    'Enter',
    'Backspace',
    'C'
  ]

  // Buton click işlemi
  const handleButtonClick = value => {
    if (value === 'C' || value === 'Backspace') {
      // Temizle veya silme
      setDisplay(display.slice(0, -1))
    } else if (value === '=' || value === 'Enter') {
      // Hesaplama
      try {
        const result = eval(display) // eval güvenli girdilerle kullanılmalıdır
        setDisplay(result.toString())
      } catch (error) {
        setDisplay('Hata')
      }
    } else {
      // Diğer girdiler
      setDisplay(display + value)
    }
  }

  // Klavye girişlerini dinle
  useEffect(() => {
    const handleKeyPress = event => {
      const { key } = event
      if (validKeys.includes(key)) {
        if (key === 'Enter') {
          handleButtonClick('=')
        } else if (key === 'Backspace') {
          handleButtonClick('C')
        } else {
          handleButtonClick(key)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress) // Temizlik işlemi
    }
  }, [display])

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
    '(',
    ')',
    'C'
  ]

  return (
    <div style={styles.container}>
      <div style={styles.display}>{display || '0'}</div>
      <div style={styles.buttons}>
        {buttons.map(button => (
          <button
            key={button}
            style={styles.button}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: '300px',
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #444',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#3b3b3b', // Container için arka plan
    color: 'white'
  },
  display: {
    width: '92%',
    height: '50px',
    backgroundColor: '#4a4a4a', // Display için arka plan
    textAlign: 'right',
    padding: '10px',
    fontSize: '20px',
    border: '1px solid #555',
    borderRadius: '5px',
    marginBottom: '20px',
    overflow: 'hidden',
    color: 'white'
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px'
  },
  button: {
    padding: '15px',
    fontSize: '18px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#5c5c5c', // Butonlar için arka plan
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s'
  },
  buttonHover: {
    backgroundColor: '#6d6d6d' // Hover efekti
  }
}

export default Calculator
