// import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa"; // For Rupee icon (or use $ for Dollar)
import { useAppContext } from "../context/AppContext";

const AmountInput = () => {
  const {amount, setAmount} = useAppContext()

  const handleChange = (e) => {
    const value = e.target.value;

    // ✅ Allow only numbers (and optional decimal point)
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white text-black border text-2xl px-4 py-2 rounded-lg">
      <FaRupeeSign className="text-black" />
      <input
        type="text"
        placeholder="Enter Amount"
        required
        value={amount}
        onChange={handleChange}
        className="bg-transparent outline-none text-black placeholder-gray-300 w-40 sm:w-60"
      />
    </div>
  );
};

export default AmountInput;
