import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-primary w-full flex justify-center sm:justify-between items-center p-1 sm:px-15 sm:py-2 '>
            <img src='src\assets\expanzzpng.png' alt='full' className='w-50 sm:hidden'/>
            <div>
                <img src="src\assets\expenzzLOGO.png" alt="logo" className='w-25 hidden sm:inline-block' />
            </div>
            <div>
                <img src='src/assets/expenzzTXT.png' alt='txt' className='w-70 hidden sm:inline-block' />
            </div>
    </div>
  )
}

export default Navbar