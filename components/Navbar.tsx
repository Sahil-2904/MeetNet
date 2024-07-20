import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image 
          src="/icons/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className='max-sm:size-10 rounded-lg mix-blend-screen'
         />
         <p className='text-xl font-extrabold text-white max-sm:hidden'>MeetNet</p>
      </Link>
      <div className='flex-between gap-5'>
        {/* Clerk User management */}
        {/* Appwrite auth */}
        <SignedIn>
          <UserButton/>
        </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar