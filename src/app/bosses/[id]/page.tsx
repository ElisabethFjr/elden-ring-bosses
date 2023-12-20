import { Suspense } from 'react';
// Import Navigation
import { notFound } from 'next/navigation';
// Import Utils
import axiosInstance from '@/utils/axios';
// Import Components
import PageLayout from '@/components/PageLayout/PageLayout';
import BossDetail from '@/components/BossDetail/BossDetail';

export const dynamic = 'force-static';

export interface BossPageProps {
  params: {
    id: string;
  };
}

async function BossPage({ params }: BossPageProps) {
  const getBossInfos = async () => {
    try {
      const { data } = await axiosInstance.get(`/bosses/${params.id}`);
      return data.data;
    } catch (error) {
      console.error('Failed fetching bosses:', error);
      throw new Error();
    }
  };

  const boss = await getBossInfos();

  if (!boss.id) {
    return notFound();
  }

  return (
    <PageLayout subtitle="Boss">
      <Suspense fallback={<p>Loading...</p>}>
        <BossDetail boss={boss} />
      </Suspense>
    </PageLayout>
  );
}

export default BossPage;
