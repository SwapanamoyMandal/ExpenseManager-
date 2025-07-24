import React from 'react';
import { useAppContext } from '../context/AppContext';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaRupeeSign } from 'react-icons/fa';
import { HiOutlineCalendar } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';

const AcknowlageBox = () => {
  const {setOpenacknowlagebox, savedata} = useAppContext();
  
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      });
    };
  
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:w-[90%] w-[80%] max-w-md text-center">
        {/* Icon */}
        {savedata ? <div className="flex justify-center mb-4">
          <AiOutlineCheckCircle className="text-green-500 text-6xl" />
        </div> : <div className="flex justify-center mb-4">
          <AiOutlineCloseCircle className="text-red-500 text-6xl" />
        </div>}

        {/* Success Message */}
        { savedata ? <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Expense Recorded Successfully!
        </h1> : <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Expense Recorded failed!
        </h1>}

        {/* Details */}
        <div className="bg-gray-100 rounded-xl p-4 text-left mb-4 space-y-2">
          <h2 className="flex items-center text-gray-700 text-lg sm:text-xl font-medium">
            <FaRupeeSign className="mr-2 text-green-600" /> 
            Amount: <span className="ml-1 font-semibold">{savedata.amount}</span>
          </h2>
          <h2 className="flex items-center text-gray-700 text-lg sm:text-xl font-medium">
            <BiCategoryAlt className="mr-2 text-blue-500" /> 
            Category: <span className="ml-1 font-medium">{savedata.category}</span>
          </h2>

          <h2 className="flex items-center text-gray-700 text-base sm:text-lg font-medium">
            <IoMdTime className="mr-2 text-orange-500" /> 
            Time: <span className="ml-1">{formatTime(savedata.date)}</span>
          </h2>
        </div>

        {/* Button */}
        <button
          onClick={() => setOpenacknowlagebox(false)}
          className="w-full bg-primary/90 text-white font-semibold py-3 rounded-xl hover:bg-primary transition-all"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default AcknowlageBox;
