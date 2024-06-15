import '../styles/main.css';
import { PowerIcon, UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gradient-to-r from-british-racing-green to-lighterbritish-racing-green text-gray-50">
      <div className="w-full flex-none md:w-64">
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          <div className="mb-2 flex flex-col justify-between h-20 md:h-40 items-stretch rounded-md bg-gradient-to-r from-british-racing-green to-rich-gold" >
            <div className="w-full flex flex-col items-start text-xs sm:text-base md:text-lg lg:text-2xl p-2">
              <div className="block sm:hidden text-lg">Team Blockchain Advisors</div>
              <div className="hidden sm:block">Team</div>
              <div className="hidden sm:block">Blockchain</div>
              <div className="hidden sm:block">Advisors</div>
            </div>
            <div className="p-2 w-full flex items-end justify-end text-blue-700 text-sm sm:text-base md:text-xl lg:text-xl">
              <span className="block sm:hidden">Dashboard</span>
              <span className="hidden sm:block">Dashboard</span>
            </div>
          </div>
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
              <NavLink to="/dashboard/splitparty" className={({ isActive }) => `flex h-[48px] grow items-center justify-center gap-2 rounded-md text-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${ isActive ? 'bg-green-600' : 'bg-green-800 hover:bg-green-600'}`}>
                <UserGroupIcon className="h-5 w-5" />
                <span className="hidden md:block">Split Party</span>
              </NavLink>
              <NavLink to="/dashboard/paywithmetamask" className={({ isActive }) => `flex h-[48px] grow items-center justify-center gap-2 rounded-md text-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${ isActive ? 'bg-green-600' : 'bg-green-800 hover:bg-green-600'}`}>
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="hidden md:block">Pay with MetaMask</span>
              </NavLink>
              <NavLink to="/dashboard/paywithsigner" className={({ isActive }) => `flex h-[48px] grow items-center justify-center gap-2 rounded-md text-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${ isActive ? 'bg-green-600' : 'bg-green-800 hover:bg-green-600'}`}>
                <DocumentDuplicateIcon className="h-5 w-5" />
                <span className="hidden md:block">Pay with Signer</span>
              </NavLink>
              <div className="hidden h-auto w-full grow rounded-md bg-green-900 md:block"></div>
              <NavLink to="/" className={({ isActive }) => `flex h-[48px] grow items-center justify-center gap-2 rounded-md text-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${ isActive ? 'bg-green-600' : 'bg-green-800 hover:bg-green-600'}`}>
                <HomeIcon className="h-5 w-5" />
                <span className="hidden md:block">Home</span>
              </NavLink>
              <NavLink to="/dashboard/connection" className={({ isActive }) => `flex h-[48px] grow items-center justify-center gap-2 rounded-md text-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${ isActive ? 'bg-green-600' : 'bg-green-800 hover:bg-green-600'}`}>
                <PowerIcon className="h-5 w-5" />
                <span className="hidden md:block">connection</span>
              </NavLink>
            </div>
        </div>
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
        <main>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
            {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
            {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
            {/* <Card title="Total Customers" value={numberOfCustomers} type="customers" /> */}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            {/* <RevenueChart revenue={revenue}  /> */}
            {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
          </div>
          
          <div className="flex-grow bg-white bg-opacity-5 w-full rounded-lg mt-1">
            <Outlet />
          </div>
        </main>  
      </div>
    </div>
  );
}