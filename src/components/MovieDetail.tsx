import { MovieAPI } from "@/types";

const MovieComponent = ({data}: {data: MovieAPI}) => (
    <div>
        <h1>{data.episodeID}</h1>
        <h2>{data.title}</h2>
        <p>{data.director}</p>
        <p>{data.releaseDate}</p>
        <ul>{data.characters.map((character) => (
            <li key={character.id}>{character.name}</li>
        ))}</ul>
    </div>
);
export default MovieComponent;