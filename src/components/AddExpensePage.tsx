import React, { useState, useRef } from 'react';
import { useExpenses } from '../context/ExpenseContext';

export const AddExpensePage: React.FC = () => {
  const {
    groups,
    selectedGroupId,
    addExpense,
    isSubmittingTx,
    txStepMessage,
    setIsNewGroupModalOpen,
  } = useExpenses();

  const [amountStr, setAmountStr] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [groupId, setGroupId] = useState<string>(selectedGroupId || groups[0]?.id || '');
  const [splitMethod, setSplitMethod] = useState<'equal' | 'custom'>('equal');
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setReceiptFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(amountStr);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      alert('Please enter a valid expense amount.');
      return;
    }
    if (!description.trim()) {
      alert('Please enter a description for the expense.');
      return;
    }

    const targetGroupId = groupId || groups[0]?.id;
    if (!targetGroupId) {
      alert('Please select or create a group first.');
      return;
    }

    const success = await addExpense({
      groupId: targetGroupId,
      amount: numericAmount,
      description: description.trim(),
      splitMethod,
      receiptFile,
    });

    if (success) {
      setAmountStr('');
      setDescription('');
      setReceiptFile(null);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4 md:p-8 w-full max-w-7xl mx-auto relative pt-24 pb-16">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF7900]/15 rounded-full blur-[120px] pointer-events-none" />

      {groups.length === 0 ? (
        <div className="glass-card rounded-2xl p-8 md:p-12 w-full max-w-md relative z-10 border border-[#F2CF7E]/30 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-[#FF7900]/20 border border-[#FFBF00]/40 flex items-center justify-center mx-auto mb-4 text-[#FFE642]">
            <span className="material-symbols-outlined text-4xl">group_add</span>
          </div>
          <h2 className="font-['Montserrat'] font-bold text-2xl text-[#e2e2e2] mb-2">No Groups Available</h2>
          <p className="text-xs text-[#d4c5ab] mb-6">Create an expense group first before adding expenses.</p>
          <button
            onClick={() => setIsNewGroupModalOpen(true)}
            className="bg-[#FFBF00] text-[#402d00] font-bold text-xs px-6 py-3 rounded-xl inline-flex items-center gap-2 hover:bg-[#FFE642] transition-colors glow-button"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            <span>Create Group First</span>
          </button>
        </div>
      ) : (
        /* Main Glass Form Card */
        <div className="glass-card rounded-2xl p-6 md:p-8 w-full max-w-xl relative z-10 border border-[#F2CF7E]/30 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="font-['Montserrat'] font-bold text-3xl md:text-4xl text-[#e2e2e2] mb-2">
              New Expense
            </h1>
            <p className="text-sm text-[#d4c5ab]">Log expense on Aptos &amp; Shelby Protocol</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Select Group */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#d4c5ab] uppercase tracking-wider ml-1">
                Select Group
              </label>
              <div className="rounded-xl bg-[#121414] border border-white/10 p-1">
                <select
                  value={groupId || groups[0]?.id}
                  onChange={(e) => setGroupId(e.target.value)}
                  className="w-full bg-transparent text-[#e2e2e2] font-semibold text-sm p-3 focus:outline-none cursor-pointer"
                >
                  {groups.map((g) => (
                    <option key={g.id} value={g.id} className="bg-[#1e2020] text-[#e2e2e2]">
                      {g.name} ({g.members.length} members)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Amount Input */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-xs rounded-2xl bg-[#121414] border border-[#FFBF00]/40 transition-all duration-300 shadow-inner">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-bold text-xl text-[#d4c5ab]">
                  $
                </span>
                <input
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="0.00"
                  value={amountStr}
                  onChange={(e) => setAmountStr(e.target.value)}
                  required
                  className="w-full bg-transparent text-center font-['Montserrat'] font-bold text-4xl text-[#e2e2e2] py-5 px-10 focus:outline-none placeholder:text-[#333535] appearance-none"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 font-semibold text-xs text-[#FFBF00] bg-[#FFBF00]/10 px-2.5 py-1 rounded-lg border border-[#FFBF00]/30">
                  USD
                </span>
              </div>
            </div>

            {/* Description Input */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#d4c5ab] uppercase tracking-wider ml-1">
                Description
              </label>
              <div className="rounded-xl bg-[#121414] border border-white/10 transition-all focus-within:border-[#FFBF00]">
                <input
                  type="text"
                  placeholder="e.g., Dinner, Grocery Split, Taxi..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="w-full bg-transparent text-[#e2e2e2] text-sm p-4 focus:outline-none placeholder:text-[#504532]"
                />
              </div>
            </div>

            {/* Receipt Upload */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#d4c5ab] uppercase tracking-wider ml-1 flex justify-between">
                <span>Receipt (Stored on Shelby)</span>
                {receiptFile && <span className="text-[#FFE642]">1 File Attached</span>}
              </label>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,application/pdf"
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all ${
                  dragOver
                    ? 'border-[#FFE642] bg-[#FF7900]/20'
                    : receiptFile
                    ? 'border-[#FFBF00] bg-[#FFBF00]/10'
                    : 'border-[#504532] hover:border-[#FFBF00]/50 bg-[#121414]/50 hover:bg-white/5'
                }`}
              >
                {receiptFile ? (
                  <div className="flex items-center gap-3 text-left w-full">
                    <span className="material-symbols-outlined text-3xl text-[#FFE642]">
                      description
                    </span>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-semibold text-[#e2e2e2] truncate">
                        {receiptFile.name}
                      </p>
                      <p className="text-xs text-[#d4c5ab]">
                        {(receiptFile.size / 1024).toFixed(1)} KB · Ready to upload to Shelby Protocol
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setReceiptFile(null);
                      }}
                      className="p-1 rounded-lg hover:bg-white/10 text-[#ffb4ab]"
                    >
                      <span className="material-symbols-outlined text-base">close</span>
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-4xl text-[#d4c5ab] group-hover:text-[#FFE642] transition-colors mb-2">
                      upload_file
                    </span>
                    <p className="text-sm font-medium text-[#e2e2e2]">
                      Drag &amp; drop or click to upload
                    </p>
                    <p className="text-xs text-[#d4c5ab] mt-1">PNG, JPG, PDF (Max 5MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Split Method Segmented Toggle */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#d4c5ab] uppercase tracking-wider ml-1">
                Split Method
              </label>
              <div className="flex bg-[#121414] rounded-xl p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setSplitMethod('equal')}
                  className={`flex-1 py-2.5 font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-2 ${
                    splitMethod === 'equal'
                      ? 'bg-[#1e2020] text-[#FFE642] shadow border border-[#FFBF00]/30'
                      : 'text-[#d4c5ab] hover:text-[#e2e2e2]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">pie_chart</span>
                  <span>Equal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSplitMethod('custom')}
                  className={`flex-1 py-2.5 font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-2 ${
                    splitMethod === 'custom'
                      ? 'bg-[#1e2020] text-[#FFE642] shadow border border-[#FFBF00]/30'
                      : 'text-[#d4c5ab] hover:text-[#e2e2e2]'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">tune</span>
                  <span>Custom</span>
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmittingTx}
                className="w-full py-4 rounded-xl font-bold text-sm text-[#402d00] relative overflow-hidden group transition-all glow-button shadow-xl flex items-center justify-center gap-2 disabled:opacity-60"
                style={{
                  background: 'linear-gradient(135deg, #FFBF00 0%, #FF7900 100%)',
                }}
              >
                {isSubmittingTx ? (
                  <div className="flex items-center gap-2 text-[#261a00]">
                    <span className="material-symbols-outlined animate-spin text-xl">
                      sync
                    </span>
                    <span>{txStepMessage || 'Processing on Shelby...'}</span>
                  </div>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-xl">auto_awesome</span>
                    <span>Save to Shelby</span>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
