import React, { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

export const GroupDetailsView: React.FC = () => {
  const {
    groups,
    expenses,
    selectedGroupId,
    setActivePage,
    settleUpGroup,
    isSubmittingTx,
  } = useExpenses();

  const [activeReceiptPreview, setActiveReceiptPreview] = useState<{
    name?: string;
    url?: string;
    blobKey?: string;
    txHash?: string;
  } | null>(null);

  const currentGroup = groups.find((g) => g.id === selectedGroupId) || groups[0];

  if (!currentGroup) return null;

  const groupExpenses = expenses.filter((e) => e.groupId === currentGroup.id);

  return (
    <div className="flex-1 pt-24 pb-20 md:pb-12 px-4 md:px-10 max-w-7xl mx-auto min-h-screen">
      {/* Top Navigation Back */}
      <button
        onClick={() => setActivePage('dashboard')}
        className="flex items-center gap-2 text-xs font-semibold text-[#d4c5ab] hover:text-[#FFE642] mb-6 transition-colors"
      >
        <span className="material-symbols-outlined text-base">arrow_back</span>
        <span>Back to Groups Dashboard</span>
      </button>

      {/* Group Hero Banner */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 mb-8 border border-[#F2CF7E]/30 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-[#FF7900]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#FF7900]/20 border border-[#FFBF00]/40 flex items-center justify-center text-[#FFE642]">
              <span className="material-symbols-outlined text-3xl">{currentGroup.icon}</span>
            </div>
            <div>
              <h1 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-[#e2e2e2]">
                {currentGroup.name}
              </h1>
              <p className="text-xs text-[#d4c5ab] mt-1">
                {currentGroup.members.length} members · Stored on Shelby Protocol
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActivePage('add-expense')}
              className="bg-[#FFBF00] text-[#402d00] font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 glow-button hover:bg-[#FFE642] transition-colors"
            >
              <span className="material-symbols-outlined text-base">add</span>
              <span>Add Expense</span>
            </button>

            {currentGroup.yourBalance < 0 && (
              <button
                onClick={() => settleUpGroup(currentGroup.id)}
                disabled={isSubmittingTx}
                className="bg-[#FFE642] text-[#402d00] font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white transition-colors"
              >
                <span className="material-symbols-outlined text-base">payments</span>
                <span>Settle ${Math.abs(currentGroup.yourBalance).toFixed(2)}</span>
              </button>
            )}
          </div>
        </div>

        {/* Group Stats & Members Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
          <div className="bg-[#121414]/50 rounded-xl p-4 border border-white/5">
            <div className="text-xs text-[#d4c5ab] mb-1">Total Spend</div>
            <div className="font-['Montserrat'] font-bold text-2xl text-[#e2e2e2]">
              ${currentGroup.totalSpend.toFixed(2)}
            </div>
          </div>

          <div className="bg-[#121414]/50 rounded-xl p-4 border border-white/5">
            <div className="text-xs text-[#d4c5ab] mb-1">Your Net Balance</div>
            <div
              className={`font-['Montserrat'] font-bold text-2xl ${
                currentGroup.yourBalance > 0
                  ? 'text-[#FFE642]'
                  : currentGroup.yourBalance < 0
                  ? 'text-[#ffb4ab]'
                  : 'text-[#e2e2e2]'
              }`}
            >
              {currentGroup.yourBalance > 0
                ? `+$${currentGroup.yourBalance.toFixed(2)} (Owed)`
                : currentGroup.yourBalance < 0
                ? `-$${Math.abs(currentGroup.yourBalance).toFixed(2)} (Owe)`
                : '$0.00 (Settled)'}
            </div>
          </div>

          <div className="bg-[#121414]/50 rounded-xl p-4 border border-white/5">
            <div className="text-xs text-[#d4c5ab] mb-2">Group Members</div>
            <div className="flex -space-x-2">
              {currentGroup.members.map((m, i) => (
                <img
                  key={m.address + i}
                  src={m.avatarUrl}
                  title={m.name}
                  alt={m.name}
                  className="w-8 h-8 rounded-full border-2 border-[#121414] object-cover bg-[#353534]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expenses History List */}
      <div className="space-y-4">
        <h2 className="font-['Montserrat'] font-bold text-xl text-[#e2e2e2] flex items-center gap-2">
          <span className="material-symbols-outlined text-[#FFE642]">receipt_long</span>
          <span>Expenses &amp; On-Chain Receipts</span>
        </h2>

        {groupExpenses.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center text-[#d4c5ab]">
            <span className="material-symbols-outlined text-4xl mb-2 text-[#FFBF00]">
              inventory_2
            </span>
            <p className="font-semibold">No expenses recorded yet in this group.</p>
            <p className="text-xs mt-1">
              Click &quot;Add Expense&quot; above to store your first receipt on Shelby.
            </p>
          </div>
        ) : (
          groupExpenses.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel rounded-2xl p-5 border border-white/5 hover:border-[#FFBF00]/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#FFBF00]/15 flex items-center justify-center text-[#FFE642] shrink-0 border border-[#FFBF00]/30">
                  <span className="material-symbols-outlined text-xl">receipt</span>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#e2e2e2]">{exp.description}</h3>
                  <div className="flex items-center gap-2 text-xs text-[#d4c5ab] mt-1 flex-wrap">
                    <span>
                      Paid by <strong className="text-[#ffe2ab]">{exp.paidByName}</strong>
                    </span>
                    <span>·</span>
                    <span className="font-mono">{exp.timestamp}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FFE642]/10 border border-[#FFE642]/30 text-[#FFE642] text-[10px] font-bold">
                      <span className="material-symbols-outlined text-[10px]">verified</span>
                      Shelby Verified
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 self-end sm:self-center">
                <div className="text-right">
                  <div className="font-['Montserrat'] font-bold text-lg text-[#e2e2e2]">
                    ${exp.amount.toFixed(2)}
                  </div>
                  <div className="text-[11px] text-[#d4c5ab] capitalize font-mono">
                    {exp.splitMethod} split
                  </div>
                </div>

                {/* Receipt Preview Trigger */}
                {(exp.receiptUrl || exp.shelbyBlobKey) && (
                  <button
                    onClick={() =>
                      setActiveReceiptPreview({
                        name: exp.receiptName || 'Receipt',
                        url: exp.receiptUrl,
                        blobKey: exp.shelbyBlobKey,
                        txHash: exp.shelbyTxHash,
                      })
                    }
                    className="p-2.5 rounded-xl bg-[#121414] border border-[#FFBF00]/30 text-[#FFE642] hover:bg-[#FFBF00]/20 transition-colors"
                    title="View Shelby Receipt Proof"
                  >
                    <span className="material-symbols-outlined text-lg">visibility</span>
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Receipt Proof Modal */}
      {activeReceiptPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel rounded-2xl p-6 w-full max-w-lg border border-[#F2CF7E]/40 relative">
            <button
              onClick={() => setActiveReceiptPreview(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-[#d4c5ab] hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <h3 className="font-bold text-lg text-[#e2e2e2] mb-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FFE642]">verified</span>
              Shelby Receipt Proof
            </h3>
            <p className="text-xs text-[#d4c5ab] font-mono break-all mb-4">
              {activeReceiptPreview.blobKey || 'shelby://receipts/proof'}
            </p>

            {/* Receipt Image if present */}
            {activeReceiptPreview.url ? (
              <div className="rounded-xl overflow-hidden max-h-72 bg-black/40 border border-white/10 flex items-center justify-center mb-4">
                <img
                  src={activeReceiptPreview.url}
                  alt="Receipt"
                  className="max-h-72 object-contain"
                />
              </div>
            ) : (
              <div className="rounded-xl p-8 bg-[#121414] border border-white/10 text-center mb-4">
                <span className="material-symbols-outlined text-4xl text-[#FFE642] mb-1">
                  description
                </span>
                <p className="text-xs text-[#d4c5ab]">
                  Immutable Blob Storage Verified on Shelby Testnet
                </p>
              </div>
            )}

            {activeReceiptPreview.txHash && (
              <div className="p-3 rounded-xl bg-[#121414] border border-white/10 text-xs">
                <span className="text-[#d4c5ab] block mb-1">Aptos Move Tx Hash:</span>
                <a
                  href={`https://explorer.aptoslabs.com/txn/${activeReceiptPreview.txHash}?network=testnet`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#FFE642] underline hover:text-white break-all flex items-center gap-1"
                >
                  <span>{activeReceiptPreview.txHash}</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
