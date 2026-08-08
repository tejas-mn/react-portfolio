import { useEffect, useState } from "react"
import { cacheManager } from "../utils/cacheManager"

export default function useFetch(url, requestOptions, cacheDuration = 3600000) { // Default 1 hour cache
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const FALLBACK_JSON_URL = "/data.json";

    const fetchJson = async (fetchUrl) => {
        const response = await fetch(fetchUrl, requestOptions);
        if (!response.ok) {
            throw new Error(`Fetch failed with status ${response.status} for ${fetchUrl}`);
        }
        return await response.json();
    };

    const fetchData = async () => {
        try {
            const cachedData = cacheManager.get(url);
            if (import.meta.env.VITE_USE_LOCAL_JSON === false && cachedData) {
                setData(cachedData);
                setLoading(false);
                return;
            }

            const newData = await fetchJson(url);
            console.log("Fetched new data for", url);
            setData(newData);
            try {
                cacheManager.set(url, newData, cacheDuration);
            } catch (cacheErr) {
                console.warn("Cache set failed for", url, cacheErr instanceof Error ? cacheErr.message : String(cacheErr));
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : String(err);
            console.warn("Primary fetch failed for", url, errorMessage);
            if (url !== FALLBACK_JSON_URL) {
                try {
                    const fallbackData = await fetchJson(FALLBACK_JSON_URL);
                    console.log("Fetched fallback data from", FALLBACK_JSON_URL);
                    cacheManager.set(FALLBACK_JSON_URL, fallbackData, cacheDuration);
                    setData(fallbackData);
                    setError(null);
                    return;
                } catch (fallbackErr) {
                    const fallbackMessage = fallbackErr instanceof Error ? fallbackErr.message : String(fallbackErr);
                    console.error("Fallback fetch failed", fallbackMessage);
                    setError(fallbackMessage);
                }
            } else {
                setError(errorMessage);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url, requestOptions]);

    return {data, error, loading}
}