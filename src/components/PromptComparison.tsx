import type { ReactNode } from 'react';

const PromptBox = ({ type, prompt, response }: { type: 'bad' | 'good', prompt: string, response: ReactNode }) => {
  const isBad = type === 'bad';
  const accentColor = isBad ? 'border-red-500' : 'border-primary-500';
  const icon = isBad ? 'ri-close-circle-line text-red-500' : 'ri-check-double-line text-primary-500';

  return (
    <div className={`border-l-4 ${accentColor} p-6 bg-slate-50 rounded-lg`}>
      <div className="flex items-center gap-3 mb-4">
        <i className={icon}></i>
        <h4 className="font-semibold text-slate-700">{isBad ? 'Prompt Ineficaz' : 'Prompt Optimizado'}</h4>
      </div>
      <p className="italic text-slate-500 mb-4">"{prompt}"</p>
      <div className="border-t border-slate-200 pt-4">
        <p className="text-slate-600">{response}</p>
      </div>
    </div>
  );
};

type PromptComparisonProps = {
  badPrompt: string;
  badResponse: ReactNode;
  goodPrompt: string;
  goodResponse: ReactNode;
};

export function PromptComparison({ badPrompt, badResponse, goodPrompt, goodResponse }: PromptComparisonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <PromptBox type="bad" prompt={badPrompt} response={badResponse} />
      <PromptBox type="good" prompt={goodPrompt} response={goodResponse} />
    </div>
  );
}