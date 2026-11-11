import { Bot } from 'lucide-react';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2 select-none" aria-label="CODELAB">
      <div className="shrink-0 grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-[0_4px_0_0_#6d28d9] -rotate-6">
        <Bot size={24} strokeWidth={2.5} />
      </div>
      {!compact && (
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-display text-2xl tracking-wide leading-none">
              <span className="text-violet-700">CODE</span>
              <span className="text-fuchsia-500">LAB</span>
            </span>
            <span className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
              Edición LabTech
            </span>
          </div>
          <p className="text-xs font-bold leading-tight text-slate-500">
            <span className="font-extrabold text-violet-700">UABC · FCITEC</span>
            <span className="text-slate-300"> | </span>
            Hecho por Jofiel Ramirez y Lenin Baku
          </p>
        </div>
      )}
    </div>
  );
}
