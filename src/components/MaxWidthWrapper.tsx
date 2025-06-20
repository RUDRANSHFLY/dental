import React, { PropsWithChildren } from 'react'


const MaxWidthWrapper = ({children} : PropsWithChildren) => {
  return (
    <div className='max-w-7xl mx-auto'>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
