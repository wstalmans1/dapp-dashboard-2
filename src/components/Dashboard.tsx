import '../styles/main.css';
import { PowerIcon, UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { NavLink, Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40 keychainify-checked">
            <div className="w-32 text-white md:w-40">Team Blockchain Advisors</div>
            <div className="w-32 text-gray-400 md:w-40">Dashboard</div>
          </div>
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              <NavLink to="/dashboard/splitparty" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 bg-sky-100 text-blue-600 keychainify-checked">
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="hidden md:block">Split Party</span>
              </NavLink>
              <NavLink to="/dashboard/paywithmetamask" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 bg-sky-100 text-blue-600 keychainify-checked">
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="hidden md:block">Pay with MetaMask</span>
              </NavLink>
              <NavLink to="/dashboard/paywithsigner" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 bg-sky-100 text-blue-600 keychainify-checked">
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="hidden md:block">Pay with Signer</span>
              </NavLink>
              <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
              <Link to="/" className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 bg-sky-100 text-blue-600 keychainify-checked">
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="hidden md:block">Home</span>
              </Link>
              <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Sign Out</div>
              </button>
            </div>
        </div>
      </div>
      <div className='flex-grow flex flex-col flex-shrink-0 m-2'>
        <div className="flex items-center justify-center mb-1 bg-white bg-opacity-5 w-full rounded-lg p-2">
          <div className="mb-2">Connection Status: {/* Add connection status here */}</div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Connect to MetaMask</button>
        </div>
        <div className="flex-grow bg-white bg-opacity-5 w-full rounded-lg mt-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}