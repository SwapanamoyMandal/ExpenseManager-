import React, { useState, useRef, useEffect } from "react";
import { RiDropdownList } from "react-icons/ri";
import { useAppContext } from "../context/AppContext";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {selected, setSelected} = useAppContext()
  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false); // close menu after selection
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary/90 w-60 sm:w-fit text-white text-2xl px-4 py-2 rounded-lg hover:bg-primary transition flex items-center justify-between gap-2"
      >
        {selected} <RiDropdownList className="text-red-500" />
      </button>

      {/* Dropdown Items */}
      <div
        className={`absolute mt-2 w-58 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transform transition-all duration-300 origin-top ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-lg sm:text-xl md:text-xl">
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Food & Beverages")}
          >
            Food & Beverages 🍔
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Travel")}
          >
            Travel 🚌
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Fitness & Health")}
            >
            Fitness & Health 💪
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Fashion & Cloths")}
          >
            Fashion & Cloths 🛍️
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Tech & Gadgets")}
          >
            Tech & Gadgets 💻
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Subscriptions")}
          >
            Subscriptions 🗓️
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect("Other")}
          >
            Other 🤌
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
