import React from 'react';
import { useExpenses } from '../context/ExpenseContext';

export const NotificationsToast: React.FC = () => {
  const { notifications, dismissNotification } = useExpenses();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 pointer-events-none">
      {notifications.map((item) => (
        <div
          key={item.id}
          className="pointer-events-auto glass-panel p-4 rounded-2xl border border-[#F2CF7E]/40 shadow-2xl animate-fade-in flex items-start gap-3 bg-[#1e2020]/95"
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
              item.type === 'success'
                ? 'bg-[#FFBF00]/20 text-[#FFE642] border-[#FFBF00]/40'
                : item.type === 'error'
                ? 'bg-[#93000a]/30 text-[#ffb4ab] border-[#ffb4ab]/40'
                : 'bg-white/10 text-[#d4c5ab] border-white/20'
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {item.type === 'success' ? 'verified' : item.type === 'error' ? 'error' : 'info'}
            </span>
          </div>

          <div className="flex-1 overflow-hidden">
            <h4 className="font-bold text-sm text-[#e2e2e2]">{item.title}</h4>
            <p className="text-xs text-[#d4c5ab] mt-0.5 leading-relaxed">{item.message}</p>

            {item.txHash && (
              <a
                href={item.txExplorerUrl || `https://explorer.aptoslabs.com/txn/${item.txHash}?network=testnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-mono text-[#FFE642] underline mt-1.5 hover:text-white"
              >
                <span>Explorer Tx ({item.txHash.substring(0, 8)}...)</span>
                <span className="material-symbols-outlined text-[10px]">open_in_new</span>
              </a>
            )}
          </div>

          <button
            onClick={() => dismissNotification(item.id)}
            className="text-[#d4c5ab] hover:text-white p-1"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>
      ))}
    </div>
  );
};
