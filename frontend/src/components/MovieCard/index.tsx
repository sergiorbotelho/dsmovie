import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w220_and_h330_face/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
        title: "Homem-Aranha: Sem Volta Para Casa ",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>


            </div>
        </div>
    );
}

export default MovieCard;