import React, { useEffect, useState } from 'react';
const Tempapp=()=>{
   
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("");
    useEffect(()=>{
        const fetchapi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=14800f95395d5bcd93afb4d8f4e05acd`
            const res=await fetch(url);
            const resjson=await res.json();
            // console.log(resjson);
            setcity(resjson.main);
        }
        fetchapi();
    },[search])
    const inputevent=(e)=>{
          
          setsearch(e.target.value);
    }
    return (
        <>
        
        <div className='box'>
            <div className='inputdata'>
                <input 
                type='text'
                value={search}
                className='inputfield'
                onChange={inputevent}
                placeholder="Enter the city"
                />
            </div>
            {
                
                !city?(    <div>
                           {/* <p className='errormsg'>No Data Found </p> */}
                            
                            <div className='info'>
                            <h2 className='location'>
                            <i className="fa-solid fa-street-view"></i>{search===city?search:"Enter Valid City"}
                            </h2>
                            <h1 className='temp'>
                            0.0°Cel
                            </h1>
                            <h3 className='tempminmax'>Min : 0.0°Cel | Max : 0.0°Cel</h3>
                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
   
                        </div> ):(
                    <div>
                    <div className='info'>
              <h2 className='location'>
              <i className="fa-solid fa-street-view"></i>{search}
              </h2>
              <h1 className='temp'>
             {city.temp}°Cel
              </h1>
              <h3 className='tempminmax'>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
         </div>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
        </div>
                )
            }
         
       </div>
        </>
    );
}
export default Tempapp;