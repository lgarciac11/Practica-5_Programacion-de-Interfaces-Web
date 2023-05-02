
import PlanetList from '@/components/PlanetList';
import { PlanetAPI } from '@/types';
import { GetStaticProps, NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

type Props = {
  planets: PlanetAPI[];
};

const Planets: NextPage<Props> = ({ planets }) => {
  return <PlanetList data={planets} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
      allPlanets {
        planets {
         totalCount
         name
         population
         gravity
         id
          }
        }
      }
    }
    `,
  });

  return {
    props: {
      movies: data.allPlanets.planets.map((planet: any) => ({
        id: planet.id,
        totalCount: planet.totalCount,
        name: planet.name,
        population: planet.population,
        gravity: planet.gravity,
      })),
    },
  };
};

export default Planets;
