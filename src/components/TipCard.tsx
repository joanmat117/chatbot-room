import type { ReactNode } from 'react';

type TipCardProps = {
  icon: string;
  title: string;
  children: ReactNode;
};

export function TipCard({ icon, title, children }: TipCardProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-primary-100 text-primary-600 rounded-full p-3">
          <i className={`ri-${icon}-line text-2xl grid place-content-center size-6`}></i>
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      </div>
      <p className="text-slate-600">
        {children}
      </p>
    </div>
  );
}