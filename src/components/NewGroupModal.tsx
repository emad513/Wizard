import React, { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

const ICONS = [
  { id: 'flight_takeoff', label: 'Travel / Flight' },
  { id: 'home', label: 'Apartment / Housing' },
  { id: 'ac_unit', label: 'Ski / Trip' },
  { id: 'restaurant', label: 'Dining / Food' },
  { id: 'celebration', label: 'Party / Event' },
  { id: 'directions_car', label: 'Roadtrip' },
];

export const NewGroupModal: React.FC = () => {
  const { isNewGroupModalOpen, setIsNewGroupModalOpen, createGroup } = useExpenses();

  const [groupName, setGroupName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('flight_takeoff');
  const [membersInput, setMembersInput] = useState('');

  if (!isNewGroupModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupName.trim()) return;

    const memberList = membersInput
      .split(',')
      .map((m) => m.trim())
      .filter((m) => m.length > 0);

    createGroup(groupName.trim(), selectedIcon, memberList);
    setGroupName('');
    setMembersInput('');
    setIsNewGroupModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel rounded-2xl p-6 md:p-8 w-full max-w-lg border border-[#F2CF7E]/30 relative shadow-2xl">
        <button
          onClick={() => setIsNewGroupModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl text-[#d4c5ab] hover:text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <h2 className="font-['Montserrat'] font-bold text-2xl text-[#e2e2e2] mb-1">
          Create New Group
        </h2>
        <p className="text-xs text-[#d4c5ab] mb-6">
          Set up a shared expense vault for your trip, house, or event.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Group Name */}
          <div>
            <label className="text-xs font-semibold text-[#d4c5ab] uppercase tracking-wider block mb-1.5">
              Group Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Tokyo Adventure 2026"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full bg-[#121414] border border-white/10 rounded-xl p-3.5 text-sm text-[#e2e2e2] focus:outline-none focus:border-[#FFBF00]"
            />
          </div>

          {/* Group Icon Picker */}
          <div>
            <label className="text-xs font-semibold text-[#d4c5ab] uppercase tracking-wider block mb-1.5">
              Group Icon
            </label>
            <div className="grid grid-cols-6 gap-2">
              {ICONS.map((icon) => (
                <button
                  key={icon.id}
                  type="button"
                  onClick={() => setSelectedIcon(icon.id)}
                  className={`p-3 rounded-xl flex items-center justify-center transition-all ${
                    selectedIcon === icon.id
                      ? 'bg-[#FFBF00] text-[#402d00] shadow-lg scale-105'
                      : 'bg-[#121414] text-[#d4c5ab] border border-white/10 hover:border-[#FFBF00]/40'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{icon.id}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Members Input */}
          <div>
            <label className="text-xs font-semibold text-[#d4c5ab] uppercase tracking-wider block mb-1.5">
              Members (comma separated names)
            </label>
            <input
              type="text"
              placeholder="e.g., Sarah, Alex, Marcus"
              value={membersInput}
              onChange={(e) => setMembersInput(e.target.value)}
              className="w-full bg-[#121414] border border-white/10 rounded-xl p-3.5 text-sm text-[#e2e2e2] focus:outline-none focus:border-[#FFBF00]"
            />
            <p className="text-[11px] text-[#d4c5ab] mt-1">
              You (Wizard Admin) are automatically included as group owner.
            </p>
          </div>

          <div className="pt-3 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsNewGroupModalOpen(false)}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#d4c5ab] hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-[#FFBF00] text-[#402d00] hover:bg-[#FFE642] glow-button transition-all"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
