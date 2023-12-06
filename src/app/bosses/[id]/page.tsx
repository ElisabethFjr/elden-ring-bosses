export interface BossPageProps {
  params: {
    id: number;
  };
}

function BossPage({ params }: BossPageProps) {
  return (
    <div className="boss">
      <h1>Boss name</h1>
      <p>{params.id}</p>
    </div>
  );
}

export default BossPage;
