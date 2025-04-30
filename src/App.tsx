import './App.css'
import CoffeeList from './CoffeeList'

function App() {
  return (
    <div className='bg-amber-950 m-8 rounded-lg'>
      <div className='text-center mb-2 mt-8 px-8'>
        <h1 className='text-4xl'>Our Collection</h1>
        <p className='text-lg text-gray-600'>
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins expertly roasted in small batches and shipped fresh weekly
        </p>
      </div>
      <div>
        <button>All Products</button>
        <button>Available Now</button>
      </div>
      <CoffeeList />
    </div>
  )
}

export default App
