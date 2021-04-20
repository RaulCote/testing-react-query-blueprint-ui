import { useStarWarsPeoplePages } from "utils/useStarWarsPeople";
import Button from "ui-lib/button";

export default function PeoplePage() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useStarWarsPeoplePages();

  console.log("PeoplePage :::: pages :::: ", data);

  return (
    <div>
      <Button onClick={() => fetchNextPage()} text="Fext Next Page" />
    </div>
  );
}
