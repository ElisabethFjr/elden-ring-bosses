import BackButton from '@/components/BackButton/BackButton';

function NotFound() {
  return (
    <div className="error">
      <h1 className="error-title">Error 404</h1>
      <p className="error-text">Whooops, there is nothing here.</p>
      <BackButton />
    </div>
  );
}

export default NotFound;
