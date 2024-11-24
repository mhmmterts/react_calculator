import React from 'react'
import Calculator from './components/calculator'

const App = () => {
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Calculator</h1>
      <Calculator />
    </div>
  )
}
const styles = {
  app: {
    background: 'linear-gradient(145deg, #2a2a2a, #525252)', // Siyah-gri gradyan
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold'
  }
}

export default App
