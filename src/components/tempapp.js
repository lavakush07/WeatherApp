import React,{useState,useEffect
    } from "react"
import "./css/styles.css"
const Tempapp=()=>{

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    useEffect(()=>{
      const fetchApi=async()=>{
          const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2d7fc2c4f989cf2ef7c58f39be808caa`
          const response=await fetch(url);
          const resJson=await response.json();
          setCity(resJson.main);
      }
      fetchApi();
    },[search])

    return (
        <>
            <div className="box">
             <div className="inputData">
                  <input type="search" value={search } className="inputField" onChange={(event)=>{
                   setSearch(event.target.value)
                  }} />
             </div>
            
{!city? (<p className="errorMsg">No data found</p>):(
    <div>
    <div className="info">
            <h2 className="location">
           {search}
           
          </h2>
          <i className="fas fa-street-view"></i>
          <h1 className="temp">
              {city.temp}cel
          </h1>
          <h3 className="tempmin_max"> Min:{city.temp_min}cel| Max:{city.temp_max}</h3>
            </div>
            <div className="wave-one"> 

            </div>
            <div className="wave-two">

            </div>
            <div className="wave-three">

            </div>
            </div>
           
)}
      </div>      
        </>
    )

    
}
export default Tempapp;