
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async() => {
            try {
                console.log("url", url);
                const response = await fetch(url)
                if(!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setData(result);
                console.log('success usefetch',result);
            } catch(err) {
                setError(err.message);
                console.log("usefetch error");
            } finally {
                setLoading(false);
                console.log('userfetch finally');
            }
        };
        fetchData();
    },[url])
    return { data, loading, error};
}

export default useFetch