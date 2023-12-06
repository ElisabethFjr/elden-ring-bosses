import Button from '@/components/Button/Button';

function NotFound() {
  return (
    <div className="error">
      <h1 className="error-title">Error 404</h1>
      <p className="error-text">Whooops, there is nothing here.</p>
      <Button text="Back" />
    </div>
  );
}

export default NotFound;
