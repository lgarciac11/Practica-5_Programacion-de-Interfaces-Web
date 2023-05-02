import VehicleList from '@/components/VehicleList';
import { VehicleAPI } from '@/types';
import { GetStaticProps, NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

type Props = {
  vehicles: VehicleAPI[];
};

const Vehicles: NextPage<Props> = ({ vehicles }) => {
  return <VehicleList data={vehicles} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        allVehicles {
            vehiculos {
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
      vehicles: data.allVehicles.vehicles.map((vehicle: any) => ({
        id: vehicle.id,
        totalCount: vehicle.totalCount,
        costInCredits: vehicle.costInCredits,
        model: vehicle.model,
        length: vehicle.length,
        passengers: vehicle.passengers,
        cargoCapacity: vehicle.cargoCapacity,
      })),
    },
  };
};

export default Vehicles;
