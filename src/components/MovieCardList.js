import { Grid, Pagination } from "@mui/material"
import { useState } from "react";
import MovieCard from "./MovieCard"

const getPageMovies = (movies, pageSize, pageNumber) => {
    return movies.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export default function MovieCardList({ movies, onFavoriteAdded, onRatingChanged }) {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const moviesPerPage = 6;
    const currentPageMovies = getPageMovies(movies, moviesPerPage, currentPageNumber);
    return <><Grid container spacing={5}>
        {
            currentPageMovies.map((movie) => <Grid key={movie.title} item xs={12} sm={6} md={4}>
                <MovieCard movie={movie} onFavorited={onFavoriteAdded} onRatingChanged={onRatingChanged} />
            </Grid>
            )
        }
    </Grid>
        <div className="heading-container">
            <Pagination count={parseInt(movies.length / moviesPerPage)} color="primary" onChange={(_event, page) => { setCurrentPageNumber(page) }} />
        </div>
    </>
}