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
            <MovieCardList movies={movies} onFavoriteAdded={async () => { await loadMovies(); }} />
        </Container>
    </Protected>
}

export default FavoriteMovies;