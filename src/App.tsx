import './App.css'
import CoffeeList from './CoffeeList'

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins expertly roasted in small batches and shipped fresh weekly
      </p>
      <div>
        <button>All Products</button>
        <button>Available Now</button>
      </div>
      <CoffeeList />
    </div>
  )
}

export default App
