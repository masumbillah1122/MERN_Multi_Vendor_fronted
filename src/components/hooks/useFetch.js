import { useEffect, useState } from 'react';
import axios from 'axios';


const useFetch = (url) => {
    const [seller, setSeller] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await axios.get(url);
                setSeller(res.data);

                const result = await axios.get(url);
                setProduct(result.data);

            } catch (error) {
                console.log("Error");
            }
        }
        fetchData();
    }, [url]);

    const reFetch = async () => {
        try {

            const res = await axios.get(url);
            setSeller(res.data);

            const result = await axios.get(url);
            setProduct(result.data);
            
        } catch (error) {
            console.log("Error");
        }
    };
    return { seller, product, reFetch };
}

export default useFetch;