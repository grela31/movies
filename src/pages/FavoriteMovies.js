import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import MovieCardList from "../components/MovieCardList";
import Protected from "../components/Protected";
import * as Firebase from "../utils/firebase";

function FavoriteMovies() {
    const [movies, setMovies] = useState([])

    const loadMovies = async (userId) => {

        const movies = await Firebase.getFavoriteMovies(userId);
        setMovies(movies);
    };

    useEffect(() => {
        const userId = sessionStorage.getItem('UserId');
        loadMovies(userId);
    }, [])


    return <Protected>
        <Container>
            <div className="listadofavoritas">
            <h3>Mis Favoritas</h3>
            <br></br>
            <MovieCardList movies={movies} onFavoriteAdded={async () => { await loadMovies(); }} />
            </div>
        </Container>
    </Protected>
}

export default FavoriteMovies;