import { AuthorAPI} from "@/types";

const AuthorComponent = ({data}: {data: AuthorAPI}) => (
    <div>
        <h1>{data.id}</h1>
        <h2>{data.birthYear}</h2>
        <p>{data.eyeColor}</p>
        <p>{data.gender}</p>
        <p>{data.height}</p>
        <ul>{data.homeworld.map((home) => (
            <li key={home.id}>{home.name}</li>
        ))}</ul>
        <ul>{data.species.map((specie) => (
            <li key={specie.id}>{specie.name}</li>
        ))}</ul>
    </div>
);
