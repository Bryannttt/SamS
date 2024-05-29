'use client'; // Directive to indicate the use of client-side rendering
import React from 'react';

// Define the type for the selected tab
type Tab = 'accountSettings' | 'help' | 'previousFlights' | 'scheduledFlights' | 'flightNotifications';

// Interface for the props of MyAccountLeft component
interface MyAccountLeftProps {
  selectedTab: Tab; // The currently selected tab
  onTabChange: (tab: Tab) => void; // Function to handle tab change
}

// Functional component for rendering the left section of the My Account page
const MyAccountLeft: React.FC<MyAccountLeftProps> = ({ selectedTab, onTabChange }) => {
  return (
    <div className="w-1/4 bg-gray-200 h-screen">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Account</h2>
        <ul>
          {/* List item for Account Settings tab */}
          <li
            className={`cursor-pointer ${
              selectedTab === 'accountSettings' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => onTabChange('accountSettings')}
          >
            Account Settings
          </li>
          {/* List item for Help tab */}
          <li
            className={`cursor-pointer ${
              selectedTab === 'help' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => onTabChange('help')}
          >
            Help
          </li>
          {/* List item for Previous Flights tab */}
          <li
            className={`cursor-pointer ${
              selectedTab === 'previousFlights' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => onTabChange('previousFlights')}
          >
            Previous Flights
          </li>
          {/* List item for Scheduled Flights tab */}
          <li
            className={`cursor-pointer ${
              selectedTab === 'scheduledFlights' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => onTabChange('scheduledFlights')}
          >
            Scheduled Flights
          </li>
          {/* List item for Flight Notifications tab */}
          <li
            className={`cursor-pointer ${
              selectedTab === 'flightNotifications' ? 'text-blue-500 font-bold' : ''
            }`}
            onClick={() => onTabChange('flightNotifications')}
          >
            Flight Notifications
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyAccountLeft; // Export the MyAccountLeft component
