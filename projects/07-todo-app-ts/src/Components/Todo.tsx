import { TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({
  id,
  text,
  isCompleted,
  onRemoveTodo,
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={isCompleted}
        onChange={() => {}}
      />
      <label>{text}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id })
        }}
      />
    </div>
  )
}
