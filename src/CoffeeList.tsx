import { useState, useEffect } from 'react';

export default function CoffeeList() {
  const [coffeeData, setCoffeeData] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json')
      .then((response) => response.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error('Error fetching coffee data:', error));
  }, []);

  return (
    <div>
      {coffeeData.map((coffee) => (
        <div key={coffee.id}>
          <h2>
            {coffee.name}
          </h2>
        </div>
      ))}
    </div>
  );
}