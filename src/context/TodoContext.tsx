'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Todo } from '@/types/Todo'

type TodoContextType = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  editTodo: (updated: Todo) => void
  deleteTodo: (id: string) => void
}

const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])

  // Load from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem('todos')
    if (stored) {
      setTodos(JSON.parse(stored))
    }
  }, [])

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo])
  }

  const editTodo = (updated: Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updated.id ? updated : todo))
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context
}