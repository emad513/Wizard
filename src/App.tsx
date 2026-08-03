import React from 'react';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { PetraWallet } from 'petra-plugin-wallet-adapter';

import { ExpenseProvider, useExpenses } from './context/ExpenseContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { GroupsDashboard } from './components/GroupsDashboard';
import { GroupDetailsView } from './components/GroupDetailsView';
import { AddExpensePage } from './components/AddExpensePage';
import { SettingsPage } from './components/SettingsPage';
import { WalletConnectModal } from './components/WalletConnectModal';
import { NewGroupModal } from './components/NewGroupModal';
import { NotificationsToast } from './components/NotificationsToast';

const wallets = [new PetraWallet()];

function AppContent() {
  const { activePage, setActivePage, connected } = useExpenses();

  const isAppView = connected && activePage !== 'home';

  return (
    <div className="min-h-screen bg-[#121414] text-[#e2e2e2] font-['Montserrat',sans-serif] flex flex-col relative selection:bg-[#FFBF00] selection:text-[#402d00]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout Container */}
      <div className="flex flex-1 w-full relative">
        {/* Desktop Sidebar (only visible when connected / in app view) */}
        {isAppView && <Sidebar />}

        {/* Main View Area */}
        <div className={`flex-1 flex flex-col w-full ${isAppView ? 'md:ml-64' : ''}`}>
          <main className="flex-1 flex flex-col">
            {activePage === 'home' && <LandingPage />}
            {activePage === 'dashboard' && <GroupsDashboard />}
            {activePage === 'groups' && <GroupDetailsView />}
            {activePage === 'add-expense' && <AddExpensePage />}
            {activePage === 'settings' && <SettingsPage />}
          </main>

          {/* Footer matching Image 5 */}
          <Footer />
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar matching Image 3 & 4 */}
      {isAppView && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1e2020]/95 backdrop-blur-lg border-t border-white/10 px-4 py-2 flex justify-around items-center shadow-2xl">
          <button
            onClick={() => setActivePage('dashboard')}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
              activePage === 'dashboard' ? 'text-[#FFE642] font-bold' : 'text-[#d4c5ab]'
            }`}
          >
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="text-[10px] mt-0.5 font-mono">Groups</span>
          </button>

          <button
            onClick={() => setActivePage('add-expense')}
            className={`flex flex-col items-center justify-center p-2.5 rounded-full bg-gradient-to-r from-[#FF7900] to-[#FFBF00] text-[#402d00] font-bold -translate-y-3 shadow-lg ${
              activePage === 'add-expense' ? 'ring-2 ring-[#FFE642]' : ''
            }`}
          >
            <span className="material-symbols-outlined text-2xl">add</span>
          </button>

          <button
            onClick={() => setActivePage('settings')}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
              activePage === 'settings' ? 'text-[#FFE642] font-bold' : 'text-[#d4c5ab]'
            }`}
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="text-[10px] mt-0.5 font-mono">Settings</span>
          </button>
        </nav>
      )}

      {/* Modals & Toasts */}
      <WalletConnectModal />
      <NewGroupModal />
      <NotificationsToast />
    </div>
  );
}

export default function App() {
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={false}>
      <ExpenseProvider>
        <AppContent />
      </ExpenseProvider>
    </AptosWalletAdapterProvider>
  );
}
