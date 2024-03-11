import { Boss } from '@/@types';
import { unstable_noStore as noStore } from 'next/cache';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Fetch All Bosses
async function getAllBosses() {
  noStore();
  try {
    const response = await fetch(`${apiUrl}/bosses?limit=100`);
    if (!response.ok) {
      throw new Error(`Failed to fetch bosses: ${response.status}`);
    }
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch bosses');
  }
}

// Fetch A Boss with his id
async function getBossById(bossId: string) {
  noStore();
  try {
    const response = await fetch(`${apiUrl}/bosses/${bossId}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch boss with ID ${bossId}: ${response.status}`
      );
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch boss with ID ${bossId}`);
  }
}

// Fetch bosses filtered by name
async function getFilteredBosses(query: string, page: number, limit: number) {
  noStore();
  try {
    const response = await fetch(
      `${apiUrl}/bosses?limit=${limit}&page=${page - 1}&name=${query}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch bosses with name ${query}: ${response.status}`
      );
    }

    const data = await response.json();
    console.log('Bosses trouvés', data.data);

    return { bosses: data.data };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch bosses with name ${query}`);
  }
}

// Fetch the number of filtered bosses found with query string
async function getNbOfFileteredBosses(query: string) {
  noStore();
  try {
    const response = await fetch(`${apiUrl}/bosses?limit=120&name=${query}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch bosses with name ${query}: ${response.status}`
      );
    }

    const data = await response.json();
    console.log('Nombre de bosses trouvés', data.data.length);

    return { totalBosses: data.data.length };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch bosses with name ${query}`);
  }
}

export { getAllBosses, getBossById, getFilteredBosses, getNbOfFileteredBosses };
