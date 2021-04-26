import { useInfiniteQuery } from "react-query";
import starWarsApi from "lib/swapi";

interface IStarWarsPeople {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

const getPeoplePage = ({ pageParam = "https://swapi.dev/api/people/" }) =>
  starWarsApi.request(pageParam);

export const useStarWarsPeoplePages = () => {
  const queryProps = useInfiniteQuery(["sartWarsPeople"], getPeoplePage, {
    getNextPageParam: (people) => {
      return people.next;
    },
  });

  const pagesConcatenated: IStarWarsPeople[] =
    queryProps?.data?.pages?.flatMap((page) => page.results) ?? [];

  return {
    error: queryProps.error,
    fetchNextPage: queryProps.fetchNextPage,
    hasNextPage: queryProps.hasNextPage,
    isFetching: queryProps.isFetching,
    isFetchingNextPage: queryProps.isFetchingNextPage,
    results: pagesConcatenated,
  };
};
