import '../styles/main.css';
import { NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {

  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-10 p-4 w-screen h-screen bg-slate-600 text-white">
      <div className="flex flex-col gap-2">
        {profiles.map((profile) => (
          <NavLink key={profile} to={`/profiles/${profile}`} className={({isActive}) => {return isActive ? "text-orange-700" : ""}}>
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}