import "./people-page.css";

import { useCallback, useRef } from "react";
import useIntersectionObserver from "utils/shared/useIntersectionObserver";
import { useStarWarsPeoplePages } from "pages/PeoplePage/useStarWarsPeople";
import PersonCard from "./components/PersonCard";

export default function PeoplePage() {
  const intersectionRef = useRef(null);

  const {
    results: people,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useStarWarsPeoplePages();

  const fetchNext = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  useIntersectionObserver(intersectionRef, fetchNext, hasNextPage === false);

  return (
    <section>
      <h1>People</h1>
      <ul className="people-card-container">
        {people.map((person) => (
          <PersonCard key={person.url} person={person} />
        ))}
      </ul>
      {isFetchingNextPage && <h1>Loading...</h1>}
      <div ref={intersectionRef} />
    </section>
  );
}
