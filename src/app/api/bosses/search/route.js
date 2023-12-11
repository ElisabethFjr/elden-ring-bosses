import axiosInstance from '@/utils/axios';

async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get('name')?.toLowerCase() || '';
    const results = await axiosInstance.get('/bosses', {
      params: {
        name: searchTerm,
      },
    });
    res.status(200).json(results.data);
  } catch (error) {
    console.error('Error fetching bosses:', error);
    res.status(404).json({ error: 'No results found.' });
  }
}

export default GET;
