import { type Todo as TodoType, type TodoId, type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
  todos: ListOfTodos
  onToggleTodo: ({
    id,
    isCompleted,
  }: Pick<TodoType, "id" | "isCompleted">) => void
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.isCompleted ? "completed" : ""}>
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  )
}
