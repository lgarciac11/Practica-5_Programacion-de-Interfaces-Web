import MovieList from "@/components/MovieList";
import { MovieAPI } from "@/types";
import { GetStaticProps, NextPage } from "next";
import client from "@/apollo-client";
import { gql } from "@apollo/client";

type Props = {
  movies: MovieAPI[];
};

const Movies: NextPage<Props> = ({ movies }) => {
  return <MovieList data={movies} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
    {
      allFilms {
        films {
          id
          title
          episodeID
          director
          releaseDate
          characterConnection {
            characters {
              id
              name
            }
          }
        }
      }
    }
    `,
  });

  console.log({data})

  const movies = data.allFilms.films.map((film: any) => ({
    id: film.id,
    episodeID: film.episodeID,
    title: film.title,
    director: film.director,
    releaseDate: film.releaseDate,
    characters: film.characterConnection.characters,
  }))

  return {
    props: {
      movies,
    },
  };
};

export default Movies;

