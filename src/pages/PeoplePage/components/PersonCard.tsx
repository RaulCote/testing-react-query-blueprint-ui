import { useMemo } from "react";
import Card from "ui-lib/card";
import H5 from "ui-lib/h5";

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

export default function PersonCard({ person }: { person: IStarWarsPeople }) {
  const personId = useMemo(() => {
    const urlParts = person.url.split("/").filter(Boolean);

    return urlParts[urlParts.length - 1];
  }, [person.url]);

  return (
    <Card
      className="people-card"
      onClick={() => console.log("personId: ", personId)}
      interactive
    >
      <H5>{person.name}</H5>
      <span>Eye Color: {person.eye_color}</span>
    </Card>
  );
}
