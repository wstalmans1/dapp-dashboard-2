import '../styles/main.css';
import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {

  //const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-10 p-4 w-screen h-screen bg-slate-600 text-white">
      <div className="flex flex-col gap-2">
        <NavLink to="/dashboard/splitparty" className={({isActive}) => {return isActive ? "text-orange-700" : ""}}>
          Split Party
        </NavLink>
        <NavLink to="/dashboard/paywithmetamask" className={({isActive}) => {return isActive ? "text-orange-700" : ""}}>
          Pay with Metamask
        </NavLink>
        <NavLink to="/dashboard/paywithsigner" className={({isActive}) => {return isActive ? "text-orange-700" : ""}}>
          Pay with Signer
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}