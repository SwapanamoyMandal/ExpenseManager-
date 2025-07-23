import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { api } from "../Api/api"

const NavButton = () => {
  const { setExpense, setIsLoading, setExpensedata, clerkUserId } = useAppContext();
  const [active, setActive] = useState('expense'); // default active

  const handleClick = async (menu) => {
    setActive(menu);
    setExpense(menu === 'expense');
  };

  const reqHandel = async() => {
    setIsLoading(true)

    const res = await api.post('/retrive', { clerkUserId: clerkUserId })
    setExpensedata(res.data.result)
    setIsLoading(false)
  }


  return (
    <div className="sm:px-15 px-10 md:px-20 py-5 sm:py-7 md:py-10 w-full relative z-50">
      <div className="flex justify-between items-center">
        {/* Expense */}
        <div
          onClick={() => handleClick('expense')}
          className="cursor-pointer relative"
        >
          <h1
            className={`md:text-4xl sm:text-3xl text-2xl font-semibold font-serif text-white`}
          >
            <span className='text-red-500'>E</span>xpense
          </h1>
          <span
            className={`absolute left-0 -bottom-1 h-[3px] bg-primary rounded transition-transform duration-300 origin-left ${active === 'expense' ? 'scale-x-100' : 'scale-x-0'
              }`}
            style={{ width: '100%' }}
          />
        </div>

        {/* Khata */}
        <div
          onClick={() =>{ handleClick('khata'), reqHandel()}}
          className="cursor-pointer relative"
        >
          <h1
            className={`md:text-4xl sm:text-3xl text-2xl font-semibold font-serif text-white `}
          >
            <span className='text-[#BFA33E]'>K</span>hata
          </h1>
          <span
            className={`absolute left-0 -bottom-1 h-[3px] bg-primary rounded transition-transform duration-300 origin-left ${active === 'khata' ? 'scale-x-100' : 'scale-x-0'
              }`}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavButton;
