import './App.css'
import { useState, useEffect } from 'react'

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('useEffect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      // console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          border: '1px solid #fff',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h3>3rd Project</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} mouse follower
      </button>
    </main>
  )
}

export default App
