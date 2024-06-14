import '../styles/main.css';
import { PowerIcon } from '@heroicons/react/24/outline';
import { NavLink, Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col p-5 md:flex-row bg-gradient-to-british-racing-green">
      <div className="flex flex-col gap-2 flex-shrink-0">
        <Link className="mb-2 flex flex-col h-20 items-end justify-between rounded-md bg-gradient-to-r from-british-racing-green to-rich-gold p-4 md:h-40" to="/">
          <div className="w-32 text-white md:w-40">Team Blockchain Advisors</div>
          <div className="w-32 text-gray-400 md:w-40">Dashboard</div>
        </Link>
        <NavLink to="/dashboard/splitparty" className={({isActive}) => "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3" + (isActive ? " bg-green-800 text-gray-50" : " bg-green-900 text-gray-50")}>
          Split Party
        </NavLink>
        <NavLink to="/dashboard/paywithmetamask" className={({isActive}) => "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3" + (isActive ? " bg-green-800 text-gray-50" : " bg-green-900 text-gray-50")}>
          Pay with MetaMask
        </NavLink>
        <NavLink to="/dashboard/paywithsigner" className={({isActive}) => "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3" + (isActive ? " bg-green-800 text-gray-50" : " bg-green-900 text-gray-50")}>
          Pay with Signer
        </NavLink>
        <div className="hidden h-auto w-full grow rounded-md bg-green-900 md:block"></div>
        <Link to="/" className="flex h-[48px] items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-800 hover:text-gray-50 md:flex-none md:justify-start md:p-2 md:px-3 bg-green-900 text-gray-50">
          Home
        </Link>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-green-900 text-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}