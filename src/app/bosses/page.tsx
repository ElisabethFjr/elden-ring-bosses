// Import API fetch
import { getAllBosses } from '@/api/api';
// Immport Components
import BossesContainer from '@/components/BossesContainer/BossesContainer';
import PageLayout from '@/components/PageLayout/PageLayout';
// Import Types
import { Boss } from '@/@types';

interface BossesPagesProps {
  searchParams?: {
    query?: string;
  };
}

async function BossesPage({ searchParams }: BossesPagesProps) {
  const query = searchParams?.query || '';

  return (
    <PageLayout subtitle="Bosses">
      <BossesContainer query={query} />
    </PageLayout>
  );
}

export default BossesPage;
