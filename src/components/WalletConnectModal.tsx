import React from 'react';
import { useExpenses } from '../context/ExpenseContext';

export const WalletConnectModal: React.FC = () => {
  const { isWalletModalOpen, setIsWalletModalOpen, connectPetra, isSubmittingTx } = useExpenses();

  if (!isWalletModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel rounded-2xl p-6 md:p-8 w-full max-w-md border border-[#F2CF7E]/30 relative shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setIsWalletModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl text-[#d4c5ab] hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FF7900]/20 border border-[#FFBF00]/40 flex items-center justify-center mx-auto mb-3 text-[#FFE642]">
            <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
          </div>
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#e2e2e2]">Connect Wallet</h2>
          <p className="text-xs text-[#d4c5ab] mt-1">
            Connect your Aptos Petra Wallet to split expenses and sign Shelby receipt proofs.
          </p>
        </div>

        <div className="space-y-3">
          {/* Petra Option */}
          <button
            onClick={connectPetra}
            disabled={isSubmittingTx}
            className="w-full p-4 rounded-xl glass-card border border-[#FFBF00]/40 hover:border-[#FFE642] flex items-center justify-between group transition-all text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FF7900] flex items-center justify-center text-white font-bold text-lg shadow-md">
                P
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#e2e2e2] group-hover:text-[#FFE642] transition-colors">
                  Petra Wallet
                </h3>
                <p className="text-xs text-[#d4c5ab]">Aptos Web3 Wallet</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#FFE642] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        <p className="text-[11px] text-[#d4c5ab] text-center mt-6 leading-relaxed">
          Powered by Aptos Wallet Adapter &amp; Shelby Protocol. Transactions are signed directly in your wallet extension.
        </p>
      </div>
    </div>
  );
};
