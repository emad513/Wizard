import React from 'react';
import { useExpenses } from '../context/ExpenseContext';

export const GroupsDashboard: React.FC = () => {
  const {
    groups,
    accountAddress,
    setActivePage,
    setSelectedGroupId,
    setIsNewGroupModalOpen,
    settleUpGroup,
    isSubmittingTx,
  } = useExpenses();

  const truncatedAddr = accountAddress
    ? `${accountAddress.substring(0, 5)}...${accountAddress.substring(accountAddress.length - 4)}`
    : 'Not Connected';

  const handleViewGroup = (groupId: string) => {
    setSelectedGroupId(groupId);
    setActivePage('groups');
  };

  return (
    <div className="flex-1 pt-24 pb-20 md:pb-12 px-4 md:px-10 max-w-7xl mx-auto min-h-screen">
      {/* Top Header Bar inside Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#e2e2e2] tracking-tight">
            Your Groups
          </h1>
          <p className="text-[#d4c5ab] text-sm md:text-base mt-1.5">
            Manage shared expenses across {groups.length} active groups.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Wallet badge */}
          <div className="hidden sm:flex items-center gap-2 glass-panel px-4 py-2 rounded-full border-[#FFBF00]/30 text-xs font-mono text-[#d4c5ab]">
            <span className="material-symbols-outlined text-[#FFE642] text-sm">account_balance_wallet</span>
            <span>{truncatedAddr}</span>
          </div>

          {/* New Group Button */}
          <button
            onClick={() => setIsNewGroupModalOpen(true)}
            className="bg-gradient-to-r from-[#FF7900] to-[#FFBF00] text-[#402d00] font-bold text-sm px-5 py-2.5 rounded-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all glow-primary shadow-lg"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            <span>New Group</span>
          </button>
        </div>
      </div>

      {/* Empty State when zero groups exist for connected wallet */}
      {groups.length === 0 ? (
        <div className="glass-panel rounded-2xl p-12 text-center max-w-xl mx-auto border border-[#F2CF7E]/30 my-12">
          <div className="w-16 h-16 rounded-2xl bg-[#FF7900]/20 border border-[#FFBF00]/40 flex items-center justify-center mx-auto mb-4 text-[#FFE642]">
            <span className="material-symbols-outlined text-4xl">group_add</span>
          </div>
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#e2e2e2] mb-2">
            No Groups Yet
          </h2>
          <p className="text-sm text-[#d4c5ab] mb-6 leading-relaxed">
            No expense groups found for wallet <span className="font-mono text-[#FFE642]">{truncatedAddr}</span>. Create a group to start logging and splitting expenses on-chain with Aptos &amp; Shelby Protocol.
          </p>
          <button
            onClick={() => setIsNewGroupModalOpen(true)}
            className="bg-gradient-to-r from-[#FF7900] to-[#FFBF00] text-[#402d00] font-bold text-sm px-6 py-3 rounded-xl inline-flex items-center gap-2 glow-primary shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">add</span>
            <span>Create First Group</span>
          </button>
        </div>
      ) : (
        /* Group Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, idx) => {
            const isLargeCard = idx === 0;

            return (
              <div
                key={group.id}
                className={`glass-panel rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:shadow-[0_8px_32px_rgba(255,121,0,0.15)] transition-all duration-300 ${
                  isLargeCard ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Left Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF7900] via-[#FFBF00] to-transparent opacity-80" />

                {/* Group Header Info */}
                <div className="flex justify-between items-start mb-6 gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#FF7900]/20 flex items-center justify-center text-[#FFE642] border border-[#FFBF00]/30 shrink-0">
                      <span className="material-symbols-outlined text-2xl">{group.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-['Montserrat'] font-bold text-xl text-[#e2e2e2]">
                        {group.name}
                      </h3>
                      {group.dateRange && (
                        <p className="text-xs text-[#d4c5ab] flex items-center gap-1 mt-1 font-mono">
                          <span className="material-symbols-outlined text-xs">calendar_month</span>
                          <span>{group.dateRange}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Avatar Stack */}
                  <div className="flex -space-x-2.5 overflow-hidden shrink-0">
                    {group.members.slice(0, 3).map((m, i) => (
                      <img
                        key={m.address + i}
                        src={m.avatarUrl}
                        alt={m.name}
                        className="w-8 h-8 rounded-full border-2 border-[#201f1f] object-cover bg-[#353534]"
                      />
                    ))}
                    {group.members.length > 3 && (
                      <div className="w-8 h-8 rounded-full border-2 border-[#201f1f] bg-[#333535] flex items-center justify-center text-[10px] font-bold text-[#d4c5ab]">
                        +{group.members.length - 3}
                      </div>
                    )}
                  </div>
                </div>

                {/* Balance & Stats Section */}
                <div className={`grid ${isLargeCard ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-4 mb-6`}>
                  <div className="bg-[#121414]/60 rounded-xl p-4 border border-white/5">
                    <div className="text-xs text-[#d4c5ab] font-medium mb-1">Total Group Spend</div>
                    <div className="font-['Montserrat'] font-bold text-2xl text-[#e2e2e2]">
                      ${group.totalSpend.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                  </div>

                  {/* Status or Your Balance Badge */}
                  <div className="bg-[#121414]/60 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                    {group.yourBalance > 0 ? (
                      <>
                        <div className="absolute inset-0 bg-[#FFE642]/5 blur-xl pointer-events-none" />
                        <div className="text-xs text-[#d4c5ab] font-medium mb-1 relative z-10">Your Balance</div>
                        <div className="font-['Montserrat'] font-bold text-xl text-[#FFE642] relative z-10 flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-lg">arrow_upward</span>
                          <span>Owed ${group.yourBalance.toFixed(2)}</span>
                        </div>
                      </>
                    ) : group.yourBalance < 0 ? (
                      <div className="bg-[#93000a]/20 border border-[#ffb4ab]/30 rounded-lg p-2.5">
                        <div className="text-xs font-bold text-[#ffb4ab] flex items-center gap-1 mb-0.5">
                          <span className="material-symbols-outlined text-sm">warning</span> Action Required
                        </div>
                        <div className="text-xs text-[#e2e2e2]">
                          You owe {group.owedToName || 'group members'} <span className="font-bold">${Math.abs(group.yourBalance).toFixed(2)}</span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="text-xs font-bold text-[#FFE642] flex items-center gap-1 mb-1">
                          <span className="material-symbols-outlined text-sm">check_circle</span> Settled Up
                        </div>
                        <div className="text-xs text-[#d4c5ab]">All balances clear on-chain.</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-auto border-t border-white/5 pt-4 flex items-center justify-between">
                  <div className="text-xs text-[#d4c5ab] font-mono">Last activity: {group.lastActivity}</div>

                  <div className="flex items-center gap-2">
                    {group.yourBalance < 0 && (
                      <button
                        onClick={() => settleUpGroup(group.id)}
                        disabled={isSubmittingTx}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#FFBF00] text-[#402d00] hover:bg-[#FFE642] transition-colors"
                      >
                        Settle Up
                      </button>
                    )}
                    <button
                      onClick={() => handleViewGroup(group.id)}
                      className="text-[#ffe2ab] text-xs font-bold hover:text-[#FFE642] transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-200"
                    >
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
