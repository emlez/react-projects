import './App.css'
import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants/constants'
import { checkEndGame, checkWinner } from './logic/board'

function App () {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // If there is already a value in the square, return
    if (board[index] || winner) return
    // Update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Save current board to local storage
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // Check if there is a winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    // Set values to initial state
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    // Remove values from local storage
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  // TODO: Implement useEffect to save the board and turn to local storage.
  useEffect(() => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
  }, [board, turn])

  // TODO: Create a Connect 4 game using the same logic as Tic Tac Toe.
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <button onClick={resetGame}>Reset game</button>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
