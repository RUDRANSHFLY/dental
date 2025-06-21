import React from 'react'
import {
    ChevronDown
} from "lucide-react"
import {DropdownMenu , DropdownMenuTrigger , DropdownMenuContent , DropdownMenuItem} from "./ui/dropdown-menu"
import Link from 'next/link';

interface NavDropDownProps {
    title : string;
    items : string[];
}

const NavDropDown = ({items,title} : NavDropDownProps) => {
  return (
   <DropdownMenu>
    <DropdownMenuTrigger className='flex items-center gap-1 font-medium text-sm'>
        {title}
        <ChevronDown className='h-4 w-4' />
    </DropdownMenuTrigger>
    <DropdownMenuContent>
        {items.map((item,index) => (
            <DropdownMenuItem key={index}>
                <Link href={'/'} className='text-[#004681] hover:text-[#028FCA]'>
                {item}
                </Link>
            </DropdownMenuItem>
        ))}
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default NavDropDown