import React, { useEffect, useCallback, useState, useContext } from 'react'
import { myContext } from '../Context/Context'
import './Homepage.scss'
const Homepage = () => {
  const [search, setSearch] = useState('')

  const { fetchHomeMeals, meals } = useContext(myContext);
  const fetchMealsHandler = useCallback(() => {
    fetchHomeMeals(search)
  }, [search, fetchHomeMeals])
  return (
    <div className='home'>
      <div className='home-search'>
        <input type="text" placeholder="enter meal name" value={search} onChange={(e) => setSearch(e.target.value)} />
        &nbsp;
        <button type="submit" onClick={fetchMealsHandler}>Search</button>
      </div>
      <div className='home-meals-container'>

        {
          meals? meals.map(meal =>
            <div className='home-meals' key={meal.idMeal}>
              <img src={meal.strMealThumb} alt="#"/>
               <h4>{meal.strMeal}</h4>
            
            </div>
          ) : <h2>No meals found try another....</h2>
        }
      </div>
    </div>
  )
}

export default Homepage