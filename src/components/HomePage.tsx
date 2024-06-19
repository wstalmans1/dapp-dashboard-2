import { Link } from 'react-router-dom';
import '../styles/main.css';

export default function HomePage() {
    return (
      <div className="min-h-screen flex flex-col justify-center p-5 bg-gradient-to-british-racing-green text-gray-50 items-center">
        <h1 className="text-4xl mb-4">Team Blockchain Advisors</h1>
        <p className="text-lg mb-4">Welcome to your application. To get started, navigate to the dashboard.</p>
        <Link to="/dashboard" className="text-blue-500 hover:underline">Go to Dashboard</Link>
        <div className="flex flex-col list-disc mt-10 ml-20">
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• Mint tokens by building your reputation</p>
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• Sell tokens to clients to pay for services</p>
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• Adhere to the DAO Constitution</p> 
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• Govern the DAO Constitution and its operations</p>
          <p style={{ paddingLeft: '1em', textIndent: '-1em' }} className="pb-3">• Manage your role in the DAO</p>
        </div>
    </div>
    );
  }