import React,{createContext,useState,useCallback} from "react";
import axios from 'axios'
export const myContext=createContext();
export const AppContext=({children})=>{
    const[meals,setMeals]=useState([])
    const[categories,setCategories]=useState([])
    const[randomMeal,setRandommeal]=useState([])

    const fetchHomeMeals=useCallback((search)=>{
        console.log(search)
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res=>{
        console.log(res.data)
        setMeals(res.data.meals)
    })
    },[])

    
    const fetchCategories=useCallback(()=>{
      axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then(res=>{
        console.log(res.data)
        setCategories(res.data.categories)
    })
    },[])
    return (
        <myContext.Provider value={{fetchHomeMeals,meals,fetchCategories,categories} }>{children}</myContext.Provider>
    )

}
