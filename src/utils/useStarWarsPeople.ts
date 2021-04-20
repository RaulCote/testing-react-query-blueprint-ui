import { useInfiniteQuery } from "react-query";
import starWarsApi from "lib/swapi";

const getPeoplePage = ({ pageParam = "https://swapi.dev/api/people/" }) =>
  starWarsApi.request(pageParam);

export const useStarWarsPeoplePages = () => {
  return useInfiniteQuery(["sartWarsPeople"], getPeoplePage, {
    getNextPageParam: (people) => {
      return people.next;
    },
  });
};
