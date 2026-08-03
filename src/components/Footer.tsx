import React from 'react';
import { WizardLogo } from './WizardLogo';

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-8 md:py-10 relative overflow-hidden border-t border-[#FFBF00]/30 mt-auto text-white"
      style={{ backgroundColor: '#FF7900' }}
    >
      {/* Subtle Logo Watermark Background */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <WizardLogo size={380} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
        {/* Left Side: Built by Emad */}
        <div className="flex flex-col gap-3">
          <h3 className="font-['Montserrat'] font-bold text-2xl md:text-3xl text-white tracking-tight">
            Built by Emad
          </h3>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/emad513"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Emad's GitHub"
              className="text-[#F2CF7E] icon-hover-glow flex items-center justify-center w-11 h-11 rounded-full bg-black/15 border border-[#F2CF7E]/40 hover:border-[#FFE642] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">code</span>
            </a>
            <a
              href="https://x.com/emad513"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Emad's X (Twitter)"
              className="text-[#F2CF7E] icon-hover-glow flex items-center justify-center w-11 h-11 rounded-full bg-black/15 border border-[#F2CF7E]/40 hover:border-[#FFE642] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">tag</span>
            </a>
          </div>
        </div>

        {/* Right Side: Built on Shelby Network */}
        <div className="flex flex-col md:items-end gap-3">
          <span className="font-['Montserrat'] font-semibold text-xs md:text-sm text-[#F2CF7E] tracking-widest uppercase">
            &amp; Shelby Network
          </span>
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            {/* Website */}
            <a
              href="https://shelby.xyz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shelby Website"
              className="text-[#F2CF7E] icon-hover-glow flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/15 border border-[#F2CF7E]/40 hover:border-[#FFE642] transition-all text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-base">language</span>
              <span className="hidden sm:inline">Website</span>
            </a>

            {/* Docs */}
            <a
              href="https://docs.shelby.xyz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shelby Docs"
              className="text-[#F2CF7E] icon-hover-glow flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/15 border border-[#F2CF7E]/40 hover:border-[#FFE642] transition-all text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-base">description</span>
              <span className="hidden sm:inline">Docs</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/shelby"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shelby GitHub"
              className="text-[#F2CF7E] icon-hover-glow flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/15 border border-[#F2CF7E]/40 hover:border-[#FFE642] transition-all text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-base">code_blocks</span>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/shelbyserves"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shelby Discord"
              className="text-[#F2CF7E] icon-hover-glow flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/15 border border-[#F2CF7E]/40 hover:border-[#FFE642] transition-all text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-base">forum</span>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/shelbyserves"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Shelby X"
              className="text-[#F2CF7E] icon-hover-glow flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/15 border border-[#F2CF7E]/40 hover:border-[#FFE642] transition-all text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-base">share</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
