import { WINNING_COMBINATIONS } from '../constants/constants'

export const checkWinner = (boardToCheck) => {
  // Check if there is a winner
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // If there is no winner,
  return null
}

export const checkEndGame = (boardToCheck) => {
  // Check if there is a tie
  return boardToCheck.every((square) => square !== null)
}