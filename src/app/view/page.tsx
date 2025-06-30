'use client'

import { useTodoContext } from '@/context/TodoContext'
import TaskCard from '@/components/UI/TaskCard'

export default function ViewPage() {
  const { todos } = useTodoContext()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your TODOs</h1>

      {todos.length === 0 ? (
        <p className="text-center text-gray-600">No TODOs found. Add some first!</p>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <TaskCard key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  )
}
