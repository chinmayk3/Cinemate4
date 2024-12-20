import { useEffect, useState } from 'react'

export const useFetch = (apiPath , queryTerm="") => {
    const [data, setData] = useState([]);
    const URL = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        async function movies() {
            const response = await  fetch(URL);
            const json = await response.json();
            setData(json?.results)
        }

        movies()
    }, [URL])
    
    return {data}
}