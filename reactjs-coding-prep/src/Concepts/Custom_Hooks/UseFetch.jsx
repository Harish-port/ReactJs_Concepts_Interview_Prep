// Custom hooks in React may seem daunting at first...

// But they are very simple.

// A custom hook is essentially just a block of code containing some reusable logic.

// It's the same as having a function or a class that is used in multiple different places.

// They typically contain React-specific APIs such as useState or useEffect.

// For example, here is a custom hook for detecting if we are on a mobile screen.

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);
  return { data };
};
// Improving the Fetch Hook adding loading message
export const useFetch1 = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const response = await fetch(url);
      const json = await response.json();
      setIsPending(false);
      setData(json);
    };
    fetchData();
  }, [url]);
  return { data, isPending };
};

//adding error handling
export const useFetch2 = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
};
