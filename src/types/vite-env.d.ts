/// <reference types="vite/client" />

declare global {
    interface Window {
        ethereum?: {
            isMetamask?: boolean;
            request?: (...args: any []) => Promise<any>;
            // Add other methods and properties you need
        };
        solana?: {
            isPhantom?: boolean;
            request?: (...args: any[]) => Promise<any>;
            // Add other methods and properties you need
        };
    }
}