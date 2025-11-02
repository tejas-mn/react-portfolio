import { useEffect, useState } from "react"
import { cacheManager } from "../utils/cacheManager"

export default function useFetch(url, requestOptions, cacheDuration = 3600000) { // Default 1 hour cache
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const cachedData = cacheManager.get(url);
            if (cachedData) {
                console.log("Using cached data for", url);
                setData(cachedData);
                setLoading(false);
                return;
            }

            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                setError('Error');
            } else {
                const newData = await response.json();
                console.log("Fetched new data for", url);
                cacheManager.set(url, newData, cacheDuration);
                setData(newData);
            }
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url, requestOptions]);

    return {data, error, loading}
}