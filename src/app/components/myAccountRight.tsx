'use client'; // Directive to indicate the use of client-side rendering
import React from 'react';

// Define the type for the selected tab
type Tab = 'accountSettings' | 'help' | 'previousFlights' | 'scheduledFlights' | 'flightNotifications';

// Update the MyAccountRightProps interface to include the loading prop
export interface MyAccountRightProps {
  selectedTab: Tab; // Selected tab to determine which content to display
  data: any; // Data to be displayed, type can be adjusted according to actual data structure
  loading: boolean; // Loading state to indicate if data is being fetched
}

// Functional component for rendering the right section of the My Account page
export const MyAccountRight: React.FC<MyAccountRightProps> = ({ selectedTab, data, loading }) => {
  // Log the selected tab and data for debugging purposes
  console.log('Selected Tab:', selectedTab);
  console.log('Data:', data);

  // Display a loading message if the loading state is true
  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
  }

  return (
    <div className="w-3/4 p-4">
      {/* Render content based on the selected tab */}
      {selectedTab === 'accountSettings' && (
        <div className='mt-10'>
          <h1>Account Settings</h1>
          <p className='mt-10'>Name: {data?.name}</p>
          <p className='mt-10'>ID: {data?.id}</p>
          <p className='mt-10'>Account Type: {data?.accountType}</p>
          <p className='mt-10'>Email: {data?.email}</p>
          <p className='mt-10'>Emergency Contact: {data?.emergencyContacts}</p>
          <p className='mt-10'>Supervisor: {data?.supervisor} Email: {data?.superEmail}</p>
        </div>
      )}
      {selectedTab === 'help' && (
        <div>
          <h1>Help</h1>
          <p className="list-disc;">How-To</p>
        </div>
      )}
      {selectedTab === 'previousFlights' && (
        <div className="flex justify-center min-h-screen bg-blue-950 text-white p-4 rounded-lg">
          <h1>PREVIOUS FLIGHTS</h1>
          <table className="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">Flight No.</th>
                <th className="border border-gray-400 p-2">Route</th>
                <th className="border border-gray-400 p-2">Date</th>
                <th className="border border-gray-400 p-2">Departed/Arrival Time</th>
                <th className="border border-gray-400 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">{data?.flightNo}</td>
                <td className="border border-gray-400 p-2">{data?.route}</td>
                <td className="border border-gray-400 p-2">{data?.date}</td>
                <td className="border border-gray-400 p-2">{data?.departedArrival}</td>
                <td className="border border-gray-400 p-2">{data?.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {selectedTab === 'scheduledFlights' && (
        <div className="flex justify-center min-h-screen bg-blue-950 text-white p-4 rounded-lg">
          <h1>Scheduled Flights</h1>
          <table className="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">Flight No.</th>
                <th className="border border-gray-400 p-2">Route</th>
                <th className="border border-gray-400 p-2">Date</th>
                <th className="border border-gray-400 p-2">Departing</th>
                <th className="border border-gray-400 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">{data?.flightNo}</td>
                <td className="border border-gray-400 p-2">{data?.route}</td>
                <td className="border border-gray-400 p-2">{data?.date}</td>
                <td className="border border-gray-400 p-2">{data?.departedArrival}</td>
                <td className="border border-gray-400 p-2">{data?.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {selectedTab === 'flightNotifications' && (
        <div>
          <h1>Flight Notifications</h1>
          <p>Notification: {data?.notification}</p>
        </div>
      )}
    </div>
  );
};
export default MyAccountRight; // Export the MyAccountRight component
