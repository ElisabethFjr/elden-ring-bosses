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
    // Filter duplicate bosses
    const filteredBosses = data.data.filter(
      (boss: Boss) =>
        boss.id !== '17f69d0313fl0i1uk8pokynv71bkz8' &&
        boss.id !== '17f69d4387al0i1ulpqqumwqw05j3c'
    );
    return filteredBosses;
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
async function getBossesByName(query: string) {
  noStore();
  try {
    const response = await fetch(`${apiUrl}/bosses?limit=100?name=${query}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch bosses with name ${query}: ${response.status}`
      );
    }
    const data = await response.json();
    // Filter duplicate bosses
    const filteredBosses = data.data.filter(
      (boss: Boss) =>
        boss.id !== '17f69d0313fl0i1uk8pokynv71bkz8' &&
        boss.id !== '17f69d4387al0i1ulpqqumwqw05j3c'
    );
    return filteredBosses;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch bosses with name ${query}`);
  }
}

export { getAllBosses, getBossById, getBossesByName };
