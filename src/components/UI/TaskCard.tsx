'use client'

import { Todo } from '@/types/Todo'
import { useRouter } from 'next/navigation'
import { useTodoContext } from '@/context/TodoContext'
import { PencilLine, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function TaskCard({ todo }: { todo: Todo }) {
  const router = useRouter()
  const { deleteTodo } = useTodoContext()

  const handleEdit = () => {
    router.push(`/edit?id=${todo.id}`)
  }

  const handleDelete = () => {
    const confirmed = confirm('Are you sure you want to delete this TODO?')
    if (confirmed) {
      deleteTodo(todo.id)
      toast.success('Task deleted successfully!')
    } else {
      toast('❌ Deletion cancelled')
    }
  }

  return (
    <div className="card bg-white border border-gray-200 shadow-sm text-gray-900">
      <div className="card-body space-y-2">
        {/* Title + Completed Badge */}
        <div className="flex items-center justify-between">
          <h2 className="card-title">{todo.title}</h2>
          {todo.completed && (
            <span className="badge badge-success badge-outline text-sm">
              Completed
            </span>
          )}
        </div>

        {/* Description */}
        {todo.description && (
          <p className="text-sm text-gray-700">{todo.description}</p>
        )}

        {/* Meta Info */}
        <div className="text-xs text-gray-500 flex flex-col sm:flex-row sm:gap-4">
          <span>Created: {new Date(todo.createdAt).toLocaleDateString()}</span>
          {todo.dueDate && (
            <span>Due: {new Date(todo.dueDate).toLocaleDateString()}</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex justify-end gap-2">
          <button
            onClick={handleEdit}
            className="btn btn-sm btn-outline flex items-center gap-1"
          >
            <PencilLine className="w-4 h-4" />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-sm btn-error btn-outline flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}