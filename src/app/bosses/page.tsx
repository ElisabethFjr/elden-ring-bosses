// Import Utils
import axiosInstance from '@/utils/axios';
// Immport Components
import BossesContainer from '@/components/BossesContainer/BossesContainer';
import PageLayout from '@/components/PageLayout/PageLayout';
// Import Styles

async function BossesPage() {
  const getAllBosses = async () => {
    try {
      const { data } = await axiosInstance.get('/bosses?limit=100');
      console.log(data.data);

      return data.data;
    } catch (error) {
      console.error('Failed fetching bosses:', error);
      throw new Error();
    }
  };

  const bosses = await getAllBosses();

  return (
    <PageLayout subtitle="Bosses">
      <BossesContainer bosses={bosses} />
    </PageLayout>
  );
}

export default BossesPage;
