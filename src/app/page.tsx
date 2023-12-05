import axiosInstance from '@/utils/axios';

import { Boss } from '@/@types';

import './page.scss';

const getAllBosses = async () => {
  try {
    const { data } = await axiosInstance.get('/bosses?limit=106');
    return data.data;
  } catch (error) {
    console.error('Failed fetching bosses:', error);
    throw new Error();
  }
};

async function Home() {
  const bosses = await getAllBosses();

  const bossesList = bosses.map((boss: Boss) => (
    <li className="bosses-list-item" key={boss.id}>
      {boss.name}
    </li>
  ));

  return (
    <>
      <section className="home">
        <div className="home-container">
          <h1 className="home-title">
            <span className="home-title-maj">E</span>
            lden Rin
            <span className="home-title-maj">g</span>
          </h1>
          <h2 className="home-subtitle">
            Journey through the Lands Between and discover all bosses from the
            renowned FromSoftware&apos;s video game.
          </h2>
          <button className="home-btn" type="button">
            All Bosses
          </button>
        </div>
      </section>
      <section className="bosses">
        <div className="bosses-list">
          <ul>{bossesList}</ul>
        </div>
      </section>
    </>
  );
}

export default Home;
