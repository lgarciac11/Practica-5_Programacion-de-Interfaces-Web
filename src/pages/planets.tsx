
import PlanetList from '@/components/PlanetList';
import { PlanetAPI } from '@/types';
import { GetStaticProps, NextPage } from "next";
import client from "@/apollo-client";
import { gql } from "@apollo/client";

type Props = {
  planets: PlanetAPI[];
};

const Planet: NextPage<Props> = ({ planets }) => {
  return <PlanetList data={planets} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
    {
      allPlanets {
        planets {
         
         name
         population
         gravity
         id
          }
        }
      }
    `,
  });

  console.log({data})

  const planets = data.allPlanets.planets.map((planet: any) => ({
    id: planet.id,
    // totalCount: planet.totalCount,
    name: planet.name,
    population: planet.population,
    gravity: planet.gravity,
  }))

  return {
    props: {
      planets,
    },
  };
};

export default Planet;
