import { useState, useEffect } from "react";

export default function NotFound() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev === 0) {
          window.location.href = "/";
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Ooops, it seems you are lost</h1>
      <p>Redirecting you to the home page in {counter} seconds</p>
    </>
  );
}
