import { useParams } from 'react-router-dom';
import '../styles/main.css';

export default function ProfilePage() {

    const params = useParams<{ profileId: string}>();
    console.log(params);

    return (
      <div className="w-screen h-screen bg-slate-600 text-white">
        <h1>Profile Page with data directly from my own ipfs node {params.profileId} </h1>
      </div>
    );
  }