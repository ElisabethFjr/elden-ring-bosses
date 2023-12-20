// Import Utils
import axiosInstance from '@/utils/axios';
// Immport Components
import BossesContainer from '@/components/BossesContainer/BossesContainer';
import PageLayout from '@/components/PageLayout/PageLayout';
// Import Types
import { Boss } from '@/@types';

async function BossesPage() {
  const getAllBosses = async () => {
    try {
      const { data } = await axiosInstance.get('/bosses?limit=100');
      return data.data;
    } catch (error) {
      console.error('Failed fetching bosses:', error);
      throw new Error();
    }
  };

  const bosses = await getAllBosses();
  // Filter duplicate bosses
  const filteredBosses = bosses.filter(
    (boss: Boss) =>
      boss.id !== '17f69d0313fl0i1uk8pokynv71bkz8' &&
      boss.id !== '17f69d4387al0i1ulpqqumwqw05j3c'
  );

  return (
    <PageLayout subtitle="Bosses">
      <BossesContainer bosses={filteredBosses} />
    </PageLayout>
  );
}

export default BossesPage;
