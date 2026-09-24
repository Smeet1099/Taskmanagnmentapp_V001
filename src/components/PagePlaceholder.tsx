import type { ReactNode } from 'react';

interface PagePlaceholderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export default function PagePlaceholder({ title, description, icon }: PagePlaceholderProps) {
  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {description}
          </p>
        )}
      </div>

      <div className="rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 sm:p-16 flex flex-col items-center justify-center text-center min-h-[400px]">
        {icon && (
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 text-slate-400 dark:text-slate-500">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">
          Coming Soon
        </h3>
        <p className="text-sm text-slate-400 dark:text-slate-500 max-w-md">
          This feature will be added in a future update. Stay tuned — we're working hard to bring it to you.
        </p>
      </div>
    </div>
  );
}
