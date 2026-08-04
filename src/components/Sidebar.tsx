import React from 'react';
import { useExpenses } from '../context/ExpenseContext';
import { WizardLogo } from './WizardLogo';

export const Sidebar: React.FC = () => {
  const { activePage, setActivePage, accountAddress, connected } = useExpenses();

  const truncatedAddr = accountAddress
    ? `${accountAddress.substring(0, 6)}...${accountAddress.substring(accountAddress.length - 4)}`
    : 'Not Connected';

  const userAvatar = accountAddress
    ? `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(accountAddress)}`
    : 'https://api.dicebear.com/7.x/bottts/svg?seed=wizard';

  return (
    <aside className="h-full w-64 fixed left-0 top-0 hidden md:flex flex-col bg-[#1e2020]/90 backdrop-blur-2xl border-r border-white/5 shadow-2xl z-40">
      {/* Brand Header */}
      <div className="flex items-center gap-3.5 px-6 py-6 mt-2 border-b border-white/5">
        <WizardLogo size={40} className="rounded-xl shadow-[0_0_15px_rgba(255,191,0,0.3)]" />
        <div>
          <div className="font-['Montserrat'] font-bold text-2xl tracking-tight bg-gradient-to-r from-[#FF7900] via-[#FFBF00] to-[#FFE642] bg-clip-text text-transparent leading-none">
            Wizard
          </div>
          <div className="text-[11px] font-mono text-[#d4c5ab] mt-1">Decentralized Splits</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col gap-1.5 pt-6 px-3">
        <button
          onClick={() => setActivePage('dashboard')}
          className={`w-full px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all text-xs font-semibold ${
            activePage === 'dashboard'
              ? 'bg-[#FF7900]/20 text-[#FFE642] border-l-4 border-[#FFBF00] shadow-[0_0_15px_rgba(255,121,0,0.2)]'
              : 'text-[#d4c5ab] hover:text-[#e2e2e2] hover:bg-white/5'
          }`}
        >
          <span className="material-symbols-outlined text-lg">dashboard</span>
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setActivePage('groups')}
          className={`w-full px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all text-xs font-semibold ${
            activePage === 'groups'
              ? 'bg-[#FF7900]/20 text-[#FFE642] border-l-4 border-[#FFBF00] shadow-[0_0_15px_rgba(255,121,0,0.2)]'
              : 'text-[#d4c5ab] hover:text-[#e2e2e2] hover:bg-white/5'
          }`}
        >
          <span className="material-symbols-outlined text-lg">group</span>
          <span>Groups</span>
        </button>

        <button
          onClick={() => setActivePage('add-expense')}
          className={`w-full px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all text-xs font-semibold ${
            activePage === 'add-expense'
              ? 'bg-[#FF7900]/20 text-[#FFE642] border-l-4 border-[#FFBF00] shadow-[0_0_15px_rgba(255,121,0,0.2)]'
              : 'text-[#d4c5ab] hover:text-[#e2e2e2] hover:bg-white/5'
          }`}
        >
          <span className="material-symbols-outlined text-lg">payments</span>
          <span>Add Expense</span>
        </button>

        <button
          onClick={() => setActivePage('settings')}
          className={`w-full px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all text-xs font-semibold ${
            activePage === 'settings'
              ? 'bg-[#FF7900]/20 text-[#FFE642] border-l-4 border-[#FFBF00] shadow-[0_0_15px_rgba(255,121,0,0.2)]'
              : 'text-[#d4c5ab] hover:text-[#e2e2e2] hover:bg-white/5'
          }`}
        >
          <span className="material-symbols-outlined text-lg">settings</span>
          <span>Settings</span>
        </button>
      </div>

      {/* User Profile at Bottom */}
      <div className="mt-auto p-4 border-t border-white/5">
        <div className="flex items-center gap-3 glass-panel p-3 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-[#353534] overflow-hidden border border-[#FFBF00]/30 shrink-0">
            <img
              src={userAvatar}
              alt="Connected User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="font-bold text-xs text-[#e2e2e2] font-mono truncate">{truncatedAddr}</div>
            <div className="text-[10px] font-semibold text-[#FFE642]">
              {connected ? 'Aptos Connected' : 'Disconnected'}
            </div>
          </div>
          <span className="material-symbols-outlined text-[#d4c5ab] text-sm">unfold_more</span>
        </div>
      </div>
    </aside>
  );
};
