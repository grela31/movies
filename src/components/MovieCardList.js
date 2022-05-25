import MovieCard from "./MovieCard"

export default function MovieCardList({ movies }) {
    return <section>
        {
            movies.map((movie) => <MovieCard movie={movie} key={movie.title} />)
        }
    </section>
}