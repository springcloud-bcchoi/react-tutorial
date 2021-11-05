import {useEffect, useState} from "react";

function App() {
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
            {loading ? <h2>Loading...</h2> : movies.map((movie, index) =>
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <img src={movie.medium_cover_image}/>
                    <p>{movie.summary}</p>
                    <ul>{
                        movie.genres.map(genre => <li>{genre}</li>)
                    }
                    </ul>

                </div>
            )}
        </div>
    )
}

export default App