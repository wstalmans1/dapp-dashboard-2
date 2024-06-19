import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function HomePage() {
    return (
      <div className="min-h-screen flex flex-col justify-center p-5 bg-gradient-to-british-racing-green text-gray-50 items-center">
        <h1 className="text-4xl mb-4">Team Blockchain Advisors</h1>
        <p className="text-lg mb-4">Welcome to your application. To get started, navigate to the dashboard.</p>
        <Link to="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link>
        <div className="flex flex-col list-disc mt-10 ml-20">
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• You mint tokens by building your reputation</p>
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• Tokens are needed by clients to pay for services proposed by the TBA DAO</p>
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• You adhere to the DAO Constitution, by participating. You can change the Constitution</p>
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• You can change the DAO Constitution by particpating in the DAO Governance</p>
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• You manage your role in the DAO by participating in the DAO Governance</p>
        </div>
    </div>
    );
  }