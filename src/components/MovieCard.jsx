export function MovieCard(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props

    return <div id={id} className="card movie-card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster !== 'N/A'
                    ? <img className="activator" src={poster} alt="poster"/>
                    : <img className="activator" src={`https://via.placeholder.com/288x430?text=${title}`}
                           alt="not poster"/>
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
        </div>
    </div>
}