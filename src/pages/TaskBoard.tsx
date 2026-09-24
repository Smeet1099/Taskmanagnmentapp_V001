import { KanbanSquare } from 'lucide-react';
import PagePlaceholder from '@/components/PagePlaceholder';

export default function TaskBoard() {
  return (
    <PagePlaceholder
      title="Task Board"
      description="Organize and track your tasks across columns and sprints."
      icon={<KanbanSquare className="w-8 h-8" />}
    />
  );
}
