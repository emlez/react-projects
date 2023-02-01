import './App.css'
import { useState, useEffect } from 'react'

const CURSORS = {
  1: 'dog',
  2: 'cactus',
  3: 'egg',
  4: 'planet',
  5: 'paint',
  6: 'tv'
}

function App () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
      // Add random class to body, to change the cursor, choose a random class from the CURSORS object
      document.body.classList.add(CURSORS[Math.floor(Math.random() * 6) + 1])
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
      // Remove the random class from the body
      document.body.classList.remove(
        'dog',
        'cactus',
        'egg',
        'planet',
        'paint',
        'tv'
      )
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
      <h3>Click on the button and move your mouse around!</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} mouse follower
      </button>
    </main>
  )
}

export default App
