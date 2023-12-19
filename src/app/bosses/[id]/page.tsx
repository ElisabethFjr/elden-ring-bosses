import PageLayout from '@/components/PageLayout/PageLayout';
import styles from './BossPage.module.scss';

export interface BossPageProps {
  params: {
    id: number;
  };
}

function BossPage({ params }: BossPageProps) {
  return (
    <PageLayout subtitle="Boss">
      <p>{params.id}</p>
    </PageLayout>
  );
}

export default BossPage;
