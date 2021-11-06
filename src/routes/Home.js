import {useEffect, useState} from "react";
import Movie from "../components/Movie";


function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
        const json = await response.json();
        setLoading(false);
        setMovies(json.data.movies);
    }
    useEffect(() => {
        getMovies().then(r => null);
    }, [])
    console.log(movies);
    return (
        <div>
            {loading ? <h2>Loading...</h2> : movies.map((movie, idx) =>
                <Movie
                    key={idx}
                    id={movie.id}
                    title={movie.title}
                    image={movie.medium_cover_image}
                    summary={movie.summary}
                    genres={movie.genres}
                />
            )}
        </div>
    )
}


export default Home;
