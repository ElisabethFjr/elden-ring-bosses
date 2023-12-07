import Link from 'next/link';

function NotFound() {
  return (
    <div className="error">
      <h1 className="error-title">Error 404</h1>
      <p className="error-text">Whooops, there is nothing here.</p>
      <Link className="error-back-btn" href="/">
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;
