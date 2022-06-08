import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCardList from "../components/MovieCardList";
import Protected from "../components/Protected";
import * as Firebase from "../utils/firebase";

function Home() {
    const [movies, setMovies] = useState([])
    const navigate = useNavigate();

    const getMovies = async () => {

        const movies = await Firebase.getMovies();
        setMovies(movies);
    };

    useEffect(() => {
        getMovies();
    }, [])


    return <Protected>
        <Container>
            <div className="agregarpeli">
            <Button color="primary" variant="contained" onClick={() => { navigate('/add-movie') }}>Añadir Película</Button>
            </div>
            <div className="listadodepeliculas">
            <MovieCardList movies={movies} onFavoriteAdded={async () => { await getMovies(); }}
                onRatingChanged={async () => { await getMovies(); }} />
                </div>
        </Container>
    </Protected>
}

export default Home;