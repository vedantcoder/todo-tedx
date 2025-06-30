import './globals.css'
import { Inter } from 'next/font/google'
import { TodoProvider } from '@/context/TodoContext'
import Navbar from '@/components/UI/Navbar'
import Footer from '@/components/UI/Footer'

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
    <html lang="en" data-theme="light">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <TodoProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </TodoProvider>
      </body>
    </html>
  )
}