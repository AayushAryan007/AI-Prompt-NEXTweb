"use client"; //Error component must be a client component
import { useEffect } from "react";
const error = ({ error, reset }) => {
  useEffect(() => {
    //log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          //attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try Again
      </button>
    </div>
  );
};
