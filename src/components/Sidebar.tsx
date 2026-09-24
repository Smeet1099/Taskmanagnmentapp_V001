import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Video, KanbanSquare, Users, LifeBuoy, X, CheckSquare } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/meetings', label: 'Meetings', icon: Video },
  { to: '/task-board', label: 'Task Board', icon: KanbanSquare },
  { to: '/team', label: 'Team', icon: Users },
  { to: '/help', label: 'Help & Support', icon: LifeBuoy },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 shrink-0 transform transition-transform duration-300 ease-in-out
          bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
          ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md shadow-sky-500/20">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-800 dark:text-white tracking-tight">
              TaskFlow
            </span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                ${isActive
                  ? 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                }
              `}
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-sky-600 dark:text-sky-400' : ''}`} />
                  <span>{label}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-sky-500" />}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-3.5">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              TaskFlow Pro
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              v1.0 — Preview Build
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
