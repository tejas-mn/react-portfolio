import { useEffect, useState } from "react"

export default function useFetch(url, requestOptions) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                setError('Error');
            } else {
                setData(await response.json());
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