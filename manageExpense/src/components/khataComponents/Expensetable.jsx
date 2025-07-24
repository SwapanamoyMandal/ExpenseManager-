import React from "react";
import { useAppContext } from "../../context/AppContext";
import { FiClock, FiMinus } from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

const Expensetable = () => {
  const { expensedata } = useAppContext();

  if (!expensedata || expensedata.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg mt-8">
        No expenses found.
      </p>
    );
  }

  // ✅ Group expenses by date
  const groupedExpenses = expensedata.reduce((groups, expense) => {
    const dateKey = new Date(expense.date).toDateString();
    if (!groups[dateKey]) groups[dateKey] = [];
    groups[dateKey].push(expense);
    return groups;
  }, {});
  const dateKeys = Object.keys(groupedExpenses);

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      {dateKeys.map((dateKey, i) => {
        const dayExpenses = groupedExpenses[dateKey];
        const dayTotal = dayExpenses.reduce((sum, exp) => sum + exp.amount, 0);

        return (
          <div
            key={i}
            className="mb-8 rounded-lg shadow-xl bg-white border border-gray-200 overflow-hidden"
          >
            {/* ✅ Date Header */}
            <div className="bg-gradient-to-r from-secondary/80 text-black to-primary/80  px-4 py-3 text-lg md:text-xl font-bold">
              {formatDate(dayExpenses[0].date)}
            </div>

            {/* ✅ Responsive Table */}
            <div className="overflow-x-auto">
              <table className="md:w-xl sm:w-lg w-30 text-gray-800">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-sm md:text-base">
                    <th className="py-3 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <FiClock className="text-purple-500 text-base" />
                        <span>Time</span>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <MdCategory className="text-green-500 text-base" />
                        <span>Category</span>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left">
                      <div className="flex items-center gap-2">
                        <FaRupeeSign className="text-red-500 text-base" />
                        <span>Amount</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dayExpenses.map((exp, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gradient-to-r from-purple-50 to-pink-50 transition-colors duration-300 border-b text-sm font-semibold md:text-base"
                    >
                      <td className="py-3 px-4">{formatTime(exp.date)}</td>
                      <td className="py-3 px-4">{exp.category}</td>
                      <td className="py-3 px-4 font-semibold text-red-600">
                        <div className="flex items-center gap-1">
                          <FiMinus className="text-red-500 text-sm w-3  " />
                           ₹{exp.amount}
                        </div>
                      </td>

                    </tr>
                  ))}

                  {/* ✅ Daily Total */}
                  <tr className="bg-gray-200 font-bold">
                    <td colSpan="2" className="py-3 px-4 text-lg text-right">
                      Total spend:
                    </td>
                    <td className="py-3 px-4 text-red-700">
                      <div className="flex items-center gap-1">
                          <FiMinus className="text-red-500 text-base w-3 " />
                          ₹{dayTotal}
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Expensetable;
