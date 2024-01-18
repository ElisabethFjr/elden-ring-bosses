'use client';

export interface ErrorProps {
  reset: () => void;
}

function Error({ reset }: ErrorProps) {
  return (
    <div className="error">
      <h1 className="error-title">Error</h1>
      <p className="error-text">
        Whooops, an error has occurred. Please try again.
      </p>
      <button className="error-btn" type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}

export default Error;
