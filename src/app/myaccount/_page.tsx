'use client'; // Ensure this is at the top. This directive ensures that the component is treated as a client component in Next.js.

import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState hooks.
import dynamic from 'next/dynamic'; // Importing dynamic from next/dynamic for dynamic imports.
//import { MyAccountRight } from '../components/myAccountRight'; // Importing MyAccountRight component.

const MyAccountLeft = dynamic(() => import('../components/myAccountLeft'), { ssr: false }); // Dynamically import MyAccountLeft component, disabling server-side rendering.
const MyAccountRightComponent = dynamic(() => import('../components/myAccountRight').then(mod => mod.MyAccountRight), { ssr: false }); // Dynamically import MyAccountRight component, disabling server-side rendering.

type Tab = 'accountSettings' | 'help' | 'previousFlights' | 'scheduledFlights' | 'flightNotifications'; // Defining a type for the tab names.

type TabData = {
  accountSettings: string;
  help: string;
  previousFlights: string;
  scheduledFlights: string;
  flightNotifications: string;
}; // Defining a type for the tab data.

const AccountPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>('accountSettings'); // State for tracking the currently selected tab.
  const [loading, setLoading] = useState<boolean>(false); // State for tracking the loading status.
  const [data, setData] = useState<any>({
    accountSettings: 'Account Settings Content',
    help: 'Help Content',
    previousFlights: 'Previous Flights Content',
    scheduledFlights: 'Scheduled Flights Content',
    flightNotifications: 'Flight Notifications Content',
  }); // State for storing the data for each tab.

  //HOW WE ARE GOING TO PULL DATA
  /*const userData = await prisma.user.findUnique({
        where: {
            id: 'admin',
        },
    });*/


  useEffect(() => {
    // Effect to fetch data whenever the selected tab changes.
    const fetchData = async (tab: Tab) => {
      setLoading(true); // Set loading to true while fetching data.
      try {
        let mockData; // Variable to hold mock data.
        switch (tab) {
          case 'accountSettings':
            console.log('ACCOUNT SETTINGS');
            mockData = { name: "John Doe", id: "12345", accountType: "Premium", email: "john.doe@example.com", emergencyContacts: ["Jane Doe"], supervisor: "Supervisor", superEmail: "supervisor@example.com" };
            break;
          case 'help':
            mockData = { howTo: "How to use the app", faq: "Frequently Asked Questions" };
            break;
          case 'previousFlights':
            mockData = { flightNo: "AA123", route: "NYC-LAX", date: "2024-05-25", departedArrival: "10:00AM - 1:00PM", status: "Completed" };
            break;
          case 'scheduledFlights':
            mockData = { flightNo: "AA124", route: "LAX-NYC", date: "2024-06-01", departedArrival: "2:00PM - 5:00PM", status: "Scheduled" };
            break;
          case 'flightNotifications':
            mockData = { notification: "Your flight AA123 is delayed." };
            break;
          default:
            mockData = null;
        }
        setData((prevData: any) => ({
          ...prevData,
          [tab]: mockData,
        })); // Update data state with the fetched data.
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors.
      } finally {
        setLoading(false); // Set loading to false after data fetch is complete.
      }
    };

    fetchData(selectedTab); // Fetch data for the selected tab.
  }, [selectedTab]); // Dependency array ensures this effect runs when selectedTab changes.

  const handleTabChange = (tab: Tab) => {
    console.log('changing tab to:', tab);
    setSelectedTab(tab); // Update the selected tab.
  };

  console.log('current tab:', selectedTab); // Log the current tab for debugging.

  return (
    <div className="flex h-screen pt-20">
      <MyAccountLeft selectedTab={selectedTab} onTabChange={handleTabChange} /> {/* Render MyAccountLeft component with props. */}
      <MyAccountRightComponent selectedTab={selectedTab} data={data[selectedTab]} loading={loading} /> {/* Render MyAccountRightComponent with props. */}
    </div>
  );
};

export default AccountPage; // Export the AccountPage component.
