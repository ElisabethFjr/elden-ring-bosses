// Import API fetch
import { getBossById } from '@/api/api';
// Import Suspense
import { Suspense } from 'react';
// Import Navigation
import { notFound } from 'next/navigation';
// Import Components
import PageLayout from '@/components/PageLayout/PageLayout';
import BossDetail from '@/components/BossDetail/BossDetail';
import BackButton from '@/components/BackButton/BackButton';

export interface BossPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BossPageProps) {
  const boss = await getBossById(params.id);

  return {
    title: boss.name,
  };
}

async function BossPage({ params }: BossPageProps) {
  const boss = await getBossById(params.id);

  if (!boss.id) {
    return notFound();
  }

  return (
    <PageLayout subtitle="Boss">
      <Suspense fallback={<p>Loading...</p>}>
        <BossDetail boss={boss} />
        <BackButton />
      </Suspense>
    </PageLayout>
  );
}

export default BossPage;
