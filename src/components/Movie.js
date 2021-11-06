import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, title, image, summary, genres}) {
    return (
        <div>
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <img src={image} alt={title}/>
            <p>{summary}</p>
            <ul>{
                genres.map((genre, idx) => <li key={idx}>{genre}</li>)
            }
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie