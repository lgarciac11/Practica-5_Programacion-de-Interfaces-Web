import VehicleList from '@/components/VehicleList';
import { VehicleAPI } from '@/types';
import { GetStaticProps, NextPage } from "next";
import client from "@/apollo-client";
import { gql } from "@apollo/client";

type Props = {
  vehicles: VehicleAPI[];
};

const Vehicle: NextPage<Props> = ({ vehicles }) => {
  return <VehicleList data={vehicles} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
    {
      allVehicles {
           vehicles{
           name
           costInCredits
           model
           length
           passengers
           cargoCapacity
           id
        }
      }
    }
    `,
  });

  console.log({data})

  const vehicles = data.allVehicles.vehicles.map((vehicle: any) => ({
         id: vehicle.id,
         costInCredits: vehicle.costInCredits,
         model: vehicle.model,
         length: vehicle.length,
         passengers: vehicle.passengers,
         cargoCapacity: vehicle.cargoCapacity,
         name: vehicle.name,
  }))

  return {
    props: {
      vehicles,
    },
  };
};

export default Vehicle;
