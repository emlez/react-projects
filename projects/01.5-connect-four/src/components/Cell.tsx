export const Cell = ({ children, isSelected, updateBoard, index }) => {
  const yourTurn = `square ${isSelected ? "is-selected" : ""}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <button onClick={handleClick} className={yourTurn}>
      {children}
    </button>
  )
}
