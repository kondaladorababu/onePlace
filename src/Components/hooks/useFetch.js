import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initialValue) {

    const [isFetching, setIsfetching] = useState(false);
    const [error, setError] = useState('');
    const [fetchedData, setFetchedData] = useState(initialValue);

    useEffect(() => {
        const fetchData = async () => {
            setIsfetching(true)
            try {
                const data = await fetchFn();
                setFetchedData(data);
                setError('');
            } catch (error) {
                setError(error);
            }
            setIsfetching(false);
        };
        fetchData();
    }, [fetchFn]);

    return {
        isFetching,
        error,
        setError,
        fetchedData
    }
}