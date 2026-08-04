import React from 'react';
import { WizardLogo } from './WizardLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full relative mt-auto pt-10 pb-12 overflow-hidden bg-[#1e2020] border-t border-[#FFBF00]/30 text-white">
      {/* Background Gradient Accent Glows */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#FF7900]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFBF00]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle Decorative Wizard Logo Watermark */}
      <div className="absolute right-4 bottom-2 opacity-[0.07] pointer-events-none transform translate-x-12 translate-y-8">
        <WizardLogo size={320} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Main Asymmetric Grid Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Creator Feature Card (Spans 5 cols) */}
          <div className="lg:col-span-5 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-[#FF7900] via-[#ea6c00] to-[#c75d00] border border-[#FFBF00]/40 shadow-[0_8px_32px_rgba(255,121,0,0.25)] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#FFE642]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 border border-[#F2CF7E]/40 text-[#FFE642] text-[11px] font-mono font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FFE642] animate-pulse" />
                <span>Wizard Protocol Creator</span>
              </div>

              <h3 className="font-['Montserrat'] font-extrabold text-2xl md:text-3xl text-white tracking-tight leading-snug mb-2">
                Forged &amp; Shipped by Emad
              </h3>

              <p className="text-xs text-[#F2CF7E] leading-relaxed max-w-sm">
                Decentralized, trustless group expense tracking built on Aptos &amp; Shelby Protocol blob storage.
              </p>
            </div>

            {/* Developer Action Buttons with Small Labels */}
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center gap-3">
              <a
                href="https://github.com/emad513"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Emad's GitHub"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black/25 hover:bg-black/40 border border-[#F2CF7E]/40 hover:border-[#FFE642] text-xs font-bold text-[#FFE642] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">code</span>
                <span>GitHub</span>
              </a>

              <a
                href="https://x.com/emad513"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Emad's X (Twitter)"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black/25 hover:bg-black/40 border border-[#F2CF7E]/40 hover:border-[#FFE642] text-xs font-bold text-[#FFE642] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-base">alternate_email</span>
                <span>X / Twitter</span>
              </a>
            </div>
          </div>

          {/* Shelby Network Ecosystem Panel (Spans 7 cols) */}
          <div className="lg:col-span-7 rounded-2xl p-6 md:p-8 bg-[#121414]/90 backdrop-blur-xl border border-[#FFBF00]/25 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFBF00]/20 border border-[#FFBF00]/40 flex items-center justify-center text-[#FFE642]">
                    <span className="material-symbols-outlined text-lg">dns</span>
                  </div>
                  <div>
                    <h4 className="font-['Montserrat'] font-bold text-base text-[#e2e2e2]">
                      Shelby Network Ecosystem
                    </h4>
                    <p className="text-[11px] text-[#d4c5ab] font-mono">
                      High-throughput, decentralized storage layer
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-[#FFE642]/10 border border-[#FFE642]/30 text-[#FFE642] text-[10px] font-mono font-bold uppercase">
                  Aptos Testnet
                </span>
              </div>

              {/* Grid of Links with Icon + Labels */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {/* Website */}
                <a
                  href="https://shelby.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#1e2020] hover:bg-[#282a2a] border border-white/5 hover:border-[#FFBF00]/50 transition-all group flex flex-col items-start gap-1.5"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="material-symbols-outlined text-xl text-[#FFBF00] group-hover:text-[#FFE642] transition-colors">
                      language
                    </span>
                    <span className="material-symbols-outlined text-xs text-[#d4c5ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      north_east
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#e2e2e2]">Website</span>
                  <span className="text-[10px] text-[#d4c5ab] font-mono">shelby.xyz</span>
                </a>

                {/* Docs */}
                <a
                  href="https://docs.shelby.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#1e2020] hover:bg-[#282a2a] border border-white/5 hover:border-[#FFBF00]/50 transition-all group flex flex-col items-start gap-1.5"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="material-symbols-outlined text-xl text-[#FFBF00] group-hover:text-[#FFE642] transition-colors">
                      description
                    </span>
                    <span className="material-symbols-outlined text-xs text-[#d4c5ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      north_east
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#e2e2e2]">Docs</span>
                  <span className="text-[10px] text-[#d4c5ab] font-mono">SDK &amp; Guides</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/shelby"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#1e2020] hover:bg-[#282a2a] border border-white/5 hover:border-[#FFBF00]/50 transition-all group flex flex-col items-start gap-1.5"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="material-symbols-outlined text-xl text-[#FFBF00] group-hover:text-[#FFE642] transition-colors">
                      code_blocks
                    </span>
                    <span className="material-symbols-outlined text-xs text-[#d4c5ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      north_east
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#e2e2e2]">GitHub</span>
                  <span className="text-[10px] text-[#d4c5ab] font-mono">Open Source</span>
                </a>

                {/* Discord */}
                <a
                  href="https://discord.gg/shelbyserves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#1e2020] hover:bg-[#282a2a] border border-white/5 hover:border-[#FFBF00]/50 transition-all group flex flex-col items-start gap-1.5"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="material-symbols-outlined text-xl text-[#FFBF00] group-hover:text-[#FFE642] transition-colors">
                      forum
                    </span>
                    <span className="material-symbols-outlined text-xs text-[#d4c5ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      north_east
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#e2e2e2]">Discord</span>
                  <span className="text-[10px] text-[#d4c5ab] font-mono">Community</span>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/shelbyserves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#1e2020] hover:bg-[#282a2a] border border-white/5 hover:border-[#FFBF00]/50 transition-all group flex flex-col items-start gap-1.5 col-span-2 sm:col-span-2"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="material-symbols-outlined text-xl text-[#FFBF00] group-hover:text-[#FFE642] transition-colors">
                      share
                    </span>
                    <span className="material-symbols-outlined text-xs text-[#d4c5ab] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      north_east
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#e2e2e2]">X / Twitter</span>
                  <span className="text-[10px] text-[#d4c5ab] font-mono">@shelbyserves</span>
                </a>
              </div>
            </div>

            {/* Bottom copyright line */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#d4c5ab]">
              <span>Wizard Protocol © {new Date().getFullYear()}</span>
              <span className="font-mono text-[10px] text-[#F2CF7E]">Freshly Squeezed Palette</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
