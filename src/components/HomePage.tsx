import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function HomePage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gradient-to-british-racing-green text-gray-50">
        <h1 className="text-4xl mb-4">Team Blockchain Advisors</h1>
        <p className="text-lg mb-4 text-center">Welcome to our application. To get started, navigate to the dashboard.</p>
        <Link to="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link>
    </div>
    );
  }