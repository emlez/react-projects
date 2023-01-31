import { useState, useEffect } from "react"
import confetti from "canvas-confetti"

import reactLogo from "./assets/react.svg"
import "./App.css"

import { TURNS } from "./constants/constants"
import { checkWinner, checkDraw } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem("board")
    return savedBoard ? JSON.parse(savedBoard) : Array(16).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem("turn")
    return savedTurn ? savedTurn : TURNS.red
  })
  const [winner, setWinner]: any = useState(null)

  const updateBoard = (index: number) => {
    const newBoard = [...board]
    // Check if the cell is already filled
    if (newBoard[index]) {
      return
    }
    // Check if the cell is in the bottom row or the cell below is filled
    if (index > 11 || newBoard[index + 4]) {
      newBoard[index] = turn
      setBoard(newBoard)
      setTurn(turn === TURNS.red ? TURNS.yellow : TURNS.red)
      const newWinner = checkWinner(newBoard)
      if (newWinner) {
        confetti()
        setWinner(newWinner)
      } else if (checkDraw(newBoard)) {
        setWinner(false)
      }
      return
    } else if (!newBoard[index + 4]) {
      // If the cell below is not filled, fill the cell below
      updateBoard(index + 4)
    } else {
      return
    }
  }

  const resetGame = () => {
    setBoard(Array(16).fill(null))
    setTurn(TURNS.red)
    setWinner(null)
  }

  useEffect(() => {
    window.localStorage.setItem("board", JSON.stringify(board))
    window.localStorage.setItem("turn", turn)
  }, [board, turn])

  return (
    <>
      <header className="header">
        <img src={reactLogo} className="logo" alt="logo" />
        <h1>Connect Four</h1>
      </header>
      <main className="board">
        <section className="game">
          {board.map((cell: string | number | boolean, index: number) => {
            return (
              <div
                key={index}
                className={`cell ${cell}`}
                onClick={() => updateBoard(index)}
              >
                {cell}
              </div>
            )
          })}
        </section>
        <section className="turn">
          <div className={turn === TURNS.red ? "your-turn turns" : "turns"}>
            {TURNS.red}
          </div>
          <div className={turn === TURNS.yellow ? "your-turn turns" : "turns"}>
            {TURNS.yellow}
          </div>
        </section>
        <section className="controls">
          <button className="button" onClick={resetGame}>
            Reset
          </button>

          <WinnerModal winner={winner} resetGame={resetGame} />
        </section>
      </main>
    </>
  )
}

export default App
