import {MovieCard} from './MovieCard'

export function MoviesList(props) {
    const {movies = []} = props;
    return <div className="movies-list">
        {
            movies.length
                ? movies.map((movie) => (
                    <MovieCard key={movie.imdbID} {...movie}/>
                ))
                : <h4>Nothing found</h4>
        }
    </div>
}