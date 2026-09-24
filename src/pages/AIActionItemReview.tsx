import { Sparkles } from 'lucide-react';
import PagePlaceholder from '@/components/PagePlaceholder';

export default function AIActionItemReview() {
  return (
    <PagePlaceholder
      title="AI Action Item Review"
      description="Review and approve AI-extracted action items from your meetings."
      icon={<Sparkles className="w-8 h-8" />}
    />
  );
}
