import { Grid } from "@mui/material"
import MovieCard from "./MovieCard"

export default function MovieCardList({ movies, onFavoriteAdded, onRatingChanged }) {
    return <Grid container spacing={5}>
        {
            movies.map((movie) => <Grid key={movie.title} item xs={12} sm={6} md={4}>
                <MovieCard movie={movie} onFavorited={onFavoriteAdded} onRatingChanged={onRatingChanged} />
            </Grid>)
        }
    </Grid>
}