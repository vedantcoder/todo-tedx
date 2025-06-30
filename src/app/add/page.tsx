'use client'

import { useState } from 'react'
import { useTodoContext } from '@/context/TodoContext'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '@/types/Todo'

export default function AddPage() {
  const { addTodo } = useTodoContext()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      alert('Title is required')
      return
    }

    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
      dueDate: dueDate ? new Date(dueDate) : undefined,
    }

    addTodo(newTodo)
    setTitle('')
    setDescription('')
    setDueDate('')
    alert('TODO added!')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New TODO</h1>

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
            placeholder="e.g. Complete TEDx task"
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
            placeholder="Optional details..."
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

        <button type="submit" className="btn btn-primary w-full">
          Add TODO
        </button>
      </form>
    </div>
  )
}