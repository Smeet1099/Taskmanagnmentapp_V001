import { LifeBuoy } from 'lucide-react';
import PagePlaceholder from '@/components/PagePlaceholder';

export default function HelpSupport() {
  return (
    <PagePlaceholder
      title="Help & Support"
      description="Find answers, browse guides, or contact our support team."
      icon={<LifeBuoy className="w-8 h-8" />}
    />
  );
}
