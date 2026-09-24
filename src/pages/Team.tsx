import { Users } from 'lucide-react';
import PagePlaceholder from '@/components/PagePlaceholder';

export default function Team() {
  return (
    <PagePlaceholder
      title="Team"
      description="Manage your team members, roles, and permissions."
      icon={<Users className="w-8 h-8" />}
    />
  );
}
