import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Header = () => {
  return (
   <header className='max-w-7xl sticky flex  justify-between items-center text-blue-500 mt-2 h-15 bg-blue-100 mx-auto rounded-md'>
        <div>
            <Image className='cursor-pointer' src={'/images/logo.svg'} alt='logo' width={200} height={200} />
        </div>
        <div className='flex items-center gap-x-5'>
            <p className='text-xl font-bold'>
                (610) 649-0313
            </p>
            <Button className="cursor-pointer bg-blue-900 hover:text-blue-950">
                Online Scheduling
            </Button>
        </div>
        <div>
            <div>
                    
            </div>
        </div>
   </header>
  )
}

export default Header
