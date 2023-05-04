export interface Todo {
  id: number
  text: string
  isCompleted: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoText = Pick<Todo, 'text'>
export type TodoIsCompleted = Pick<Todo, 'isCompleted'>

export type ListOfTodos = Todo[]
