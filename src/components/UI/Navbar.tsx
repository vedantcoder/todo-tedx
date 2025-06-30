'use client'

import Link from 'next/link'
import Image from 'next/image'
import tedxLogo from '@/components/Icons/logo.png'
import { Plus, ListTodo} from 'lucide-react'


export default function Navbar() {
  return (
    <nav className="bg-[#e10600] text-white px-6 py-3 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left - Logo and Title */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={tedxLogo}
            alt="TEDx BITS"
            className="h-10 w-auto"
            width={40}
            height={40}
          />
          <span className="text-2xl font-bold tracking-wide">TaskBoard</span>
        </Link>

        {/* Right - Navigation Links */}
        <div className="flex gap-3">
        <Link href="/add" className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-[#e10600]">
          <Plus className="w-4 h-4 mr-1" /> Add
        </Link>
        <Link href="/view" className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-[#e10600]">
          <ListTodo className="w-4 h-4 mr-1" /> View
        </Link>
      </div>
      </div>
    </nav>
  )
}