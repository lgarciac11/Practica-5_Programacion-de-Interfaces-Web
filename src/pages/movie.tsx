import MovieList from "@/components/MovieList";
import { MovieAPI } from "@/types";
import { GetStaticProps, NextPage } from "next";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

type Props = {
  movies: MovieAPI[];
};

const Movies: NextPage<Props> = ({ movies }) => {
  return <MovieList data={movies} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache(),
  });

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
            characters {
              id
              name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      movies: data.allFilms.films.map((film: any) => ({
        id: film.id,
        episodeID: film.episodeID,
        title: film.title,
        director: film.director,
        releaseDate: film.releaseDate,
        characters: film.characters,
      })),
    },
  };
};

export default Movies;

