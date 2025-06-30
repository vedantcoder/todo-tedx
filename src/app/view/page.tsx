'use client'

import { useTodoContext } from '@/context/TodoContext'
import { useRouter } from 'next/navigation'

export default function ViewPage() {
  const { todos, deleteTodo } = useTodoContext()
  const router = useRouter()

  const handleEdit = (id: string) => {
    router.push(`/edit?id=${id}`)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your TODOs</h1>

      {todos.length === 0 ? (
        <p className="text-center text-gray-600">No TODOs found. Add some first!</p>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="card bg-white border border-gray-200 shadow-sm text-gray-900"
            >
              <div className="card-body space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="card-title">{todo.title}</h2>
                  {todo.completed && (
                    <span className="badge badge-success badge-outline text-sm">
                      Completed
                    </span>
                  )}
                </div>

                {todo.description && (
                  <p className="text-sm text-gray-700">{todo.description}</p>
                )}

                <div className="text-xs text-gray-500 flex flex-col sm:flex-row sm:gap-4">
                  <span>
                    Created: {new Date(todo.createdAt).toLocaleDateString()}
                  </span>
                  {todo.dueDate && (
                    <span>
                      Due: {new Date(todo.dueDate).toLocaleDateString()}
                    </span>
                  )}
                </div>

                <div className="pt-4 flex justify-end gap-2">
                  <button
                    onClick={() => handleEdit(todo.id)}
                    className="btn btn-sm btn-outline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      const confirmed = confirm('Are you sure you want to delete this TODO?')
                      if (confirmed) {
                        deleteTodo(todo.id)
                      }
                    }}
                    className="btn btn-sm btn-error btn-outline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}