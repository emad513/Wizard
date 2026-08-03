import React from 'react';
import { useExpenses } from '../context/ExpenseContext';
import { WizardLogo } from './WizardLogo';

export const Navbar: React.FC = () => {
  const {
    connected,
    accountAddress,
    connectPetra,
    disconnectWallet,
    activePage,
    setActivePage,
    setIsWalletModalOpen,
  } = useExpenses();

  const truncatedAddr = accountAddress
    ? `${accountAddress.substring(0, 5)}...${accountAddress.substring(accountAddress.length - 4)}`
    : null;

  return (
    <header className="bg-[#121414]/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-[#504532]/30 shadow-[0_0_20px_rgba(255,191,0,0.1)]">
      <div className="flex justify-between items-center px-6 md:px-10 py-3.5 max-w-[1200px] mx-auto">
        {/* Brand */}
        <button
          onClick={() => setActivePage(connected ? 'dashboard' : 'home')}
          className="flex items-center gap-2.5 text-left group transition-transform active:scale-95"
        >
          <WizardLogo size={32} className="rounded-lg shadow-[0_0_12px_rgba(255,191,0,0.3)]" />
          <span className="text-xl font-bold tracking-tight text-[#ffe2ab] group-hover:text-[#FFE642] transition-colors">
            Wizard
          </span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {!connected ? (
            <>
              <button
                onClick={() => setActivePage('home')}
                className={`transition-all px-3 py-1.5 rounded-lg ${
                  activePage === 'home'
                    ? 'text-[#FFE642] bg-[#FFBF00]/10 shadow-[0_0_12px_rgba(255,230,66,0.2)]'
                    : 'text-[#d4c5ab] hover:text-[#ffe2ab] hover:bg-[#ffe2ab]/10'
                }`}
              >
                Features
              </button>
              <a
                href="#how-it-works"
                onClick={() => setActivePage('home')}
                className="text-[#d4c5ab] hover:text-[#ffe2ab] transition-colors hover:bg-[#ffe2ab]/10 px-3 py-1.5 rounded-lg"
              >
                How it Works
              </a>
              <a
                href="#security"
                onClick={() => setActivePage('home')}
                className="text-[#d4c5ab] hover:text-[#ffe2ab] transition-colors hover:bg-[#ffe2ab]/10 px-3 py-1.5 rounded-lg"
              >
                Security
              </a>
            </>
          ) : (
            <>
              <button
                onClick={() => setActivePage('dashboard')}
                className={`transition-all px-3 py-1.5 rounded-lg ${
                  activePage === 'dashboard'
                    ? 'text-[#FFE642] bg-[#FFBF00]/10 shadow-[0_0_12px_rgba(255,230,66,0.2)]'
                    : 'text-[#d4c5ab] hover:text-[#ffe2ab] hover:bg-[#ffe2ab]/10'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActivePage('groups')}
                className={`transition-all px-3 py-1.5 rounded-lg ${
                  activePage === 'groups'
                    ? 'text-[#FFE642] bg-[#FFBF00]/10 shadow-[0_0_12px_rgba(255,230,66,0.2)]'
                    : 'text-[#d4c5ab] hover:text-[#ffe2ab] hover:bg-[#ffe2ab]/10'
                }`}
              >
                Groups
              </button>
              <button
                onClick={() => setActivePage('add-expense')}
                className={`transition-all px-3 py-1.5 rounded-lg ${
                  activePage === 'add-expense'
                    ? 'text-[#FFE642] bg-[#FFBF00]/10 shadow-[0_0_12px_rgba(255,230,66,0.2)]'
                    : 'text-[#d4c5ab] hover:text-[#ffe2ab] hover:bg-[#ffe2ab]/10'
                }`}
              >
                Add Expense
              </button>
            </>
          )}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-3">
          {connected ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 glass-panel px-3.5 py-1.5 rounded-full border-[#FFE642]/30 text-xs">
                <span className="w-2 h-2 rounded-full bg-[#FFE642] animate-pulse" />
                <span className="font-mono text-[#d4c5ab]">{truncatedAddr}</span>
              </div>
              <button
                onClick={disconnectWallet}
                title="Disconnect Wallet"
                className="p-1.5 rounded-lg text-[#d4c5ab] hover:text-[#ffb4ab] hover:bg-white/5 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={connectPetra}
              className="bg-[#FFBF00] text-[#402d00] font-semibold text-sm px-5 py-2 rounded-full glow-button flex items-center gap-2 active:scale-95 transition-transform"
            >
              <span>Connect Wallet</span>
              <span className="material-symbols-outlined text-base">account_balance_wallet</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
