type WinnerModalProps = {
  winner: string | null
  resetGame: () => void
}

export function WinnerModal({ winner: winner, resetGame }: WinnerModalProps) {
  if (winner === null) return null

  const winnerText = winner !== "" ? "The winner is:" : "It's a tie!"

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner ?? <div>{winner}</div>}</header>

        <footer>
          <button onClick={resetGame}>Play again</button>
        </footer>
      </div>
    </section>
  )
}
