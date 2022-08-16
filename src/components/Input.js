import React, { useState } from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'


const Input = ({ setQuery, units, setUnits }) => {
    const [city, setCity]= useState("")

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
      };


    const HandleSearch =()=>{
        if(city !== "") setQuery({q: city})
            
        
    }

    const HandLocationClick = () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon
                })
            })
        }
    }


  return (
    <div className='input-container flex flex-row justify-center my-6'>
    <div className='input-box flex flex-row w-3/4 items-center justify-center space-x-4 '>
        <input type="text"
        value={city}
        onChange={(e)=>setCity(e.currentTarget.value)}
         className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" placeholder='Search for city...'/>
         <div className='icons flex items-center justify-center space-x-4  '>
        <UilSearch size={25} onClick={HandleSearch} className="icon text-white cursor-pointer transition ease-out hover:scale-125"/>

        <UilLocationPoint size={25} onClick={HandLocationClick} className="icon text-white cursor-pointer transition ease-out hover:scale-125" />
        </div>
    </div>
    <div className='FaCe flex flex-row w-1/4  items-center justify-center'>
        <button onClick={handleUnitsChange} name='metric' className='text-xl text-white font-light transition ease-out hover:scale-125'>°C</button>
        <p className='text-white text-xl mx-1'>|</p>
        <button onClick={handleUnitsChange} name='imperial' className='text-xl text-white font-light transition ease-out hover:scale-125'>°F</button>
    </div>
    </div>
  )
}

export default Input