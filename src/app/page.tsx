'use client'

import { useRouter } from 'next/navigation'
import { PlusCircle, ListTodo } from 'lucide-react'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">TaskBoard</h1>
      <p className="text-gray-600 mb-10">
        A minimal TODO manager built for the TEDx BITS Hyderabad Tech Team task.
        Organize, track, and edit your tasks with ease.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          onClick={() => router.push('/add')}
          className="cursor-pointer p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition flex flex-col items-center justify-center hover:bg-gray-50"
        >
          <PlusCircle className="w-10 h-10 text-red-600 mb-2" />
          <h2 className="text-xl font-semibold text-gray-800">Add Task</h2>
          <p className="text-sm text-gray-500 mt-1">Create a new TODO item</p>
        </div>

        <div
          onClick={() => router.push('/view')}
          className="cursor-pointer p-6 rounded-xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition flex flex-col items-center justify-center hover:bg-gray-50"
        >
          <ListTodo className="w-10 h-10 text-red-600 mb-2" />
          <h2 className="text-xl font-semibold text-gray-800">View Tasks</h2>
          <p className="text-sm text-gray-500 mt-1">See all your tasks</p>
        </div>
      </div>
    </div>
  )
}