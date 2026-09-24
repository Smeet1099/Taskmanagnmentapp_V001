import type { Priority, Status } from '@/data/tasks';
import { AlertTriangle } from 'lucide-react';

const priorityStyles: Record<Priority, string> = {
  Low: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
  Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
  High: 'bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400',
  Urgent: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400',
};

const statusStyles: Record<Status, string> = {
  'To Do': 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
  'In Progress': 'bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400',
  Completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
};

const statusDot: Record<Status, string> = {
  'To Do': 'bg-slate-400',
  'In Progress': 'bg-sky-500',
  Completed: 'bg-emerald-500',
};

interface TaskRowProps {
  task: import('@/data/tasks').Task;
  isOverdue?: boolean;
}

export default function TaskRow({ task, isOverdue }: TaskRowProps) {
  return (
    <div
      className={`
        flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-4 py-3.5
        border-b border-slate-100 dark:border-slate-800 last:border-b-0
        transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50
        ${isOverdue ? 'bg-rose-50/50 dark:bg-rose-500/5' : ''}
      `}
    >
      {/* Task name */}
      <div className="flex items-center gap-2.5 flex-1 min-w-0">
        {isOverdue && (
          <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
        )}
        <span
          className={`text-sm font-medium truncate ${
            task.status === 'Completed'
              ? 'text-slate-400 dark:text-slate-500 line-through'
              : 'text-slate-700 dark:text-slate-200'
          }`}
        >
          {task.name}
        </span>
      </div>

      {/* Assignee avatar */}
      <div className="flex items-center gap-2 sm:w-32 shrink-0">
        <div
          className={`w-7 h-7 rounded-full bg-gradient-to-br ${task.assignee.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}
        >
          {task.assignee.initials}
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 truncate hidden sm:inline">
          {task.assignee.name}
        </span>
      </div>

      {/* Priority badge */}
      <div className="sm:w-24 shrink-0">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${priorityStyles[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>

      {/* Due date */}
      <div className={`text-xs font-medium sm:w-28 shrink-0 ${isOverdue ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500 dark:text-slate-400'}`}>
        {task.dueDate}
      </div>

      {/* Status badge */}
      <div className="sm:w-32 shrink-0">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[task.status]}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${statusDot[task.status]}`} />
          {task.status}
        </span>
      </div>
    </div>
  );
}
