import React from 'react';
import { useExpenses } from '../context/ExpenseContext';

export const SettingsPage: React.FC = () => {
  const { accountAddress, walletName, disconnectWallet } = useExpenses();

  return (
    <div className="flex-1 pt-24 pb-20 md:pb-12 px-4 md:px-10 max-w-4xl mx-auto min-h-screen">
      <h1 className="font-['Montserrat'] font-bold text-3xl text-[#e2e2e2] mb-2">Settings</h1>
      <p className="text-sm text-[#d4c5ab] mb-8">
        Manage your Aptos wallet connection and Shelby Protocol parameters.
      </p>

      <div className="space-y-6">
        {/* Wallet Connection Box */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10">
          <h2 className="font-bold text-lg text-[#e2e2e2] mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FFE642]">
              account_balance_wallet
            </span>
            Wallet Connection
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#121414] border border-white/5">
            <div>
              <div className="text-xs text-[#d4c5ab]">Active Provider</div>
              <div className="font-bold text-sm text-[#FFE642] mt-0.5">{walletName}</div>
              <div className="font-mono text-xs text-[#d4c5ab] mt-1 break-all">
                {accountAddress || 'Not connected'}
              </div>
            </div>

            <button
              onClick={disconnectWallet}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#ffb4ab] border border-[#ffb4ab]/30 hover:bg-[#ffb4ab]/10 transition-colors self-start sm:self-auto"
            >
              Disconnect Wallet
            </button>
          </div>
        </div>

        {/* Shelby Protocol Configuration Box */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10">
          <h2 className="font-bold text-lg text-[#e2e2e2] mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FFE642]">dns</span>
            Shelby Network Status
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between p-3 rounded-xl bg-[#121414]">
              <span className="text-[#d4c5ab]">Target Network</span>
              <span className="font-mono text-[#FFE642] font-semibold">Aptos Testnet</span>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-[#121414]">
              <span className="text-[#d4c5ab]">Storage Protocol</span>
              <span className="font-mono text-[#FFE642] font-semibold">
                @shelby-protocol/sdk v0.4.1
              </span>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-[#121414]">
              <span className="text-[#d4c5ab]">Receipt Proof Encryption</span>
              <span className="font-mono text-[#FFE642] font-semibold">Clay Codes (Erasure)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
