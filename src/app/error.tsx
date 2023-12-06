'use client';

import Button from '@/components/Button/Button';

function Error() {
  return (
    <div className="error">
      <h1 className="error-title">Error</h1>
      <p className="error-text">
        Whooops, an error has occurred. Please try again later.
      </p>
      <Button text="Back" />
    </div>
  );
}

export default Error;
