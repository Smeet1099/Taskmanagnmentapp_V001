import { CheckCircle2, Clock, ListTodo, AlertTriangle, CalendarClock, CalendarDays } from 'lucide-react';
import type { ReactNode } from 'react';
import TaskRow from '@/components/TaskRow';
import { type Task, assignees } from '@/data/tasks';

const allTasks: Task[] = [
  { id: '1', name: 'Finalize Q4 product roadmap', assignee: assignees.smeet, priority: 'High', dueDate: 'Sep 24', status: 'In Progress' },
  { id: '2', name: 'Review marketing campaign assets', assignee: assignees.jessica, priority: 'Medium', dueDate: 'Sep 24', status: 'To Do' },
  { id: '3', name: 'Send weekly stakeholder update', assignee: assignees.marcus, priority: 'Low', dueDate: 'Sep 24', status: 'To Do' },
  { id: '4', name: 'Fix login page responsive bugs', assignee: assignees.priya, priority: 'Urgent', dueDate: 'Sep 24', status: 'In Progress' },

  { id: '5', name: 'Prepare investor pitch deck', assignee: assignees.david, priority: 'High', dueDate: 'Sep 20', status: 'In Progress' },
  { id: '6', name: 'Update API documentation', assignee: assignees.linda, priority: 'Medium', dueDate: 'Sep 18', status: 'To Do' },
  { id: '7', name: 'Conduct user research interviews', assignee: assignees.jessica, priority: 'Medium', dueDate: 'Sep 22', status: 'In Progress' },
  { id: '8', name: 'Migrate database to new schema', assignee: assignees.marcus, priority: 'Urgent', dueDate: 'Sep 15', status: 'To Do' },

  { id: '9', name: 'Plan team offsite agenda', assignee: assignees.smeet, priority: 'Low', dueDate: 'Sep 26', status: 'To Do' },
  { id: '10', name: 'Design onboarding flow v2', assignee: assignees.priya, priority: 'High', dueDate: 'Sep 28', status: 'To Do' },
  { id: '11', name: 'Set up CI/CD pipeline', assignee: assignees.david, priority: 'Medium', dueDate: 'Sep 30', status: 'In Progress' },
  { id: '12', name: 'Write blog post on new features', assignee: assignees.linda, priority: 'Low', dueDate: 'Oct 1', status: 'To Do' },

  { id: '13', name: 'Complete security audit report', assignee: assignees.marcus, priority: 'High', dueDate: 'Sep 23', status: 'Completed' },
  { id: '14', name: 'Launch customer feedback survey', assignee: assignees.jessica, priority: 'Medium', dueDate: 'Sep 21', status: 'Completed' },
];

const dueToday = allTasks.filter((t) => t.dueDate === 'Sep 24');
const overdue = allTasks.filter((t) => ['Sep 15', 'Sep 18', 'Sep 20', 'Sep 22'].includes(t.dueDate) && t.status !== 'Completed');
const upcoming = allTasks.filter((t) => ['Sep 26', 'Sep 28', 'Sep 30', 'Oct 1'].includes(t.dueDate));

const toDoCount = allTasks.filter((t) => t.status === 'To Do').length;
const inProgressCount = allTasks.filter((t) => t.status === 'In Progress').length;
const completedCount = allTasks.filter((t) => t.status === 'Completed').length;

interface SummaryCardProps {
  label: string;
  count: number;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
}

function SummaryCard({ label, count, icon, iconBg, iconColor }: SummaryCardProps) {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <p className="text-3xl font-bold text-slate-800 dark:text-white mt-1.5 tracking-tight">{count}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

interface TaskSectionProps {
  title: string;
  count: number;
  icon: ReactNode;
  iconColor: string;
  children: ReactNode;
  warning?: boolean;
}

function TaskSection({ title, count, icon, iconColor, children, warning }: TaskSectionProps) {
  return (
    <div
      className={`rounded-2xl bg-white dark:bg-slate-900 border shadow-sm overflow-hidden ${
        warning
          ? 'border-rose-200 dark:border-rose-500/30'
          : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2.5">
          <span className={iconColor}>{icon}</span>
          <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">{title}</h3>
          {warning && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-500/15 text-rose-600 dark:text-rose-400 text-xs font-medium">
              <AlertTriangle className="w-3 h-3" />
              Action needed
            </span>
          )}
        </div>
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">
          {count}
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto">
      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
          Good morning, Smeet
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Here's what's happening with your tasks today, September 24.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <SummaryCard
          label="To Do"
          count={toDoCount}
          icon={<ListTodo className="w-6 h-6" />}
          iconBg="bg-slate-100 dark:bg-slate-800"
          iconColor="text-slate-500 dark:text-slate-400"
        />
        <SummaryCard
          label="In Progress"
          count={inProgressCount}
          icon={<Clock className="w-6 h-6" />}
          iconBg="bg-sky-100 dark:bg-sky-500/15"
          iconColor="text-sky-600 dark:text-sky-400"
        />
        <SummaryCard
          label="Completed"
          count={completedCount}
          icon={<CheckCircle2 className="w-6 h-6" />}
          iconBg="bg-emerald-100 dark:bg-emerald-500/15"
          iconColor="text-emerald-600 dark:text-emerald-400"
        />
      </div>

      {/* Task sections */}
      <div className="space-y-6">
        {/* Due Today */}
        <TaskSection
          title="Due Today"
          count={dueToday.length}
          icon={<Clock className="w-4 h-4" />}
          iconColor="text-sky-500"
        >
          {dueToday.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TaskSection>

        {/* Overdue */}
        <TaskSection
          title="Overdue"
          count={overdue.length}
          icon={<AlertTriangle className="w-4 h-4" />}
          iconColor="text-rose-500"
          warning
        >
          {overdue.map((task) => (
            <TaskRow key={task.id} task={task} isOverdue />
          ))}
        </TaskSection>

        {/* Upcoming */}
        <TaskSection
          title="Upcoming"
          count={upcoming.length}
          icon={<CalendarDays className="w-4 h-4" />}
          iconColor="text-violet-500"
        >
          {upcoming.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </TaskSection>
      </div>
    </div>
  );
}
