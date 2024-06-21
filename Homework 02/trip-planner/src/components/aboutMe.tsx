import Movies from "./movies"


interface AboutMeSomeProps {
    fullName: string,
    from: string;
    favoriteMovies: string[];
}

export const AboutMe = (props: AboutMeSomeProps) => {
    return (
        <div>
            <p>Full Name: {props.fullName}</p>
            <p>From: {props.from}</p>
            <h3>My favorite movies:</h3>
            <Movies movies={props.favoriteMovies}/>
        </div>
    )
}