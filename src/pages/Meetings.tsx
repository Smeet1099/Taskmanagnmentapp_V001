import { Video } from 'lucide-react';
import PagePlaceholder from '@/components/PagePlaceholder';

export default function Meetings() {
  return (
    <PagePlaceholder
      title="Meetings"
      description="View, schedule, and manage all your team meetings."
      icon={<Video className="w-8 h-8" />}
    />
  );
}
