import { useState } from "react";

// The Custom Hooks allows us to abstract the logic from the UI.

export default function useFetch(url, ...options) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  return {
    loading,
    setLoading,
    response,
    getData: () => {
      return fetch(url, ...options)
        .then((data) => data.json())
        .then((data) => setResponse(data));
    },
  };
}
