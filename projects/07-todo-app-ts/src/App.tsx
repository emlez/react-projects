import { useState } from "react"
import { Todos } from "./Components/Todos"
import { type TodoId, type Todo as TodoType } from "./types"

const mockTodos = [
  { id: 1, text: "Buy milk", isCompleted: true },
  { id: 2, text: "Buy eggs", isCompleted: false },
  { id: 3, text: "Buy bread", isCompleted: false },
]

const App = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemoveTodo = ({ id }: TodoId) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleCompleteTodo = ({
    id,
    isCompleted,
  }: Pick<TodoType, "id" | "isCompleted">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted }
        }
        return todo
      })
    )
  }

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onToggleTodo={handleCompleteTodo}
        onRemoveTodo={handleRemoveTodo}
      />
    </div>
  )
}

export default App
