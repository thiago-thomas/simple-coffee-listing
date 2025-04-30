interface Coffee {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  votes: number;
  popular: true;
}

export default function Card({ coffee }: { coffee: Coffee }) {
  return (
    <div>
      <img src={coffee.image} alt={coffee.name} className="object-cover mb-1 rounded-lg" />
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xl font-bold">{coffee.name}</h2>
        <p className="text-lg font-semibold">{coffee.price}</p>  
      </div>
      <div className="flex items-center gap-1">
        <span>⭐</span>
        <span className="text-lg font-bold">{coffee.rating}</span>
        <span className="text-base font-semibold">({coffee.votes} votes)</span>  
      </div>
    </div>
  )
}