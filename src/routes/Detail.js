import {useParams} from 'react-router-dom'
import {useEffect} from "react";

function Detail() {
    const {id} = useParams();
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?movie_id=${id}");
        const json = await response.json();
        console.log(json);
    }
    useEffect(() => {
        getMovies().then(r => null)

    }, [])
    return <h1>Detail</h1>
}

export default Detail;