import React from 'react';
import { useExpenses } from '../context/ExpenseContext';

export const SettingsPage: React.FC = () => {
  const { accountAddress, walletName, disconnectWallet } = useExpenses();

  return (
    <div className="flex-1 pt-24 pb-20 md:pb-12 px-4 md:px-10 max-w-4xl mx-auto min-h-screen">
      <div className="mb-8">
        <h1 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#e2e2e2] mb-2">
          Settings &amp; Protocol Architecture
        </h1>
        <p className="text-sm text-[#d4c5ab]">
          Manage your Aptos wallet connection, view the security model, and discover how Wizard leverages Shelby Protocol.
        </p>
      </div>

      <div className="space-y-8">
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

        {/* Shelby Network Status Box */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10">
          <h2 className="font-bold text-lg text-[#e2e2e2] mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FFE642]">dns</span>
            Shelby Network Status
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between p-3 rounded-xl bg-[#121414]">
              <span className="text-[#d4c5ab]">Target Network</span>
              <span className="font-mono text-[#FFE642] font-semibold">Shelbynet</span>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-[#121414]">
              <span className="text-[#d4c5ab]">Storage Protocol</span>
              <span className="font-mono text-[#FFE642] font-semibold">
                @shelby-protocol/sdk v0.4.1
              </span>
            </div>
            <div className="flex justify-between p-3 rounded-xl bg-[#121414]">
              <span className="text-[#d4c5ab]">Receipt Proof Encryption</span>
              <span className="font-mono text-[#FFE642] font-semibold">Clay Codes (Erasure Coding)</span>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div id="security" className="glass-panel rounded-2xl p-6 md:p-8 border border-[#FFBF00]/30 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FF7900]/20 border border-[#FFBF00]/40 flex items-center justify-center text-[#FFE642]">
              <span className="material-symbols-outlined text-2xl">shield</span>
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-xl text-[#e2e2e2]">
                Security Architecture
              </h2>
              <p className="text-xs text-[#d4c5ab]">Trustless, cryptographically verified expense ledger</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Feature 1 */}
            <div className="bg-[#121414]/70 p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-base">key</span>
                <span>Wallet-Based Authentication</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                Connect seamlessly via Petra or Aptos Wallet Adapter. Access control is based directly on public-key cryptography—no passwords or central databases required.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#121414]/70 p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-base">history_edu</span>
                <span>Immutable On-Chain Transactions</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                Every logged expense and balance settlement is signed on-chain. Once committed to the Aptos ledger, transactions are permanent and non-editable.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#121414]/70 p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-base">cloud_done</span>
                <span>Decentralized Receipt Storage</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                Receipt images and metadata are stored on Shelbynet using Shelby Protocol&apos;s decentralized blob engine, preventing central storage outages or data tampering.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#121414]/70 p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-base">lock_person</span>
                <span>Self-Sovereign Data Controls</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                No third-party custodian or server admin can alter your balances or modify group records. Only your signed wallet can initiate modifications to your data.
              </p>
            </div>
          </div>
        </div>

        {/* About Wizard Section */}
        <div id="about" className="glass-panel rounded-2xl p-6 md:p-8 border border-[#FFBF00]/30 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#FF7900]/20 border border-[#FFBF00]/40 flex items-center justify-center text-[#FFE642]">
              <span className="material-symbols-outlined text-2xl">auto_awesome</span>
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-xl text-[#e2e2e2]">
                About Wizard
              </h2>
              <p className="text-xs text-[#d4c5ab]">Decentralized group expense tracking for Web3</p>
            </div>
          </div>

          <div className="space-y-4 text-xs text-[#d4c5ab] leading-relaxed">
            <p>
              <strong className="text-[#e2e2e2]">What Wizard Does:</strong> Wizard makes group expense splitting transparent, automated, and dispute-free. Whether traveling with friends, sharing rent, or organizing events, Wizard handles exact splits, settlement calculations, and on-chain receipt verification.
            </p>

            <p>
              <strong className="text-[#e2e2e2]">Why It&apos;s Different:</strong> Unlike legacy expense-splitting tools where central servers hold control or entries can be stealthily edited, Wizard records every expense as a cryptographic proof on-chain and stores receipt media on <strong className="text-[#FFE642]">Shelbynet</strong>. No central authority can alter, delete, or obscure transaction history.
            </p>

            <p>
              <strong className="text-[#e2e2e2]">Powered by Shelby Protocol &amp; Aptos:</strong> Built on Aptos for low latency and micro-cent gas fees, combined with Shelby Protocol&apos;s high-throughput decentralized storage layer for immutable receipt blobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
