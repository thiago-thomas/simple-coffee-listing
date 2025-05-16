import { useState, useEffect } from "react";
import Card from "./Card";

export default function CoffeeList({
  onlyAvailable,
}: {
  onlyAvailable?: boolean;
}) {
  const [coffeeData, setCoffeeData] = useState<
    {
      id: number;
      name: string;
      image: string;
      price: string;
      rating: string;
      votes: number;
      popular: boolean;
      available: boolean;
    }[]
  >([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error("Error fetching coffee data:", error));
  }, []);

  return (
    <>
      {coffeeData
        .filter((coffee) => !onlyAvailable || coffee.available)
        .map((coffee) => (
          <Card key={coffee.id} coffee={coffee} />
        ))}
    </>
  );
}
