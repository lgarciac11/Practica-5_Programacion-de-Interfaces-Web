/*Mostrará un listado de las películas
Cada película será un enlace a su detalle
Cada elemento deberá mostrar:
El número de la película en grande y número romano. Mínimo 50px de fuente
el nombre más pequeño */
const VehicleList = ({data}: {data: Array<{
    id: string;
    totalCount: number;
    costInCredits: number;
    model: string;
    length: number;
    passengers: string;
    cargoCapacity: number;
}>}) => {
    return (
<div>
    <ul>
        {data.map((vehicle)  =>
        <li key = {vehicle.id}>
         <h1>{vehicle.totalCount}</h1>
         <h2>{vehicle.costInCredits}</h2>
         <p>{vehicle.model}</p>
         <p>{vehicle.length}</p>
         <p>{vehicle.passengers}</p>
         <p>{vehicle.cargoCapacity}</p>
         </li>
         )} </ul>
    </div>
    )
}
export default VehicleList;