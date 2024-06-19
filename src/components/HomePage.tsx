import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function HomePage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gradient-to-british-racing-green text-gray-50 text-center">
        <h1 className="text-4xl mb-4">Team Blockchain Advisors</h1>
        <p className="text-lg mb-4 text-center">Welcome to your application. To get started, navigate to the dashboard.</p>
        <Link to="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link>
        <ul className="flex flex-col list-disc mt-10 ml-20 items-center">
          <li>You mint tokens by building your reputation. Tokens are needed by clients to pay for services proposed by the TBA DAO.</li>
          <li>You adhere to the DAO Constitution, by participating. You can change the Constitution</li>
          <li>You can change the DAO Constitution by particpating in the DAO Governance</li>
          <li>You manage your role in the DAO by participating in the DAO Governance</li>
        </ul>
    </div>
    );
  }