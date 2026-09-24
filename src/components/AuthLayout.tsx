import type { ReactNode } from 'react';
import { CheckSquare } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-sky-600 via-blue-600 to-blue-800 p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <CheckSquare className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">TaskFlow</span>
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Manage your meetings<br />and tasks in one place.
          </h2>
          <p className="text-sky-100 text-lg max-w-md leading-relaxed">
            Track action items, collaborate with your team, and turn meeting notes into completed work — effortlessly.
          </p>
          <div className="flex items-center gap-6 pt-4">
            {['Meetings', 'Tasks', 'Teams'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-300" />
                <span className="text-sm text-sky-50 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative z-10 text-sm text-sky-200">
          © 2026 TaskFlow. All rights reserved.
        </p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white dark:bg-slate-950">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md shadow-sky-500/20">
              <CheckSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">TaskFlow</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">{title}</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 mb-8">{subtitle}</p>

          {children}
        </div>
      </div>
    </div>
  );
}
