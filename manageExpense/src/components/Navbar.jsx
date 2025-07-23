import React from 'react';
import fullLogo from '../assets/expanzzpng.png';
import expenzzLogo from '../assets/expenzzLOGO.png';
import expenzzTxt from '../assets/expenzzTXT.png';

const Navbar = () => {
  return (
    <div className='bg-primary w-full flex justify-center sm:justify-between items-center p-1 sm:px-15 sm:py-2'>
      <img src={fullLogo} alt='full' className='w-50 sm:hidden' />
      <div>
        <img src={expenzzLogo} alt='logo' className='w-25 hidden sm:inline-block' />
      </div>
      <div>
        <img src={expenzzTxt} alt='txt' className='w-70 hidden sm:inline-block' />
      </div>
    </div>
  );
};

export default Navbar;
