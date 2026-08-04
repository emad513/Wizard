import React from 'react';
import { useExpenses } from '../context/ExpenseContext';
import { WizardLogo } from './WizardLogo';

export const LandingPage: React.FC = () => {
  const { connectPetra, setActivePage, connected } = useExpenses();

  const handleConnectOrDashboard = () => {
    if (connected) {
      setActivePage('dashboard');
    } else {
      connectPetra();
    }
  };

  return (
    <div className="flex-grow pt-[80px] bg-gradient-hero">
      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 min-h-[75vh]">
        <div className="flex-1 flex flex-col items-start gap-6 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-[#FFBF00]/30 text-xs font-semibold text-[#FFE642]">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span>Built on Shelby Protocol (Aptos)</span>
          </div>

          <h1 className="font-['Montserrat'] font-bold text-4xl sm:text-5xl md:text-6xl text-[#ffe2ab] tracking-tight leading-[1.15]">
            Magic-Grade <br />
            <span className="bg-gradient-to-r from-[#FF7900] via-[#FFBF00] to-[#FFE642] bg-clip-text text-transparent">
              Expense Splitting.
            </span>
          </h1>

          <p className="font-['Montserrat'] text-lg text-[#d4c5ab] max-w-[500px] leading-relaxed">
            Transparent, provable group tracking. Receipts stored on-chain via Shelby Protocol on Aptos.
          </p>

          <button
            onClick={handleConnectOrDashboard}
            className="bg-[#FFBF00] text-[#402d00] font-bold text-base px-8 py-4 rounded-full glow-button mt-2 flex items-center gap-3 group active:scale-95 transition-all shadow-xl"
          >
            <span>{connected ? 'Go to Dashboard' : 'Connect Wallet'}</span>
            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
              {connected ? 'dashboard' : 'account_balance_wallet'}
            </span>
          </button>
        </div>

        <div className="flex-1 flex justify-center relative w-full max-w-[480px] z-10">
          {/* Ambient Glow Background */}
          <div className="absolute inset-0 bg-[#FF7900] opacity-25 blur-[100px] rounded-full pointer-events-none" />

          {/* Logo Card */}
          <div className="w-full aspect-square max-w-[380px] relative z-10 rounded-3xl bg-[#FF7900] p-8 flex items-center justify-center shadow-[0_0_60px_rgba(255,230,66,0.3)] border border-[#F2CF7E]/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFE642]/15 to-transparent pointer-events-none" />
            <WizardLogo size={240} className="drop-shadow-[0_0_20px_rgba(255,230,66,0.6)]" />
          </div>
        </div>
      </section>

      {/* Preview Section: How It Works */}
      <section id="how-it-works" className="px-6 md:px-12 py-16 max-w-[1200px] mx-auto relative z-10 border-t border-white/5">
        <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-center text-[#ffe2ab] mb-12 tracking-tight">
          Wizardry in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 hover:shadow-[0_0_25px_rgba(255,230,66,0.25)] transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1e2020] flex items-center justify-center mb-2 border border-[#504532]/60 text-[#FFE642]">
              <span className="material-symbols-outlined text-3xl">link</span>
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#e2e2e2]">On-Chain Proof</h3>
            <p className="text-sm text-[#d4c5ab] leading-relaxed">
              Every receipt is an immutable blob on Shelbynet, providing verifiable transaction receipts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 hover:shadow-[0_0_25px_rgba(255,230,66,0.25)] transition-all duration-300 md:translate-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#1e2020] flex items-center justify-center mb-2 border border-[#504532]/60 text-[#FFE642]">
              <span className="material-symbols-outlined text-3xl">group</span>
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#e2e2e2]">Group Harmony</h3>
            <p className="text-sm text-[#d4c5ab] leading-relaxed">
              Auto-calculated shares for stress-free, accurate expense splitting every time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 rounded-2xl flex flex-col items-center text-center gap-4 hover:shadow-[0_0_25px_rgba(255,230,66,0.25)] transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#1e2020] flex items-center justify-center mb-2 border border-[#504532]/60 text-[#FFE642]">
              <span className="material-symbols-outlined text-3xl">bolt</span>
            </div>
            <h3 className="font-['Montserrat'] font-bold text-xl text-[#e2e2e2]">Instant Settling</h3>
            <p className="text-sm text-[#d4c5ab] leading-relaxed">
              One-click payments powered by the lightning-fast Aptos blockchain &amp; Shelby Protocol.
            </p>
          </div>
        </div>
      </section>

      {/* Security Model Section */}
      <section id="security" className="px-6 md:px-12 py-16 max-w-[1200px] mx-auto relative z-10 border-t border-white/5">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[#FFBF00]/30 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FFBF00]/30 text-xs font-semibold text-[#FFE642] mb-3">
              <span className="material-symbols-outlined text-sm">shield</span>
              <span>Cryptographic Security</span>
            </div>
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#ffe2ab] tracking-tight">
              Built for Absolute Trust
            </h2>
            <p className="text-sm text-[#d4c5ab] mt-3">
              Wizard replaces black-box server databases with transparent public-key authentication and on-chain proofs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#121414]/80 border border-white/5 space-y-2">
              <div className="flex items-center gap-2.5 text-base font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-xl">key</span>
                <span>Wallet-Based Authentication</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                Connect securely using Petra or Aptos Wallet Adapter. No account registration, passwords, or personal data stored on centralized servers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121414]/80 border border-white/5 space-y-2">
              <div className="flex items-center gap-2.5 text-base font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-xl">history_edu</span>
                <span>Signed On-Chain Transactions</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                Every logged expense and balance settlement is signed by your wallet on Aptos. Recorded transactions are permanent and non-editable.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121414]/80 border border-white/5 space-y-2">
              <div className="flex items-center gap-2.5 text-base font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-xl">cloud_done</span>
                <span>Decentralized Shelby Storage</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                Receipt uploads are stored as immutable data blobs on Shelbynet using Shelby Protocol, keeping images secure and tamper-proof.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#121414]/80 border border-white/5 space-y-2">
              <div className="flex items-center gap-2.5 text-base font-bold text-[#FFE642]">
                <span className="material-symbols-outlined text-xl">lock_person</span>
                <span>Sovereign Data Ownership</span>
              </div>
              <p className="text-xs text-[#d4c5ab] leading-relaxed">
                No third-party custodian can modify your expenses or alter balances. You maintain sole authority over your wallet&apos;s records.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Wizard Section */}
      <section id="about" className="px-6 md:px-12 py-16 max-w-[1200px] mx-auto relative z-10 border-t border-white/5">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[#FFBF00]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7900]/20 border border-[#FFBF00]/30 text-xs font-semibold text-[#FFE642]">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span>About Wizard Protocol</span>
            </div>
            <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#ffe2ab] tracking-tight">
              Verifiable Expense Splitting for the Decentralized Web
            </h2>
            <p className="text-sm text-[#d4c5ab] leading-relaxed">
              Wizard eliminates expense disputes by anchoring group balances directly to Aptos on-chain transactions and storing receipt proof media on <strong className="text-[#FFE642]">Shelbynet</strong>.
            </p>
            <p className="text-xs text-[#d4c5ab] leading-relaxed">
              Unlike legacy apps that rely on private servers susceptible to silent modifications, Wizard gives every participant cryptographically provable certainty that history cannot be edited behind their back.
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <button
              onClick={handleConnectOrDashboard}
              className="bg-gradient-to-r from-[#FF7900] to-[#FFBF00] text-[#402d00] font-bold text-sm px-8 py-4 rounded-xl flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all glow-primary"
            >
              <span>{connected ? 'Open App Dashboard' : 'Get Started Now'}</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
