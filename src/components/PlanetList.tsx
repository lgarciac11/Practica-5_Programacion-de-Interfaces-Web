/*Mostrará un listado de las películas
Cada película será un enlace a su detalle
Cada elemento deberá mostrar:
El número de la película en grande y número romano. Mínimo 50px de fuente
el nombre más pequeño */
const PlanetList = ({data}: {data: Array<{
    id: string;
    totalCount: number;
    name: string;
    population: number;
    gravity: string;
}>}) => {
    return (
<div>
    <ul>
        {data.map((planet)  =>
        <li key = {planet.id}>
         <h1>{planet.totalCount}</h1>
         <h2>{planet.name}</h2>
         <p>{planet.population}</p>
         <p>{planet.gravity}</p>
         </li>
         )} </ul>
    </div>
    )
}
export default PlanetList;