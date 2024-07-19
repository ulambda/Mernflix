import { useState, useEffect } from 'react';

export default function useFetch(url: string) { 
    const [data, setData] : any = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw Error('could not fetch the data')
                return res.json()
            })
            .then(data => {
                setData(data);
                setLoading(false);
                setError(false)
            })
            .catch(err => {
                console.log(err.message);
                alert(err.message);
                setLoading(false);
                setError(true);
            })

    }, [url]); 

    return { data, loading, error }
}

