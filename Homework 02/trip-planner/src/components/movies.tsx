


interface MovieProps {
    movies: string[];
}

const Movies = (props: MovieProps) => {
    return (
        <div>
            <ul>
                {props.movies.map((movie, oneProps) => (<li key={oneProps}>{movie}</li>))}
            </ul>
        </div>
    )
}

export default Movies 