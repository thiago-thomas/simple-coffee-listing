import "./App.css";
import CoffeeList from "./CoffeeList";
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState("all");
  return (
    <div className="mx-8 my-20 pt-4 pb-14 rounded-lg bg-[#1c1d1f]">
      <div className="px-10 pt-10 pb-5 text-center bg-[url(vector.svg)] bg-contain bg-no-repeat bg-center">
        <h1 className="text-4xl mb-4 font-medium">Our Collection</h1>
        <p className="text-lg text-[#63686f] font-semibold">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>
      <div className="flex justify-center gap-2 mb-10">
        <button
          className={`px-2 py-2 rounded-lg font-bold cursor-pointer ${
            activeButton === "all" ? "bg-[#63686f]" : "bg-transparent"
          }`}
          onClick={() => setActiveButton("all")}
        >
          All Products
        </button>
        <button
          className={`px-2 py-2 rounded-lg font-bold cursor-pointer ${
            activeButton === "available" ? "bg-[#63686f]" : "bg-transparent"
          }`}
          onClick={() => setActiveButton("available")}
        >
          Available Now
        </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 flex-wrap">
        <CoffeeList onlyAvailable={activeButton === "available"} />
      </div>
    </div>
  );
}

export default App;
