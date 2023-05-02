/*Mostrará un listado de las películas
Cada película será un enlace a su detalle
Cada elemento deberá mostrar:
El número de la película en grande y número romano. Mínimo 50px de fuente
el nombre más pequeño */
const MovieList = ({data}: {data: Array<{
    id: string;
    episodeID: number;
    director: string;
    title: string;
    releaseDate: string;
    characters:Array<{
        name: string;
        id: string;
        }>;
}>}) => {
    return (
<div>
    <ul>
        {data.map((movie)  =>
        <li key = {movie.id}>
         <h1>{movie.episodeID}</h1>
         <h2>{movie.title}</h2>
         <p>{movie.director}</p>
         <p>{movie.releaseDate}</p>
         <ul>{movie.characters.map((character) => (
             <li key={character.id}>{character.name}</li>
         ))} </ul>
         </li>
         )} </ul>
    </div>
    )
}
export default MovieList;