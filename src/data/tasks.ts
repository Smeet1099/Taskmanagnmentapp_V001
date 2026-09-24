export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';
export type Status = 'To Do' | 'In Progress' | 'Completed';

export interface Assignee {
  name: string;
  initials: string;
  color: string;
}

export interface Task {
  id: string;
  name: string;
  assignee: Assignee;
  priority: Priority;
  dueDate: string;
  status: Status;
}

export const assignees: Record<string, Assignee> = {
  smeet: { name: 'Smeet Patel', initials: 'SP', color: 'from-sky-500 to-blue-600' },
  jessica: { name: 'Jessica Chen', initials: 'JC', color: 'from-emerald-500 to-teal-600' },
  marcus: { name: 'Marcus Reed', initials: 'MR', color: 'from-amber-500 to-orange-600' },
  priya: { name: 'Priya Sharma', initials: 'PS', color: 'from-rose-500 to-pink-600' },
  david: { name: 'David Kim', initials: 'DK', color: 'from-violet-500 to-purple-600' },
  linda: { name: 'Linda Garcia', initials: 'LG', color: 'from-cyan-500 to-sky-600' },
};
