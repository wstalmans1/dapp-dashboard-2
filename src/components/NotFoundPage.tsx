import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return ( 
    <div className="flex flex-col gap-2 w-screen h-screen bg-slate-800 text-white">
        404 - Not Found
        <Link to="/">Go Home</Link>
    </div>
  );
}