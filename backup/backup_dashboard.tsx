import '../styles/main.css';
import { PowerIcon, UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { NavLink, Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:flex-row bg-gradient-to-british-racing-green">
      <div className="flex flex-col gap-2 flex-shrink-0 m-2">
        <div className="mb-2 flex flex-col h-20 items-end justify-between rounded-md bg-gradient-to-r from-british-racing-green to-rich-gold p-4 md:h-40">
          <div className="w-32 text-white md:w-40">Team Blockchain Advisors</div>
          <div className="w-32 text-gray-400 md:w-40">Dashboard</div>
        </div>
          <NavLink to="/dashboard/splitparty" className={({isActive}) => "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3" + (isActive ? " bg-green-800 text-gray-50" : " bg-green-900 text-gray-50")}>
            <DocumentDuplicateIcon className="h-5 w-5" />
            <span className="hidden md:block">Split Party</span>
          </NavLink>
          <NavLink to="/dashboard/paywithmetamask" className={({isActive}) => "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3" + (isActive ? " bg-green-800 text-gray-50" : " bg-green-900 text-gray-50")}>
            <DocumentDuplicateIcon className="h-5 w-5" />
            <span className="hidden md:block">Pay with MetaMask</span>
          </NavLink>
          <NavLink to="/dashboard/paywithsigner" className={({isActive}) => "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3" + (isActive ? " bg-green-800 text-gray-50" : " bg-green-900 text-gray-50")}>
            <DocumentDuplicateIcon className="h-5 w-5" />
            <span className="hidden md:block">Pay with Signer</span>
          </NavLink>
          <div className="hidden h-auto w-full grow rounded-md bg-green-900 md:block"></div>
          <Link to="/" className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3 bg-green-900 text-gray-50">
            <DocumentDuplicateIcon className="h-5 w-5" />
            <span className="hidden md:block">Home</span>
          </Link>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-green-900 text-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
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