import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Fetches `path` from the backend API. If the request fails (API not
// running, network error, etc.) it falls back to `fallback` so the UI
// still renders real content instead of breaking.
export function useApi(path, fallback) {
  const [data, setData] = useState(fallback);
  const [source, setSource] = useState("fallback"); // "api" | "fallback"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${API_BASE}${path}`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        if (!cancelled) {
          setData(json);
          setSource("api");
        }
      } catch (err) {
        if (!cancelled) {
          setData(fallback);
          setSource("fallback");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return { data, source, loading };
}

export { API_BASE };
