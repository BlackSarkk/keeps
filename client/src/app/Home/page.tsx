import { Logo } from '@/components/icons/logo'
import React from 'react'

const Homepage = () => {
  return (
    <div className='w-screen border-2 border-white h-screen flex flex-col justify-center items-center bg-[#16161A]'>
      <Logo theme='dark' size='xs' />
      <Logo theme='dark' size='sm' />
      <Logo theme='dark' size='md' />
      <Logo theme='dark' size='lg' />
      <Logo theme='dark' size='xl' />
    </div>
  )
}

export default Homepage
