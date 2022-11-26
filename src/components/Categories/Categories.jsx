import React,{useContext,useEffect} from 'react'
import { myContext } from '../Context/Context'
const Categories = () => {
 const {fetchCategories,categories}=useContext(myContext)
 useEffect(()=>{
 fetchCategories();
 },[fetchCategories])
  return (
    <div>Categories</div>
  )
}

export default Categories