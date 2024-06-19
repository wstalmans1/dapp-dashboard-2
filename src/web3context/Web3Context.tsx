/**
 * This file:
    * sets the blockchain Web3 EIP 1193 provider object and identifies the user's account
    * passes those values to React Context
    * provides a wrapper that passes on the context down the component tree
    * provides the function/hook (cfr export const useWeb3) that enables components to consume the React context values
 */

import React, { createContext, useContext, useEffect, useState } from 'react';

interface Web3ContextType {
    provider: any;
    account: string | null;
    connectWallet: () => void;
}

// Function that creates the context object with two components; the 'provider' and the 'consumer' component. The provider-component is used to wrap around components to provide context values. The conumer-component is Used to consume the context values (though in modern React, useContext hook is typically used instead). 
const Web3Context = createContext<Web3ContextType | undefined>(undefined);


// Web3Provider component to create and provide the Web3 context to its children
export const Web3Provider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    
    const [provider, setProvider] = useState<any>(null);
    const [account, setAccount] = useState<string | null>(null);

    // Detect & set the provider object
    useEffect(() => {
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

    // Function to connect to the wallet and set the account
    const connectWallet = async () => {
        if (provider) {
            try {
                if (provider.isMetaMask) { 
                    const accounts = await provider.request({method: 'eth_requestAccounts'});
                    setAccount(accounts[0]);
                } else if (provider.isPhantom) {
                    const response = await provider.connect();
                    setAccount(response.publicKey.toString());
                }
            } catch (error) {
                console.log('Error connecting to wallet:', error)
            }
        }       
    };

    // Set the context (with its values provider, account, connectWallet) and pass them down to the component tree
    return (
        <Web3Context.Provider value={{ provider, account, connectWallet }}>
            {children}
        </Web3Context.Provider>
    );
};

// Custom hook to use the Web3 context. All descendant components (children) can access the context values using useContext(Web3Context).
export const useWeb3Context = () => {
    const context = useContext(Web3Context);
    if (!context) {
        throw new Error('useWeb3 must be used within a Web3Provider');
    }
    return context;
};