import { WINNING_COMBINATIONS } from "../constants/constants"

export const checkWinner = (board: string[]) => {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c, d] = combination
    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d]
    ) {
      return board[a]
    }
  }
  return null
}

export const checkDraw = (board: string[]) => {
  return board.every((cell) => cell !== null)
}
