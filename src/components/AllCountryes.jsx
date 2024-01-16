import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllCountryes = () => {
      const [countries,setcountries]=useState(null)
      useEffect(()=>{
        const fetchdata= async()=>{
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result= await response.json();
        setcountries(result)
        }
        fetchdata()
      },[])
  return (
    <>
    <div className="row">
      <h1>Bienvenido</h1>
    {countries ? countries.map((country,index)=>{ return (
       <div key={index} className="card col-4 mb-5 ms-5" style={{ width: '18rem' }}>
       <img src={country.flags.svg} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{country.name.common}</h5>
         <p className="card-text"></p>
         <Link to={`https://www.google.com/search?q=${country.name.common}`}>info</Link>
       </div>
     </div>
    )}):<h1>loading</h1>}
    </div>
    </>
  )
}
