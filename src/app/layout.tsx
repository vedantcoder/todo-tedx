import './globals.css'
import { Inter } from 'next/font/google'
import { TodoProvider } from '@/context/TodoContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TODO App',
  description: 'TEDx BITS Hyderabad Tech Team Round-1 Task',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  )
}