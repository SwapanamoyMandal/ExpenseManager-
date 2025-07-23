import React from 'react'
import DropdownMenu from '../components/TypeDrop'
import AmountInput from '../components/AmountInput'
import SpendButton from '../components/Sepnd'

const Expense = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-10 sm:mt-4 mt-10 '>
        <h1 className='font-semibold text-4xl md:text-5xl text-white'>Add Expenses</h1>
        <div className='flex sm:flex-row flex-col  gap-4 '>
            <DropdownMenu />
            <AmountInput />
        </div>
        <SpendButton />
    </div>
  )
}

export default Expense