import React, { createContext, useContext, useEffect, useState } from 'react';

interface Web3ContextType {
    provider: any;
    account: string | null;
    connectWallet: () => void;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider: React.FC = ({ children }) => {
    
    const [provider, setProvider] = useState<any>(null);
    const [account, setAccount] = useState<string | null>(null);

    useEffect(() => {
        // Detect & set the provider object
        const detectProvider = async () => {
            if ('ethereum' in window) {
                setProvider(window.ethereum);
            } else if ('solana' in window) {
                setProvider(window.solana);
            } else { 
                console.log('No provider detected. Install MetaMask or Phantom wallet');                 
            }               
        };
        detectProvider(); 
    }, []);



}