
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'


function App() {
  const loadedCoffees = useLoaderData()
  const[coffees, setCoffees] =useState(loadedCoffees)
 
  return (
    <div>
     
    

        <h1 className='text-6xl text-purple-500'>Coffee Store</h1>
        
        <div className='grid md:grid-cols-2 gap-9'>
          
          {
            coffees.map(coffee=><CoffeeCard 
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
               setCoffees={setCoffees} ></CoffeeCard>)

          }

        </div>
    </div>
  )
}

export default App
