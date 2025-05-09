import './App.css'
import CoffeeList from './CoffeeList'

function App() {
  return (
    <div className='bg-[#1c1d1f] m-8 py-12 rounded-lg'>
      <div className='text-center mb-5 px-10'>
        <h1 className='text-4xl mb-4 font-medium'>Our Collection</h1>
        <p className='text-lg text-[#63686f] font-semibold'>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins expertly roasted in small batches and shipped fresh weekly.
        </p>
      </div>
      <div className='flex justify-center gap-2 mb-12'>
        <button className='bg-[#63686f] px-2 py-2 rounded-lg font-bold cursor-pointer'>All Products</button>
        <button className='bg-transparent px-2 py-2 rounded-lg font-bold cursor-pointer'>Available Now</button>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 flex-wrap">
        <CoffeeList />
      </div>
    </div>
  )
}

export default App
