// components/Calendar.tsx

'use client';
// Importing necessary modules from React library
import React, { useState } from 'react';

// Define the Calendar component as a functional component
const Calendar: React.FC = () => {
  // Get the current date
  const today = new Date();

  // Initialize state variables for current year and month using the useState hook
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  // Array containing the names of months
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Function to calculate the number of days in a given month and year
  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the starting day of the week for the given month and year
  const getStartDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  // Event handler for navigating to the previous year
  const handlePreviousYear = () => {
    setCurrentYear(currentYear - 1);
  };

  // Event handler for navigating to the next year
  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  // Event handler for navigating to the previous month
  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      // If current month is January, set the month to December and decrease the year
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      // Otherwise, decrease the current month by 1
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Event handler for navigating to the next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      // If current month is December, set the month to January and increase the year
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      // Otherwise, increase the current month by 1
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Calculate the number of days and the starting day of the current month
  const numberOfDays = daysInMonth(currentYear, currentMonth);
  const startDay = getStartDayOfWeek(currentYear, currentMonth);

  // JSX rendering of the Calendar component
  return (
    <div className="bg-gray-100 p-4 rounded">
      <div className="flex justify-between mb-2">
        {/* Button for navigating to the previous year */}
        <button onClick={handlePreviousYear} className="px-2 py-1 bg-gray-300 rounded">Previous Year</button>
        <div className="flex items-center gap-2">
          {/* Button for navigating to the previous month */}
          <button onClick={handlePreviousMonth} className="px-2 py-1 bg-gray-300 rounded">Previous Month</button>
          {/* Display current month and year */}
          <span>{months[currentMonth]} {currentYear}</span>
          {/* Button for navigating to the next month */}
          <button onClick={handleNextMonth} className="px-2 py-1 bg-gray-300 rounded">Next Month</button>
        </div>
        {/* Button for navigating to the next year */}
        <button onClick={handleNextYear} className="px-2 py-1 bg-gray-300 rounded">Next Year</button>
      </div>
      {/* Grid for displaying the days of the week */}
      <div className="grid grid-cols-7 gap-2 text-center">
        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        {/* Generate empty cells for the days before the start of the month */}
        {[...Array(startDay)].map((_, i) => (
          <div key={`empty-${i}`} className="p-2"></div>
        ))}
        {/* Generate day cells for the current month */}
        {[...Array(numberOfDays)].map((_, i) => (
          <div key={i} className="p-2 bg-white rounded">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Calendar component as the default export
export default Calendar;
