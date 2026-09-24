import { useLocation } from 'react-router-dom';
import { Menu, Sun, Moon, LogOut } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
  onMenuClick: () => void;
  onLogout: () => void;
}

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/meetings': 'Meetings',
  '/ai-review': 'AI Action Item Review',
  '/task-board': 'Task Board',
  '/team': 'Team',
  '/help': 'Help & Support',
};

export default function Header({ onMenuClick, onLogout }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const title = pageTitles[location.pathname] || 'TaskFlow';

  return (
    <header className="sticky top-0 z-20 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {/* Divider */}
        <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-slate-700" />

        {/* User info */}
        <div className="hidden sm:flex items-center gap-2.5">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight">
              Alex Morgan
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 leading-tight">
              Product Manager
            </p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-sky-500/20">
            AM
          </div>
        </div>

        {/* Mobile avatar */}
        <div className="sm:hidden w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
          AM
        </div>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
          aria-label="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
