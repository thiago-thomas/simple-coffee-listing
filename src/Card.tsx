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
    <div className="relative">
      <img src={coffee.image} alt={coffee.name} className="object-cover mb-1 rounded-lg" />
      <div className="flex justify-between items-center mb-2 mt-4">
        {coffee.popular && <span className="absolute top-[10px] left-[10px] bg-amber-300 text-black px-3 py-1 text-xs font-semibold rounded-xl">Popular</span>}
        <h2 className="text-xl font-semibold">{coffee.name}</h2>
        <p className="bg-[#bee3cc] text-[#2d3232] text-md font-bold px-2 py-1 rounded-sm">{coffee.price}</p>  
      </div>
      <div className="flex items-center gap-1">
        <span>⭐</span>
        <span className="text-lg font-bold">{coffee.rating}</span>
        <span className="text-lg font-semibold text-[#63686f]">({coffee.votes} votes)</span>  
      </div>
    </div>
  )
}