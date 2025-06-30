'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTodoContext } from '@/context/TodoContext'
import { Todo } from '@/types/Todo'

export default function EditPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { todos, editTodo, deleteTodo } = useTodoContext()

  const todoId = searchParams.get('id')
  const [todo, setTodo] = useState<Todo | null>(null)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  useEffect(() => {
    if (todoId) {
      const found = todos.find((t) => t.id === todoId)
      if (found) {
        setTodo(found)
        setTitle(found.title)
        setDescription(found.description || '')
        setDueDate(
          found.dueDate
            ? new Date(found.dueDate).toISOString().split('T')[0]
            : ''
        )
      }
    }
  }, [todoId, todos])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!todo) return

    const updatedTodo: Todo = {
      ...todo,
      title,
      description,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    }

    editTodo(updatedTodo)
    alert('TODO updated!')
    router.push('/view')
  }

  const handleDelete = () => {
    if (!todo) return
    const confirmed = confirm('Are you sure you want to delete this TODO?')
    if (confirmed) {
      deleteTodo(todo.id)
      router.push('/view')
    }
  }

  if (!todo) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center text-gray-600">
        <p>TODO not found.</p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="relative">
        <h1 className="text-3xl font-bold mb-6 text-center">Edit TODO</h1>

        {/* Delete Button Top Right */}
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-error btn-outline absolute top-0 right-0"
        >
          Delete
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-6 rounded-xl border border-gray-200 bg-white shadow-md"
      >
        <div>
          <label className="label">
            <span className="label-text text-base text-gray-800">Title *</span>
          </label>
          <input
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base text-gray-800">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base text-gray-800">Due Date</span>
          </label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div className="pt-2">
          <button type="submit" className="btn btn-primary w-full">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}