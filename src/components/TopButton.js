import React from 'react'

const TopButton = ({setQuery}) => {

    const cities =[
        {
            id:1,
            title:"New York"
        },
        {
            id:2,
            title:"Istanbul"
        },
        {
            id:3,
            title:"London"
        },
        {
            id:4,
            title:"Paris"
        },
        {
            id:5,
            title:"Tokyo"
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(
            <button  key={city.id} onClick={()=> setQuery({q: city.title})} className='text-white text-lg font-medium button-city'>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButton