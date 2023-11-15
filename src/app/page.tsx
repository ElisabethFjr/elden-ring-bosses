import './page.scss';

export default function Home() {
  return (
    <main className="main">
      <section className="home">
        <div className="home-container">
          <h1 className="home-title">
            <span className="home-title-maj">E</span>
            lden Rin
            <span className="home-title-maj">g</span>
          </h1>
          <h2 className="home-subtitle">Journey through the Lands Between and discover all bosses from the renowned FromSoftware&apos;s video game.</h2>
          <button className="home-btn" type="button">All Bosses</button>
        </div>
      </section>
      <section className="bosses">
        <div className="bosses-list" />
      </section>
    </main>
  );
}
