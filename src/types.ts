
/*Número de la película en formato romano
Director
título
Fecha de salida
Listado de caracteres
Nombre
Será un enlace al detalle del autor */

export type MovieAPI = {
    id: string;
    episodeID: number;
    director: string;
    title: string;
    releaseDate: string;
    characters:[
        {
        name: string;
        id: string;
        }
    ];
  };
  /*Se debe ver el número de planetas totales
Cada elemento tendrá la siguiente información
Círculo con color en función de su población
Rojo: de 0 a 6000000
Verde: de 6000000 a 4500000000
Morado: resto de poblaciones
Nombre
Población
Gravedad */
export type PlanetAPI = {
    id: string;
    totalCount: number;
    name: string;
    population: number;
    gravity: string;
};
/*Mostrará un listado con los vehículos
Se mostrará el número de vehículos totales
Cada elemento tendrá la siguiente información
Coste en créditos en grande
Nombre
Modelo
Longitud
Pasajeros
Capacidad */
export type VehicleAPI = {
    id: string;
    totalCount: number;
    costInCredits: number;
    model: string;
    length: number;
    passengers: string;
    cargoCapacity: number;
};
  /*Se mostrará siguiendo el estilo del detalle de una película
Nombre
cumpleaños
color de los ojos
género
altura
Nombre del planeta de nacimiento
Nombre de la especie */
  export type AuthorAPI = {
    id: string;
    name: string;
    birthYear: string;
    eyeColor: string;
    gender: string;
    height: string;
    homeworld:[
        {
        name: string;
        id: string;
        }
    ];
    species: [
        {
        name: string;
        id: string;
        }
    ];
  };